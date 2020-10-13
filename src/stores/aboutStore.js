import {action} from 'mobx';
import agent from '../agent';

export class aboutStore {
    isLoading = false;
    aboutRegistry = new Map();
    predicate = {};

    clear() {
        this.aboutRegistry.clear();
    }

    $req() {
        return agent.About.all();
    }

    loadAbout() {
        this.isLoading = true;
        return this.$req()
            .then(action((about) => {
                this.aboutRegistry.clear();
                about.forEach(about => this.aboutRegistry.set(about.id, about));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
            }));
    }
}

export default new aboutStore();
