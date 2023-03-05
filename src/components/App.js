import Header from './Header/Header';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {observer} from 'mobx-react';

import Home from './Home';
import About from './About';
import Footer from "./Footer";
import Projects from "./Projects";
import Project from "./Project";
import Stack from "./Stack";
import CV from "./Cv";
import Career from "./Career";
import Mobile from "./Mobile";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/cv" component={CV}/>
                    <Route path="/career" component={Career}/>
                    <Route path="/stack" component={Stack}/>
                    <Route path="/projects/:filter/:id" component={Projects}/>
                    <Route path="/mobile" component={Mobile}/>
                    <Route path="/project/:id" component={Project}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(observer(App));
