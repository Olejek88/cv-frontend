import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = (process.env.NODE_ENV === 'development')
    ? 'http://svc.shtrm88.ru/api/'
    : 'http://api.olegrom.de/api/';

const responseBody = res => res.body;

const requests = {
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            .then(responseBody)
            .catch((error) => {
                console.log("Api call error");
            })
};

const Categories = {
    all: () =>
        requests.get(`categories`),
    get: id =>
        requests.get(`categories/${id}`),
};

const About = {
    all: () =>
        requests.get(`about`),
};

const Stack = {
    all: () =>
        requests.get(`stack`),
};

const Cv = {
    all: () =>
        requests.get(`cv`),
};

const Career = {
    all: () =>
        requests.get(`career`),
};

const ProjectImage = {
    all: (id) =>
        requests.get(`project-images?project_id=${id}&expand=image`),
    get: (id) =>
        requests.get(`project-images/${id}`),
    create: (project_image) =>
        requests.post(`project-images`, project_image)
};

const Projects = {
    category: (id) =>
        requests.get(`projects/category/${id}?expand=projectImages.image`),
    get: id =>
        requests.get(`projects/${id}?expand=projectImages.image`),
    tag: id =>
        requests.get(`projects/tag/${id}?expand=projectImages.image`),
    all: (lim = 15) =>
        requests.get(`projects/limit/${lim}`),
};

const Tags = {
    all: () => requests.get('/tags'),
    save: (tag) => requests.put(`/tags`, tag)
};

const Image = {
    all: () =>
        requests.get(`photos/`),
    get: image =>
        requests.get(`photos/${image}`),
};

export default {
    Categories,
    Projects,
    ProjectImage,
    Image,
    About,
    Cv,
    Career,
    Stack,
    Tags
};
