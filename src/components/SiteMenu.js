import React from 'react';
import {withTranslation} from "react-i18next";
import SiteMenuBanner from "./SiteMenuBanner";

class SiteMenu extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <SiteMenuBanner/>
                <div id="sidebar-footer" className="footer-widgets widget-area" role="complementary">
                    <div className="container">
                        <div className="sidebar-column col-md-6">
                            <aside id="custom_html-4" className="widget_text widget widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <div className="row-one">
                                        <div className="col-one">
                                            <a href={"/#/about"}>{t('menu.about')}</a><br/>
                                            <a href={"/#/projects"}>{t('menu.projects')}</a><br/>
                                            <a href={"/#/stack"}>{t('menu.stack')}</a><br/>
                                            <a href={"/#/cv"}>{t('menu.cv')}</a><br/>
                                            <a href={"/#/career"}>{t('menu.career')}</a><br/>
                                        </div>
                                        <div className="col-two">
                                            <div className="text-footer">
                                                <a href={"/#/about"}>{t('menu.about')}</a><br/>
                                                <a href={"/#/projects"}>{t('menu.projects')}</a><br/>
                                                <a href={"/#/stack"}>{t('menu.stack')}</a><br/>
                                                <a href={"/#/cv"}>{t('menu.cv')}</a><br/>
                                                <a href={"/#/career"}>{t('menu.career')}</a><br/>
                                            </div>
                                        </div>
                                        <div className="col-three">
                                            <a href="http://shtrm.olegrom.de/cv/index_en.htm"
                                               rel="noopener noreferrer"
                                               target="_blank">{t('menu.old_site')}</a><br/>
                                            <a href="http://media.olegrom.de/" rel="noopener noreferrer"
                                               target="_blank">{t('menu.media')}</a><br/>
                                        </div>
                                    </div>
                                    <p className="copy-right">COPYRIGHT © 2022 OLE. This page based on Front
                                        [React/MobX], Back [Laravel]</p>
                                </div>
                            </aside>
                        </div>
                        <div className="sidebar-column col-md-6">
                            <aside id="text-8" className="widget widget_text">
                                <div className="textwidget">
                                    <div className="row">
                                        <div className="col-md-3" style={{textAlign: 'center'}}>
                                            <a href="http://vk.com/shtrm">
                                                <img src={"images/vk.png"} alt="vk"/></a>
                                            <p className="get-text-footer">VK</p>
                                        </div>
                                        <div className="col-md-3" style={{textAlign: 'center'}}>
                                            <a href="http://github.com/Olejek88" target="_blank"
                                               rel="noopener noreferrer">
                                                <img src={"images/github.png"} alt="github"/></a>
                                            <p className="get-text-footer">Github</p>
                                        </div>
                                        <div className="col-md-3" style={{textAlign: 'center'}}>
                                            <a href="https://www.linkedin.com/in/romanov-oleg-i/" target="_blank"
                                               rel="noopener noreferrer">
                                                <img src={"images/linkedin2.png"} alt="linkedin"/></a>
                                            <p className="get-text-footer">Linkedin</p>
                                        </div>
                                        <div className="col-md-3" style={{textAlign: 'center'}}>
                                            <a href="https://www.facebook.com/olejek.ivanov" target="_blank"
                                               rel="noopener noreferrer">
                                                <img src={"images/fb.png"} alt="facebook"/></a>
                                            <p className="get-text-footer">Facebook</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="sidebar-column col-md-6">
                        </div>
                        <div className="sidebar-column col-md-6">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation('translations')(SiteMenu);
