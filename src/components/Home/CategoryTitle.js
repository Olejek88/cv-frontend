import React from 'react';
import {withTranslation} from "react-i18next";

class CategoryTitle extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <div className="blog-page">
                <a className="newsfilter filternewslink" href={"projects/category/2"} title="system">
                    <img src={'images/system.png'} alt="system"/>
                    <p> {t('systems')} </p>
                </a>
                <a className="newsfilter filternewslink" href={"projects/category/4"} title="applications">
                    <img src={'images/laptop.png'} alt="app"/>
                    <p> {t('applications')} </p>
                </a>
                <a className="newsfilter filternewslink" href={"projects/category/3"} title="mobile-app">
                    <img src={'images/mobile.png'} alt="mobile-app"/>
                    <p> {t('android')} </p>
                </a>
            </div>
        );
    }
}

export default withTranslation('translations')(CategoryTitle);
