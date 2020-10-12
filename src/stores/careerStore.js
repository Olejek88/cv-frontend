import {action} from 'mobx';
import agent from '../agent';

export class careerStore {
    isLoading = false;
    careerRegistry = new Map();
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
        this.careerRegistry.clear();
    }

    $req() {
        return agent.Career.all();
    }

    loadCareer() {
        this.isLoading = true;
        return this.$req()
            .then(action((career) => {
                this.careerRegistry.clear();
                career.forEach(career => this.careerRegistry.set(career.id, career));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
            }));
    }
}

export default new careerStore();
