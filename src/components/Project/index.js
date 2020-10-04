import React from 'react';
import {inject} from "mobx-react/index";
import Tag from "../Home/Tag";
import {Link} from "react-router-dom";
import Banner from "../Home/Banner";
import CategoryHeader from "../Home/CategoryHeader";
import {withCookies} from "react-cookie";
import ROOT from "../../index";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjectItem: true,
            lang: "ru",
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
            tags: [],
            imagesList: []
        };
    }

    componentWillReceiveProps(nextProps) {
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
        this.state.lang = cookies.get('lang');
        this.props.projectStore.loadProject(id)
            .then((project) => {
                self.setState({project: project});
                project.tags.forEach(function (tag, i) {
                    tags.push(<Tag tag={tag.title} key={i}/>);
                });
                self.state.tags = tags;

                project.photos.forEach(function (image, i) {
                    images.push(<img src={ROOT + image.path} key={i} alt={image.title} className='project_image'/>);
                });
                self.setState({imagesList: images});
            });
    }

    render() {
        return (
            <React.Fragment>
                <Banner/>
                <CategoryHeader/>
                <section className="newspage newsadd">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="newspagelink">
                                <article
                                    className="post type-post status-publish format-standard has-post-thumbnail hentry category-cases-en category-homepage">
                                    <header className="entry-header">
                                        <div className="meta-post">
                                            <a href="/" title="Cases" className="post-cat">Cases</a>
                                            <a href="/" title="Homepage" className="post-cat">Homepage</a>
                                        </div>
                                        <div className="post-head col-md-12">
                                            <div className="post-heading-left" style={{width: '75%'}}>
                                                <img src={ROOT + this.state.project.photo} alt="img"
                                                     style={{width: '200px', float: 'left', margin: '5px'}}/>
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
                                    <time className="entry-date published">{this.state.project.years}</time>
                                    <time className="updated">{this.state.project.created_at}</time>
                                </span><span className="byline">
                                    <span className="author vcard">
                                        <Link to={"/project/" + this.state.project.id} className="url fn n">
                                            {this.state.project.stack}
                                        </Link>
                                    </span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="entry-thumb">
                                    </div>
                                    <div className="entry-content">
                                        <p><span style={{fontWeight: 400}}>
                                            {this.state.lang === "ru" && this.state.project.description}
                                            {this.state.lang === "en" && this.state.project.description_en}
                                            {this.state.lang === "de" && this.state.project.description_de}
                                        </span>
                                        </p>
                                        <p> {this.state.imagesList}</p>
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

export default inject('projectStore')(withCookies(Project));
