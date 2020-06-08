import React from 'react';

class CategoryHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner-content-about">
                    <div data-elementor-type="wp-post" data-elementor-id="2190" className="elementor elementor-2190">
                        <div className="elementor-inner">
                            <div className="elementor-section-wrap">
                                <section
                                    className="elementor-element elementor-element-b6204b7 post-banner elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div
                                                className="elementor-element elementor-element-6c62d29 elementor-column elementor-col-50 elementor-top-column"
                                                data-id="6c62d29" data-element_type="column">
                                                <div className="elementor-column-wrap  elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div
                                                            className="elementor-element elementor-element-dfde740 elementor-hidden-phone elementor-widget elementor-widget-image"
                                                            data-id="dfde740" data-element_type="widget"
                                                            data-widget_type="image.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-image">
                                                                    <img src={"images/side-img-header1.png"}
                                                                         className="attachment-large size-large"
                                                                         alt=""
                                                                         srcSet={"images/side-img-header1.png"}
                                                                         sizes="(max-width: 454px) 100vw, 454px"
                                                                         width="454" height="340"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-f9dc749 banner_sections elementor-column elementor-col-50 elementor-top-column"
                                                data-id="f9dc749" data-element_type="column">
                                                <div className="elementor-column-wrap  elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div
                                                            className="elementor-element elementor-element-33e3be2 tab-banner elementor-widget elementor-widget-text-editor"
                                                            data-id="33e3be2" data-element_type="widget"
                                                            data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <div
                                                                    className="elementor-text-editor elementor-clearfix">
                                                                    <p style={{textAlign: 'center'}}>
                                                                        <span style={{color: '#fff'}}>PROJECT MADE BY OLEJEK</span>
                                                                    </p></div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="elementor-element elementor-element-0d822c1 elementor-widget elementor-widget-wp-widget-custom_html"
                                                            data-id="0d822c1" data-element_type="widget"
                                                            data-widget_type="wp-widget-custom_html.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="textwidget custom-html-widget">
                                                                    <button className="letschat-btn"> Contact Me
                                                                        <img
                                                                            src={"images/arrow-pointing-to-right-3.png"}
                                                                            className="right-img-arrow"/>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section
                                    className="elementor-element elementor-element-b86f375 post-banner-heading elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                                    data-id="b86f375" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-row">
                                            <div
                                                className="elementor-element elementor-element-077a70e elementor-column elementor-col-100 elementor-top-column"
                                                data-id="077a70e" data-element_type="column">
                                                <div className="elementor-column-wrap  elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div
                                                            className="elementor-element elementor-element-e0fb7ab elementor-widget elementor-widget-heading"
                                                            data-id="e0fb7ab" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h3 className="elementor-heading-title elementor-size-default">Cases
                                                                    make perfect</h3></div>
                                                        </div>
                                                        <div
                                                            className="elementor-element elementor-element-5fab417 elementor-widget elementor-widget-heading"
                                                            data-id="5fab417" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h3 className="elementor-heading-title elementor-size-default">Check
                                                                    out some of our latest work...</h3></div>
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
            </React.Fragment>
        );
    }
}

export default CategoryHeader;
