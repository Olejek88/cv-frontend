import Header from './Header/Header';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

import Project from './Project';
import Home from './Home';
import About from './About';
import Footer from "./Footer";
import Projects from "./Projects";
import {Helmet} from "react-helmet";

class App extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Приложения, проекты, сайты и системы</title>
                    <description>Здесь прведен полный перечень того, чем я занимался.</description>
                </Helmet>
                <Header/>
                <Switch>
                    <Route path="/projects/:filter/:id" component={Projects}/>
                    <Route path="/project/:id" component={Project}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default inject('projectStore')(withRouter(observer(App)));