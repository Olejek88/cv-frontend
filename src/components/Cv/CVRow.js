import React from 'react';
import {withRouter} from 'react-router-dom'
import ROOT from "../../index";
import {withCookies} from "react-cookie";

class CVRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cv: ""
        };
    }

    componentDidMount() {
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        if (this.props.cv) {
            this.setState({cv: this.props.cv});
        }
    }

    render() {
        return (
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-bc34d2f elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ca64462">
                            <div
                                className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div
                                        className="elementor-element elementor-element-about elementor-widget elementor-widget-image">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image">
                                                <img src={ROOT + this.state.cv.image}
                                                     className="attachment-large size-large"
                                                     alt="" width="75" height="75"/></div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-ed08c33 elementor-widget elementor-widget-text-editor">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix">
                                                <h4 style={{color: '#999893'}}>
                                                    [{this.state.cv.year}] {this.state.lang === "ru" && this.state.cv.title}
                                                    {this.state.lang === "en" && this.state.cv.title_en}
                                                    {this.state.lang === "de" && this.state.cv.title_de}
                                                </h4>
                                                <p>
                                                    {this.state.lang === "ru" && this.state.cv.description}
                                                    {this.state.lang === "en" && this.state.cv.description_en}
                                                    {this.state.lang === "de" && this.state.cv.description_de}
                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withCookies(withRouter(CVRow));