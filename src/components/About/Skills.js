import React from 'react';
import {withRouter} from "react-router-dom";
import {withTranslation} from "react-i18next";
import {withCookies} from "react-cookie";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: [],
            image: "images/laptop-code.png",
            lang: "ru"
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.about !== state.about) {
            state.about = props.about;
            return {
                props: state.props
            }
        }
        return null;
    }

    componentDidMount() {
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        this.setState({about: this.props.about});
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
                                                <img src={this.state.image}
                                                     className="attachment-large size-large"
                                                     alt="" width="75" height="75"/></div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-ed08c33 elementor-widget elementor-widget-text-editor">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix">
                                                <div dangerouslySetInnerHTML={{__html: this.state.about.skills}}></div>
                                            </div>
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

export default withTranslation('translations')(withCookies(withRouter(Skills)));
