import React from 'react';
import {inject} from "mobx-react/index";
import Tag from "../Home/Tag";
import {Link} from "react-router-dom";
import Banner from "../Home/Banner";
import CategoryHeader from "../Home/CategoryHeader";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjectItem: true,
            project: {
                id: 1,
                title: "loading",
                description: "loading",
                stack: "loading",
                link: "loading",
                role: "loading",
                usage: "loading",
                git: "loading",
                created_at: "loading",
                years: "loading"
            },
            tags: []
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
        this.props.projectStore.loadProject(id)
            .then((project) => {
                self.setState({project: project});
                project.tags.forEach(function (tag, i) {
                    tags.push(<Tag tag={tag.title} key={i}/>);
                });
                self.state.tags = tags;
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
                                    className="post type-post status-publish format-standard has-post-thumbnail hentry category-cases-en category-homepage category-adrian-gavrilescu category-martin-genchev category-daniela-todorova category-aaron-morley category-distributed-team-cases category-website category-e-commerce category-custom tag-web-development tag-web-design tag-mobile-responsive tag-programming-languages tag-javascript tag-communication-channels tag-cms tag-mobile-friendly tag-business-cards tag-business-referral-strategies tag-custom-business-cards tag-philip-morris tag-philip-morris-international tag-pmi tag-referral-code-schemes tag-referral-codes-systems tag-sql-databases tag-unique-business-cards tag-mysql-databases">
                                    <header className="entry-header">
                                        <div className="meta-post">
                                            <a href="/" title="Cases" className="post-cat">Cases</a>
                                            <a href="/" title="Homepage" className="post-cat">Homepage</a>
                                        </div>
                                        <div className="post-head col-md-12">
                                            <div className="post-heading-left col-md-6">
                                                <h1 className="title-post entry-title">{this.state.project.title}</h1>
                                                <div className="post-span">
                                                    {this.state.tags}
                                                </div>
                                            </div>
                                            <div className="post-heading-right col-md-6">
                                                <div className="single-meta">
                                <span className="posted-on">
                                    <time className="entry-date published">{this.state.project.years}</time>
                                    <time className="updated">{this.state.project.created_at}</time>
                                </span>
                                                    <span className="byline">
                                    <span className="author vcard">
                                        <Link to={"/project/" + this.state.project.id} className="url fn n">
                                            {this.state.project.stack}
                                        </Link>
                                    </span>
                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="entry-thumb">
                                    </div>
                                    <div className="entry-content">
                                        <p><span style={{fontWeight: 400}}>
                                        {this.state.project.description}
                                        </span>
                                        </p>
                                        <p><img src={'images/aoc.png'} alt="Avatar"
                                                style={{width: '1024', height: '768'}}
                                                className="aligncenter wp-image-13734 size-large"/></p>
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

export default inject('projectStore')(Project);
