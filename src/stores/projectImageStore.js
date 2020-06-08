import {action} from 'mobx';
import agent from '../agent';

export class ProjectImageStore {

    loadImages(project_id) {
        this.isLoading = true;
        return agent.ProjectImage.all(project_id)
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    loadImage(id) {
        this.isLoading = true;
        return agent.ProjectImage.get(id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new ProjectImageStore();
