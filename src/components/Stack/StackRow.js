import React from 'react';
import {withRouter} from 'react-router-dom'
import {ROOT} from "../../constants";
import {withCookies} from "react-cookie";

class StackRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stack: ""
        };
    }

    componentDidMount() {
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        if (this.props.stack) {
            this.setState({stack: this.props.stack});
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
                                                <img src={ROOT + this.state.stack.image}
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
                                                    {this.state.stack.title}
                                                </h4>
                                                {this.state.lang === "ru" && <div
                                                    dangerouslySetInnerHTML={{__html: this.state.stack.description}}/>}
                                                {this.state.lang === "en" && <div
                                                    dangerouslySetInnerHTML={{__html: this.state.stack.description_en}}/>}
                                                {this.state.lang === "de" && <div
                                                    dangerouslySetInnerHTML={{__html: this.state.stack.description_de}}/>}
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

export default withCookies(withRouter(StackRow));