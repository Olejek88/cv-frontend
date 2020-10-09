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
            title_en: 'Project #1',
            title_de: 'Project #1',
            photos: imageStore.images,
            description: 'Описание проекта',
            description_en: 'Project description',
            description_de: 'Projektbeschreibung',
            git: '',
            link: '',
            stack: '',
            role: '',
            usage: '',
            tags: []
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
        if (this.predicate.id)
            return agent.Projects.category(this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Projects.all(count, start);
    }

    loadProjects() {
        this.isLoading = true;
        return this.$req()
            .then(action((projects) => {
                this.projectsRegistry.clear();
                projects.forEach(project => this.projectsRegistry.set(project.id, project));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                //console.log(err);
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
