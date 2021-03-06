import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React, {Suspense} from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import App from './components/App';
import './i18n';

import projectStore from "./stores/projectStore";
import projectImageStore from "./stores/projectImageStore";
import imageStore from './stores/imageStore';
import tagStore from "./stores/tagStore";
import cvStore from "./stores/cvStore";
import categoryStore from "./stores/categoryStore";
import careerStore from "./stores/careerStore";
import aboutStore from "./stores/aboutStore";
import stackStore from "./stores/stackStore";

import {enableLogging} from 'mobx-logger';

// optional
const config = {};
enableLogging(config);

const stores = {
    projectStore,
    projectImageStore,
    categoryStore,
    imageStore,
    aboutStore,
    stackStore,
    cvStore,
    careerStore,
    tagStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
//useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
        <HashRouter>
            <Suspense fallback={<div>Loading... </div>}>
                <App/>
            </Suspense>
        </HashRouter>
    </Provider>
), document.getElementById('page') || document.createElement('div'));
