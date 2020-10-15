import React from 'react';
import {withRouter} from "react-router-dom";
import {withCookies} from "react-cookie";
import {withTranslation} from "react-i18next";

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: "",
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
                className="elementor-section elementor-top-section elementor-element elementor-element-837809d elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8f67dc7">
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div
                                        className="elementor-element elementor-element-fb606be elementor-widget elementor-widget-text-editor">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix">
                                                <div dangerouslySetInnerHTML={{__html: this.state.about.position}}/>
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

export default withTranslation('translations')(withCookies(withRouter(Description)));
