import {action} from 'mobx';
import agent from "../agent";

class CategoryStore {
    categoryRegistry = new Map();
    isLoading = true;

    /*
        defaultData = [
            {id: 1, title: 'Android apps'},
            {id: 2, title: 'Systems'},
            {id: 3, title: 'Interfaces'},
            {id: 4, title: 'Products'},
            {id: 5, title: 'Projects'},
            {id: 6, title: 'Online shops'},
            {id: 7, title: 'Sites'},
            {id: 8, title: 'PC Apps'},
            {id: 9, title: 'OPC'}];
    */

    loadCategories() {
        if (this.categoryRegistry.size > 0)
            return Promise.resolve(this.categoryRegistry);
        return agent.Categories.all()
            .then(action((categories) => {
                this.categoryRegistry.clear();
                categories.forEach(category =>
                    this.categoryRegistry.set(category.id, category));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    loadCategory(id) {
        if (this.categoryRegistry.size > 0) {
            return this.categoryRegistry.get(parseInt(id, 10));
        }
        this.isLoading = true;
        return agent.Categories.get(id)
            .then(action((category) => {
                this.categoryRegistry.set(id, category);
                return category;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new CategoryStore();
