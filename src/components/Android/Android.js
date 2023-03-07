import React from 'react';
import {inject} from "mobx-react/index";
import Tag from "../Home/Tag";
import {Link} from "react-router-dom";
import {ROOT} from "../../constants";
import {withCookies} from "react-cookie";

class Android extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            lang: 'ru',
            description: 'description',
            isMounted: false,
            project: '',
            tags: [],
            imagesList: []
        };
    }

    componentDidMount() {
        let self = this;
        let tags = [];
        let images = [];
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        if (this.props.project) {
            this.setState({project: this.props.project});
            this.props.project.tags.forEach(function (tag, i) {
                tags.push(<a href={'/#/projects/tags/' + tag.id} key={i}><Tag tag={tag.title} key={i}/></a>);
                tags.push(' ');
            });
            self.state.tags = tags;
            this.props.project.photos.forEach(function (image, i) {
                if (i <= 2) {
                    images.push(<div className="col-md-4" key={i}>
                        <img src={ROOT + image.path}
                             key={i} alt={image.title}
                             className='project_image'
                             style={{width: '100%', maxWidth: '140px', padding: '0px', borderRadius: '5px'}}/></div>);
                }
            });
            self.setState({imagesList: images});
        }
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="card" style={{height: '600px'}}>
                    <div className="container cardcontent">
                        <Link to={"/project/" + this.state.project.id}>
                            <img src={ROOT + this.state.project.icon} alt="img" align="left"
                                 style={{
                                     width: '20%', maxHeight: '120px', margin: '10px',
                                     borderBottomLeftRadius: '10px',
                                     borderBottomRightRadius: '10px'
                                 }}/>
                        </Link>
                        <div className="title post-head-title" style={{marginTop: '10px'}}>
                            <Link to={"/project/" + this.state.project.id} className="" rel="bookmark">
                                {this.state.lang === "ru" && this.state.project.title}
                                {this.state.lang === "en" && this.state.project.title_en}
                                {this.state.lang === "de" && this.state.project.title_de}
                            </Link>
                        </div>
                        <div className="newscontent">
                            <span className="posted-on">
                                <b>Platform:</b> {this.state.project.platform}
                                </span>
                            <span className="posted-on">
                                <b>Years:</b> {this.state.project.years}
                                </span>
                        </div>
                        <div className="newscontent">
                            <b>Techs:</b>&nbsp;&nbsp;
                            {this.state.project.techs}
                            <br/><br/>
                        </div>
                        <div style={{marginTop: '10px', overflow: 'auto'}}>
                            {this.state.imagesList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('projectStore')(withCookies(Android));
