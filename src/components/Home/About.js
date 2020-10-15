import React from 'react';
import {withRouter} from 'react-router-dom';
import {withTranslation} from "react-i18next";
import {withCookies} from "react-cookie";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "ru",
            link: "doc/cv.pdf"
        };
    }

    componentDidMount() {
        const {cookies} = this.props;
        this.setState({lang: cookies.get('lang')});
        if (this.state.lang === "en") {
            this.setState({link: "doc/cv_en.pdf"});
        }
        if (this.state.lang === "de") {
            this.setState({link: "doc/cv_de.pdf"});
        }
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <section
                    className="elementor-section elementor-top-section elementor-element business-what-section elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            <div
                                className="elementor-column elementor-col-30 elementor-top-column elementor-element home-see-work">
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div
                                            className="elementor-element elementor-widget elementor-widget-text-editor">
                                            <div className="elementor-widget-container">
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-about elementor-align-right elementor-mobile-align-center start-chat elementor-widget elementor-widget-button">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-button-wrapper">
                                                    <a className="elementor-button elementor-size-xs" role="button"
                                                       href={this.state.link}>
						                            <span className="elementor-button-content-wrapper">
                            						    <span
                                                            className="elementor-button-text">{t('download_cv')}</span>
                                                    </span>
                                                    </a>
                                                    <img alt="avatar"
                                                         className="avatar avatar-user width-full border bg-white"
                                                         src={"images/avatar.png"}
                                                         width="260" height="260"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-70 elementor-top-column elementor-element right-content">
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        <div
                                            className="elementor-element elementor-element-about elementor-position-left who-img elementor-vertical-align-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img"><img
                                                        src={"images/group.png"}
                                                        className="attachment-full size-full" alt="group"
                                                        width="61" height="61"/></figure>
                                                    <div className="elementor-image-box-content">
                                                        <h3 className="elementor-image-box-title">{t('who')}</h3>
                                                        <p><span>{t('who_description')}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-about elementor-position-left what-img elementor-vertical-align-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img"><img
                                                        src={"images/what.png"}
                                                        className="attachment-full size-full" alt="what"
                                                        width="61" height="61"/></figure>
                                                    <div className="elementor-image-box-content">
                                                        <h3 className="elementor-image-box-title">{t('what')}</h3>
                                                        <p><span>{t('what_description')}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-about elementor-position-left how-img elementor-vertical-align-top elementor-widget elementor-widget-image-box">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-image-box-wrapper">
                                                    <figure className="elementor-image-box-img">
                                                        <img src={"images/coding.png"}
                                                             className="attachment-full size-full" alt="coding"
                                                             width="61" height="61"/>
                                                    </figure>
                                                    <div className="elementor-image-box-content"><h3
                                                        className="elementor-image-box-title">{t('how')}</h3>
                                                        <p style={{whiteSpace: 'normal'}}>
                                                            <span>{t('how_description')}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withTranslation('translations')(withCookies(withRouter(About)));
