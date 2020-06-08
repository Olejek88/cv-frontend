import {action} from 'mobx';
import agent from "../agent";

class TagStore {
    tagsRegistry = new Map();
    isLoading = true;

    staticData = [
        {_id: '1', title: 'SCADA'},
        {_id: '2', title: 'Frontend'},
        {_id: '3', title: 'Backend'},
        {_id: '4', title: 'Android'}
    ];

    get staticDataOptions() {
        return this.staticData.map(x => ({label: x.label, value: x._id}))
    };

    loadTags() {
        this.isLoading = true;
        return agent.Tags.all()
            .then(action(({tags}) => {
                this.tagsRegistry.clear();
                tags.forEach(tag =>
                    this.tagsRegistry.set(tag.id, tag));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new TagStore();
