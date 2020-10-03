import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import {parse as qsParse} from 'query-string';
import Banner from "./Banner";
import Experience from "../Experience/Experience";
import CategoryHeader from "./CategoryHeader";
import CategoryTitle from "./CategoryTitle";

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            updated: false
        };
    }

    componentDidMount() {
        let predicate = {
            filter: '',
            id: 0
        };
        this.props.projectStore.setPredicate(predicate);
        let my = this;
        let projects = my.state.projects;
        this.props.projectStore.loadProjects().then(() => {
            this.props.projectStore.projectsRegistry.forEach(function (project, i) {
                projects.push(<Experience project={project} key={i}/>);
                my.setState({projects: projects});
            });
            my.setState({updated: true});
        });

    }

    componentDidUpdate(previousProps) {
        if (
            this.getTab(this.props) !== this.getTab(previousProps) ||
            this.getTag(this.props) !== this.getTag(previousProps)
        ) {
            this.props.projectStore.setPredicate(this.getPredicate());
            this.props.projectStore.loadProjects();
        }
    }

    getTag(props = this.props) {
        return qsParse(props.location.search).tag || "";
    }

    getTab(props = this.props) {
        return qsParse(props.location.search).tab || 'all';
    }

    getPredicate(props = this.props) {
        switch (this.getTab(props)) {
            case 'feed':
                return {myFeed: true};
            case 'tag':
                return {tag: qsParse(props.location.search).tag};
            default:
                return {};
        }
    }

    render() {
        //const { t } = this.props;
        //console.log(t('my_projects.label'));
        return (
            <React.Fragment>
                <Banner/>
                <CategoryHeader/>
                <CategoryTitle/>
                <section className="newspage newsadd">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="newspagelink">
                                {this.state.updated && this.state.projects}
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default inject('projectStore')(withRouter(MainView));
