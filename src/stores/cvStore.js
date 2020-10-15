import {action} from 'mobx';
import agent from '../agent';

export class CVStore {
    isLoading = false;
    cvRegistry = new Map();
    predicate = {};

    defaultData =
        {
            id: 1,
            title: 'Работа',
            title_en: 'Work',
            title_de: 'Work',
            image: 'images/house.png',
            description: 'Описание',
            description_en: 'description',
            description_de: 'beschreibung'
        };

    clear() {
        this.cvRegistry.clear();
    }

    static $req() {
        return agent.Cv.all();
    }

    loadCv() {
        this.isLoading = true;
        return CVStore.$req()
            .then(action((cv) => {
                this.cvRegistry.clear();
                cv.forEach(cv => this.cvRegistry.set(cv.id, cv));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
            }));
    }
}

export default new CVStore();
