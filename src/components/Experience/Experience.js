import React from 'react';
import {inject} from "mobx-react/index";
import Tag from "../Home/Tag";

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
        let tags = [];
        if (this.props.project) {
            this.setState({project: this.props.project});
            console.log(this.props.project);
            this.props.project.tags.forEach(function (tag, i) {
                tags.push(<Tag tag={tag.title} key={i}/>);
            });
            self.state.tags = tags;
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
                            <a className="" href={"#"} rel="bookmark">{this.state.project.title}</a></div>
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

export default inject('projectStore')(Experience);
