import {action} from 'mobx';
import agent from '../agent';

export class ImageStore {
    loadingImage;
    isLoading = false;
    predicate = {};

    images = [
        {
            _id: '1',
            title: 'Фото1',
            path: 'files/temp.png'
        },
        {
            _id: '2',
            title: 'Фото2',
            path: 'files/temp.png'
        }
    ];

    setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.predicate = predicate;
    }

    $req() {
        if (this.predicate.filter && this.predicate.id)
            return agent.Image.filter(this.predicate.filter, this.predicate.id);
        return agent.Image.all();
    }

    loadImages() {
        this.isLoading = true;
        this.$req()
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.images;
    }
}

export default new ImageStore();
