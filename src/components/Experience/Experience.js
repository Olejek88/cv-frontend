import React from 'react';
import {inject} from "mobx-react/index";
import Tag from "../Home/Tag";
import {Link} from "react-router-dom";
import ROOT from "../../index";
import {withCookies} from "react-cookie";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            description: 'description',
            isMounted: false,
            project: '',
            photo: '',
            tags: []
        };
    }

    componentWillMount() {
        let self = this;
        let tags = [];
        const {cookies} = this.props;
        let lang = cookies.get('lang');
        if (this.props.project) {
            this.setState({project: this.props.project});
            //console.log(this.props.project);
            this.props.project.tags.forEach(function (tag, i) {
                tags.push(<Tag tag={tag.title} key={i}/>);
                tags.push(' ');
            });
            self.state.tags = tags;
            if (lang === "en") {
                self.state.title = this.props.project.title_en.valueOf();
                self.state.description = this.props.project.description_en.valueOf();
            }
            if (lang === "de") {
                self.state.title = this.props.project.title_de.valueOf();
                self.state.description = this.props.project.description_en.valueOf();
            }
        }
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="card" data-aos="fade-up">
                    <Link to={"/project/" + this.state.project.id}>
                        <img src={ROOT + this.state.project.photo} alt="img" style={{width: '100%'}}/>
                    </Link>
                    <Link to={"/project/" + this.state.project.id} className="ima_clickable" rel="bookmark">
                        <img className="link-img" src={"images/link.png"} alt="" width="52" height="52"/>
                    </Link>
                    <div className="container cardcontent">
                        <div className="title post-head-title">
                            <Link to={"/project/" + this.state.project.id} className="" rel="bookmark">
                                {this.state.project.title}
                            </Link>
                        </div>
                        <div className="newscontent">{this.state.project.description}</div>
                        <div className="tag-span">
                            {this.state.tags}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('projectStore')(withCookies(Experience));
