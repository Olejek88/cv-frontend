import React from 'react';
import {inject} from "mobx-react/index";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            description: 'description',
            isMounted: false,
            project: '',
            project_image: '',
            tags: []
        };
    }

    componentWillMount() {
        let self = this;
        if (this.props.project) {
            this.setState({project: this.props.project});
            /*
                        if (this.props.p project.projectImages[0])
                            this.setState({
                                project_image: {
                                    title: this.props.project.projectImages[0].image.title,
                                    path: this.props.commonStore.apiServer + this.props.project.projectImages[0].image.path
                                }
                            });
                        else {
                            this.setState({
                                project_image: {
                                    title: 'no', path: 'images/no_image.jpg'
                                }
                            });
                        }

                        const customer = this.props.userStore.currentCustomer;
                        if (customer) {
                            this.setState({customer: customer});
                        }
                        this.props.projectListingStore.loadprojectListing(this.props.project).then(function (projectListing) {
                            let price = self.props.projectListingStore.loadprojectListingMinimumPrice(projectListing);
                            self.setState({projectPrice: price});
                        });
            */
        }
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="card" data-aos="fade-up">
                    <a href="/">
                        <img src={'images/aoc.png'} alt="Avatar" style={{width: '100%'}}/>
                    </a>
                    <a className="ima_clickable" href="#" rel="bookmark">
                        <img className="link-img" src={"images/link.png"} alt="" width="52" height="52"/>
                    </a>
                    <div className="container cardcontent">
                        <div className="title post-head-title">
                            <a className="" href={"#"} rel="bookmark">
                                Wiredelta &amp; Philip Morris – From Collaboration
                                to an Exclusive Partnership </a></div>
                        <div className="newscontent">In today’s fast-paced world, the “do it
                            alone”
                            approach becomes less and less effective. Companies have to think
                            outside the box and take opportunities to drive collaborative
                            innovation
                            that delivers
                        </div>
                        <div className="tag-span">
                            <span>Web Development</span><span>Web Design</span><span>Mobile responsive</span><span>programming languages</span><span>javascript</span><span>Communication channels</span><span>CMS</span><span>Mobile friendly</span><span>Business cards</span><span>Business referral strategies</span><span>Custom business cards</span><span>Philip Morris</span><span>Philip Morris International</span><span>PMI</span><span>Referral code schemes</span><span>Referral codes systems</span><span>SQL databases</span><span>Unique business cards</span><span>MySQL databases</span>
                        </div>
                        {this.state.tags}
                        <a className="ref-learnmore"
                           href={"#"}>Learn More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('projectListingStore', 'projectStore')(Experience);
