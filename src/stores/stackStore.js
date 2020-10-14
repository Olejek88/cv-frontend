import {action} from 'mobx';
import agent from '../agent';

export class stackStore {
    isLoading = false;
    stackRegistry = new Map();
    predicate = {};

    clear() {
        this.stackRegistry.clear();
    }

    $req() {
        return agent.Stack.all();
    }

    loadStack() {
        this.isLoading = true;
        return this.$req()
            .then(action((stack) => {
                this.stackRegistry.clear();
                stack.forEach(stack => this.stackRegistry.set(stack.id, stack));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
            }));
    }
}

export default new stackStore();
