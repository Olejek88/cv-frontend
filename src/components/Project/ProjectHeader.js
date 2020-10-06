import React from 'react';
import {withTranslation} from "react-i18next";
import ROOT from "../../index";

class ProjectHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        };
    }

    componentDidMount() {
        this.setState({project: this.props.project});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({project: nextProps.project});
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <div className="elementor elementor-project">
                    <section
                        className="elementor-element elementor-element-b6204b7 post-banner elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                                <div
                                    className="elementor-element elementor-element-6c62d29 elementor-column elementor-col-50 elementor-top-column">
                                    <div className="elementor-column-wrap  elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-dfde740 elementor-hidden-phone elementor-widget elementor-widget-image">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image">
                                                    <img
                                                        src={this.state.project && ROOT + this.state.project.photo}
                                                        alt={this.state.project && this.state.project.title}
                                                        className="attachment-large size-large"
                                                        srcSet={this.state.project && ROOT + this.state.project.photo}
                                                        sizes="(max-width: 454px) 100vw, 454px"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-f9dc749 banner_sections elementor-column elementor-col-50 elementor-top-column"
                                    data-id="f9dc749" data-element_type="column">
                                    <div className="elementor-column-wrap  elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-33e3be2 tab-banner elementor-widget elementor-widget-text-editor">
                                            <div className="elementor-widget-container">
                                                <div
                                                    className="elementor-text-editor elementor-clearfix">
                                                    <p style={{textAlign: 'center'}}>
                                                                        <span
                                                                            style={{color: '#fff'}}>{t('my_projects.label')} </span>
                                                    </p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation('translations')(ProjectHeader);
