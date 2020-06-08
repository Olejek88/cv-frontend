import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import App from './components/App';

import projectStore from "./stores/projectStore";
import projectImageStore from "./stores/projectImageStore";
import imageStore from './stores/imageStore';
import tagStore from "./stores/tagStore";
import categoryStore from "./stores/categoryStore";


const stores = {
    projectStore,
    projectImageStore,
    categoryStore,
    imageStore,
    tagStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
//useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
), document.getElementById('page'));
