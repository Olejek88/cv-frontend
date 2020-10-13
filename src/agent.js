import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://svc.shtrm88.ru/api/';

const responseBody = res => res.body;

const requests = {
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            //.setHeader('')
            .then(responseBody)
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
    tags: id =>
        requests.get(`projects/${id}/tags`),
    all: (lim = 10, page = 0) =>
        requests.get(`projects`),
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
    Tags
};
