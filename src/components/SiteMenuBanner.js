import React from 'react';

class SiteMenuBanner extends React.Component {
    render() {
        return (
            <div className="footer-banner except-home">
                <div className="elementor">
                    <div className="elementor-inner">
                        <div className="elementor-section-wrap">
                            <section
                                className="elementor-element elementor-element-46e263f footer-img elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section">
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-row">
                                        <div
                                            className="elementor-element elementor-element-a1d4e45 elementor-column elementor-col-100 elementor-top-column">
                                            <div className="elementor-column-wrap  elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                    <div
                                                        className="elementor-element elementor-element-68370d1 elementor-widget elementor-widget-image">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-image">
                                                                <img src={"images/bg-footer-new.png"}
                                                                     className="attachment-large size-large" alt=""
                                                                     srcSet={"images/bg-footer-new.png"}
                                                                     width="1024" height="541"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteMenuBanner;
