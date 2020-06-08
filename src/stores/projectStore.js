import {action} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";

export class ProjectStore {
    isLoading = false;
    projectsRegistry = new Map();
    predicate = {};

    defaultData =
        {
            id: 1,
            title: 'Проект #1',
            images: imageStore.images,
            description: 'Описание проекта',
        };

    clear() {
        this.projectsRegistry.clear();
    }

    getProject(id) {
        return this.projectsRegistry.get(id);
    }

    setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 12, start = 0) {
        if (this.predicate.filter && this.predicate.id)
            return agent.Projects.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Projects.all(count, start);
    }

    loadProjects() {
        this.isLoading = true;
        return this.$req()
            .then(action((projects) => {
                this.projectsRegistry.clear();
                projects = [];
                projects.push(this.defaultData);
                projects.push(this.defaultData);
                projects.push(this.defaultData);
                projects.push(this.defaultData);
                console.log(projects);
                projects.forEach(project => this.projectsRegistry.set(project.id, project));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                console.log(err);
            }));
    }

    loadProject(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const project = this.getProject(id);
            if (project) return Promise.resolve(project);
        }
        this.isLoading = true;
        return agent.Projects.get(id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new ProjectStore();
