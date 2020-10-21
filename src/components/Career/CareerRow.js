import React from 'react';
import {withRouter} from 'react-router-dom'
import {withCookies} from "react-cookie";
import {ROOT} from "../../constants";

class CareerRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "ru",
            career: ""
        };
    }

    componentDidMount() {
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        if (this.props.career) {
            this.setState({career: this.props.career});
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
                                                <img src={ROOT + this.state.career.image}
                                                     className="attachment-large size-large"
                                                     alt="" width="75" height="75"/></div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-ed08c33 elementor-widget elementor-widget-text-editor">
                                        <div className="elementor-widget-container">
                                            <div
                                                className="elementor-text-editor elementor-clearfix">
                                                <h4 style={{color: '#999893'}}>
                                                    {this.state.lang === "ru" && this.state.career.title}
                                                    {this.state.lang === "en" && this.state.career.title_en}
                                                    {this.state.lang === "de" && this.state.career.title_de}
                                                </h4>
                                                <p>
                                                    {this.state.lang === "ru" && <div
                                                        dangerouslySetInnerHTML={{__html: this.state.career.description}}/>}
                                                    {this.state.lang === "en" && <div
                                                        dangerouslySetInnerHTML={{__html: this.state.career.description_en}}/>}
                                                    {this.state.lang === "de" && <div
                                                        dangerouslySetInnerHTML={{__html: this.state.career.description_de}}/>}
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

export default withCookies(withRouter(CareerRow));