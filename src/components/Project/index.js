import React from 'react';
import {inject} from "mobx-react/index";
import Tag from "../Home/Tag";
import Banner from "../Home/Banner";
import {withCookies} from "react-cookie";
import ProjectHeader from "./ProjectHeader";
import {withTranslation} from "react-i18next";
import {Helmet} from "react-helmet";
import {ROOT} from "../../constants";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjectItem: true,
            lang: "ru",
            width: "90%",
            project: {
                id: 1,
                title: "loading",
                description: "loading",
                stack: "loading",
                link: "loading",
                role: "loading",
                usage: "loading",
                git: "loading",
                photos: [],
                created_at: "loading",
                years: "loading"
            },
            description: "",
            tags: [],
            imagesList: []
        };
    }

    componentWillReceiveProps(nextProps, next) {
        this.loadProject(nextProps.match.params.id);
    }

    componentDidMount() {
        this.loadProject(this.props.match.params.id);
    }

    loadProject(id) {
        let self = this;
        let tags = [];
        let images = [];
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        this.props.projectStore.loadProject(id)
            .then((project) => {
                self.setState({project: project});
                project.tags.forEach(function (tag, i) {
                    tags.push(<a href={'/#/projects/tags/' + tag.id} key={i}><Tag tag={tag.title} key={i}/></a>);
                });
                self.state.tags = tags;

                project.photos.forEach(function (image, i) {
                    images.push(<img src={ROOT + image.path} key={i} alt={image.title} className='project_image'
                                     style={{marginTop: '20px', maxWidth: '550px'}}/>);
                });

                self.setState({imagesList: images});
                if (this.state.lang === "ru") {
                    self.setState({description: project.description});
                }
                if (this.state.lang === "de") {
                    self.setState({description: project.description_de});
                }
                if (this.state.lang === "en") {
                    self.setState({description: project.description_en});
                }
            });
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.state.lang === "ru" && this.state.project.title_en}</title>
                    <meta name="description" content={this.state.project.title_en}/>
                </Helmet>
                <Banner/>
                <ProjectHeader project={this.state.project}/>
                <section className="newspage newsadd">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="newspagelink">
                                <article
                                    className="post type-post status-publish format-standard has-post-thumbnail hentry category-cases-en category-homepage">
                                    <header className="entry-header">
                                        <div className="post-head col-md-12">
                                            <div className="post-heading-left" style={{width: '75%'}}>
                                                <h1 className="title-post entry-title" style={{position: "relative"}}>
                                                    {this.state.lang === "ru" && this.state.project.title}
                                                    {this.state.lang === "en" && this.state.project.title_en}
                                                    {this.state.lang === "de" && this.state.project.title_de}
                                                </h1>
                                                <div className="post-span" style={{
                                                    display: 'inline-block',
                                                    marginTop: '10px',
                                                    marginBottom: '10px',
                                                    float: 'bottom'
                                                }}>
                                                    Tags: {this.state.tags}
                                                </div>
                                            </div>
                                            <div className="post-heading-right" style={{width: '25%'}}>
                                                <div className="single-meta">
                                                    <span className="posted-on">
                                                        <time
                                                            className="entry-date published">{this.state.project.years}</time>
                                                        <time className="updated">{this.state.project.created_at}</time>
                                                    </span>
                                                    <span className="byline">
                                                        <span className="author vcard">
                                                            {this.state.project.stack}
                                                    </span></span>
                                                </div>
                                                <div className="single-meta">
                                                    <span className="byline">
                                                        Role: {this.state.project.role}<br/>
                                                        <a href={this.state.project.git}>{this.state.project.git !== "-" && "Github"}</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="entry-thumb">
                                    </div>
                                    <div className="entry-content">
                                        <span style={{fontWeight: 400}}>
                                            <div dangerouslySetInnerHTML={{__html: this.state.description}}/>
                                        </span>
                                        {/*
                                            <br/><b>{t('usage.label')}:</b> {this.state.project.usage}
                                            <br/><b>Github:</b> <a
                                                href={this.state.project.git}>{this.state.project.git}</a>
*/}
                                            <br/><b>Link:</b> <a
                                                href={this.state.project.link}>{this.state.project.link}</a>
                                        <p> {this.state.imagesList}</p>
                                        <br/>
                                        <br/>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default inject('projectStore')(withCookies(withTranslation('translations')(Project)));
