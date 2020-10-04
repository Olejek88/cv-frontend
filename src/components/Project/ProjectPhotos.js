import React from 'react';
import {inject} from "mobx-react/index";

class ProjectPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            photoList: []
        };
        this.photoList = [];
    }

    componentDidMount() {
        this.setState({project: this.props.project});
        this.loadData(this.props.project);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({project: nextProps.project});
        this.loadData(nextProps.project);
    }

    loadData(project) {
        if (project) {
            let self = this;
            self.setState({photoList: []});
            self.photoList = [];
            project.images.forEach(function (image, i) {
                self.photoList.push(<ActivityPhotoDiv image={image.image} key={Math.random()}
                                                      visibility={"visibility: 'visible'"}/>);
            });
            self.setState({photoList: self.photoList});
        }
    }

    render() {
        return (
            <div className="left-box product-slider-box" style={{marginBottom: '40px'}}>
                <div className="pImgContainer">
                    <div className="item" style={{display: 'block'}}>
                        {
                            this.state.photoList
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('projectStore')(ProjectPhotos);
