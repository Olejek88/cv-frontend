import React from 'react';
import {withTranslation} from "react-i18next";

class CategoryTitle extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <section className="home-page-section">
                <div className="container">
                    <div className="row">
                        <div className="board web-section-home">
                            <div>
                                <ul className="nav nav-tabs" id="myTab">
                                    <li className="active">
                                        <a className="newsfilter filternewslink" href={"projects/category/2"}
                                           title="system">
                                            <img src={'images/system.png'} alt="system"/>
                                            <p> {t('systems')} </p>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="newsfilter filternewslink" href={"projects/category/4"}
                                           title="applications">
                                            <img src={'images/laptop.png'} alt="app"/>
                                            <p> {t('applications')} </p>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="newsfilter filternewslink" href={"projects/category/3"}
                                           title="mobile-app">
                                            <img src={'images/mobile.png'} alt="mobile-app"/>
                                            <p> {t('android')} </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(CategoryTitle);
