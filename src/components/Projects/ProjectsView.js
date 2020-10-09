import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import Experience from "../Experience/Experience";
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import {withCookies} from "react-cookie";

class ProjectsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            title: "",
            updated: false,
            id: '0'
        };
    }

    componentWillReceiveProps(nextProps, next) {
        this.setState({projects: [], id: nextProps.i});
        this.fillList(nextProps)
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {
        if (prevProps.data !== this.props.data) {
            if (!this.state.updated)
                this.setState({updated: true});
        }
    }

    fillList(props) {
        let my = this;
        const {cookies} = this.props;
        let lang = cookies.get('lang');

        let predicate = {
            id: this.state.id
        };
        if (props.i !== '0') {
            predicate.id = props.i;
        }
        this.props.projectStore.setPredicate(predicate);

        this.props.categoryStore.loadCategory(props.i)
            .then((category) => {
                if (lang === "ru") my.setState({title: category.title});
                if (lang === "en") my.setState({title: category.title_en});
                if (lang === "de") my.setState({title: category.title_de});
            });

        let projects = my.state.projects;
        this.props.projectStore.loadProjects().then(() => {
            this.props.projectStore.projectsRegistry.forEach(function (project, i) {
                projects.push(<Experience project={project} key={i}/>);
                my.setState({projects: projects});
            });
            my.setState({updated: true});
        });
    }

    render() {
        return (
            <React.Fragment>
                <Banner/>
                <CategoryHeader title={this.state.title} type='project'/>
                {/*<CategoryTitle/>*/}
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

export default inject('projectStore', 'categoryStore')(withCookies(withRouter(ProjectsView)));