import React from 'react';
import CategoryHeaderTitle from "./CategoryHeaderTitle";
import HeaderTitle from "./HeaderTitle";

class CategoryHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'I BUILD WEB AND MOBILE APPS',
            type: 'main',
            image: 'images/side-img-header1.png'
        };
    }

    componentDidMount() {
        if (this.props.title) {
            this.setState({title: this.props.title});
            this.setState({type: this.props.type});
        }
        if (this.props.type === 'cv') {
            this.setState({image: 'images/cv.png'});
        }
        if (this.props.type === 'stack') {
            this.setState({image: 'images/stack.png'});
        }
        if (this.props.type === 'about' || this.props.type === 'career') {
            this.setState({image: 'images/prog.png'});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {
        if (prevProps.title !== this.props.title) {
            this.setState({title: this.props.title});
            this.setState({type: this.props.type});
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="banner-content-about">
                    <div className="elementor elementor-main">
                        <div className="elementor-inner">
                            <div className="elementor-section-wrap">
                                <section
                                    className="elementor-element elementor-element-b6204b7 post-banner elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div
                                                className="elementor-element elementor-element-6c62d29 elementor-column elementor-col-50 elementor-top-column">
                                                <div className="elementor-column-wrap  elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div
                                                            className="elementor-element elementor-element-dfde740 elementor-hidden-phone elementor-widget elementor-widget-image">
                                                            <img src={this.state.image}
                                                                 className="attachment-large size-large"
                                                                 alt=""
                                                                 srcSet={this.state.image}
                                                                 sizes="(max-width: 454px) 100vw, 454px"
                                                                 width="454" height="340"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <HeaderTitle title={this.state.title}/>
                                        </div>
                                    </div>
                                </section>
                                <CategoryHeaderTitle title={this.state.type === 'main' && ""}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CategoryHeader;
