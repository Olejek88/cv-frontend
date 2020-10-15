import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import Experience from "../Experience/Experience";
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import {withCookies} from "react-cookie";
import {Helmet} from "react-helmet";

class ProjectsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            title: "",
            lang: "ru",
            updated: false,
            fillList: this.fillList.bind(this),
            id: '0'
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.i !== state.id) {
            state.id = props.i;
            return {
                props: state.fillList(props)
            }
        }
        return null;
    }

    fillList(props) {
        let my = this;
        my.setState({updated: false});
        const {cookies} = this.props;
        let lang = cookies.get('lang');

        let predicate = {
            id: this.state.id
        };
        if (props.i !== '0') {
            predicate.id = props.i;
            predicate.filter = props.filter;
        }
        this.props.projectStore.setPredicate(predicate);

        if (props.filter === 'category') {
            this.props.categoryStore.loadCategory(props.i)
                .then((category) => {
                    if (lang === "ru") my.setState({title: category.title});
                    if (lang === "en") my.setState({title: category.title_en});
                    if (lang === "de") my.setState({title: category.title_de});
                });
        } else {
            my.setState({title: "Проекты и программы по тэгу"});
        }

        let projects = [];
        this.props.projectStore.loadProjects().then(() => {
            this.props.projectStore.projectsRegistry.forEach(function (project, i) {
                projects.push(<Experience project={project} key={i}/>);
            });
            my.setState({projects: projects});
            my.setState({updated: true});
        });
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {
        if (prevProps.data !== this.props.data) {
            if (!this.state.updated)
                this.setState({updated: true});
        }
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.state.title}</title>
                    <meta name="description" content={this.state.title}/>
                </Helmet>
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
                        <br/>
                        <br/>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default inject('projectStore', 'categoryStore')(withCookies(withRouter(ProjectsView)));