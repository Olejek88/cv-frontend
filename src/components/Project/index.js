import React from 'react';
import {inject} from "mobx-react/index";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjectItem: true,
            project: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.loadProject(nextProps.match.params.id);
    }

    componentDidMount() {
        this.loadProject(this.props.match.params.id);
    }

    loadActivity(id) {
        let self = this;
        this.props.projectStore.loadProject(id)
            .then((project) => {
                //console.log(activity);
                self.setState({project: project});
            });
    }

    render() {
        return (
            <article id="post-13733"
                     className="post-13733 post type-post status-publish format-standard has-post-thumbnail hentry category-cases-en category-homepage category-adrian-gavrilescu category-martin-genchev category-daniela-todorova category-aaron-morley category-distributed-team-cases category-website category-e-commerce category-custom tag-web-development tag-web-design tag-mobile-responsive tag-programming-languages tag-javascript tag-communication-channels tag-cms tag-mobile-friendly tag-business-cards tag-business-referral-strategies tag-custom-business-cards tag-philip-morris tag-philip-morris-international tag-pmi tag-referral-code-schemes tag-referral-codes-systems tag-sql-databases tag-unique-business-cards tag-mysql-databases">
                <header className="entry-header">
                    <div className="meta-post">
                        <a href="/" title="Cases" className="post-cat">Cases</a>
                        <a href="/" title="Homepage" className="post-cat">Homepage</a>
                    </div>
                    <div className="post-head col-md-12">
                        <div className="post-heading-left col-md-6">
                            <h1 className="title-post entry-title">Philip Morris – From Collaboration to an Exclusive
                                Partnership</h1>
                            <div className="post-span">
                                <span>Web Development</span><span>Web Design</span><span>Mobile responsive</span>
                            </div>
                        </div>
                        <div className="post-heading-right col-md-6">
                            <div className="single-meta">
                                <span className="posted-on">
                                    <time className="entry-date published" dateTime="2020-02-16T12:53:17+02:00">February 16, 2020</time>
                                    <time className="updated" dateTime="2020-05-03T20:52:59+02:00">May 3, 2020</time>
                                </span>
                                <span className="byline">
                                    <span className="author vcard">
                                        <a className="url fn n" href="/">Wiredelta</a>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="entry-thumb">

                </div>
                <div className="entry-content">
                    <p><span style={{fontWeight: 400}}>In today’s fast-paced world, the “do it alone” approach becomes less and less effective. Companies have to think outside the box and take opportunities to drive collaborative innovation that delivers what customers are looking forward to today.</span>
                    </p>
                    <h4><span style={{fontWeight: 400}}>Our partnership with Philip Morris International</span></h4>
                    <p><img className="aligncenter wp-image-13734 size-large"
                            src="https://wiredelta.com/wp-content/uploads/2020/02/PMI3-1024x768.jpg" alt=""
                            width="1024" height="768"/></p>
                </div>
            </article>
        );
    }
}

export default inject('projectStore')(Project);
