import {action} from 'mobx';
import agent from "../agent";

export class CategoryStore {
    categoryRegistry = new Map();
    isLoading = true;

    loadCategories() {
        if (this.categoryRegistry.size > 0)
            return Promise.resolve(this.categoryRegistry);
        return agent.Categories.all()
            .then(action((categories) => {
                this.categoryRegistry.clear();
                if (categories !== undefined) {
                    categories.forEach(category =>
                        this.categoryRegistry.set(category.id, category));
                }
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    loadCategory(id) {
        this.isLoading = true;
        return agent.Categories.get(id)
            .then(action((category) => {
                //this.categoryRegistry.set(id, category);
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
