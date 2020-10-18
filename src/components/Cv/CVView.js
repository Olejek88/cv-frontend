import React from 'react';
import {withRouter} from 'react-router-dom'
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import CVRow from "./CVRow";
import {inject} from "mobx-react/index";
import {withCookies} from "react-cookie";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

class CVView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            cvs: [],
            title: "CV"
        };
    }

    componentDidMount() {
        let my = this;
        let cvs = my.state.cvs;
        this.props.cvStore.loadCv().then(() => {
            this.props.cvStore.cvRegistry.forEach(function (cv, i) {
                cvs.push(<CVRow cv={cv} key={i}/>);
                my.setState({cvs: cvs});
            });
            my.setState({updated: true});
        });
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{t('cv')}</title>
                    <meta name="description" content={t('cv')}/>
                </Helmet>
                <Banner/>
                <CategoryHeader title={this.state.title} type='cv'/>
                <div id="content" className="page-wrap" style={{marginTop: '-40px'}}>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div data-elementor-type="wp-post" className="elementor elementor-about">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        {this.state.updated && this.state.cvs}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </React.Fragment>
        );
    }
}

export default inject('cvStore')(withTranslation('translations')(withCookies(withRouter(CVView))));
