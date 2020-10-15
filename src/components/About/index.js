import React from 'react';
import Description from "./Description";
import {Helmet} from "react-helmet";
import Banner from "../Home/Banner";
import CategoryHeader from "../Home/CategoryHeader";
import {withTranslation} from "react-i18next";
import {inject} from "mobx-react/index";
import {withRouter} from "react-router-dom";
import {withCookies} from "react-cookie";
import Skills from "./Skills";
import Courses from "./Courses";
import Addition from "./Addition";
import Contacts from "./Contacts";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            about: [],
            title: "About"
        };
    }

    componentDidMount() {
        let my = this;
        this.props.aboutStore.loadAbout().then(() => {
            this.props.aboutStore.aboutRegistry.forEach(function (about) {
                my.setState({about: about});
            });
            my.setState({updated: true});
        });
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{t('about')}</title>
                    <meta name="description" content={t('about')}/>
                </Helmet>
                <Banner/>
                <CategoryHeader title={this.state.title} type='about'/>
                <div id="content" className="page-wrap" style={{marginTop: '-100px'}}>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div data-elementor-type="wp-post" className="elementor elementor-about">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        <Description about={this.state.about}/>
                                        <Skills about={this.state.about}/>
                                        <Courses about={this.state.about}/>
                                        <Addition about={this.state.about}/>
                                        <Contacts about={this.state.about}/>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default inject('aboutStore')(withTranslation('translations')(withCookies(withRouter(About))));
