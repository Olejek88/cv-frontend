import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import {withCookies} from "react-cookie";
import {Helmet} from "react-helmet";
import Android from "../Android/Android";

class MobileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            title: "",
            lang: "en",
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
        let predicate = {
            id: this.state.id
        };
        if (props.i !== '0') {
            predicate.id = props.i;
            predicate.filter = 'category';
        }
        this.props.projectStore.setPredicate(predicate);

        this.props.projectStore.setPredicate(predicate);
        my.setState({title: "Mobile applications"});

        let projects = [];
        this.props.projectStore.loadProjects().then(() => {
            this.props.projectStore.projectsRegistry.forEach(function (project, i) {
                projects.push(<Android project={project} key={i}/>);
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
                <section className="newspage newsadd">
                    <div className="container-fluid">
                        <div className="container" style={{width: '99%'}}>
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

export default inject('projectStore', 'categoryStore')(withCookies(withRouter(MobileView)));