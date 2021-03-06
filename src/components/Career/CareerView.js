import React from 'react';
import {withRouter} from 'react-router-dom'
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import {inject} from "mobx-react/index";
import {withCookies} from "react-cookie";
import CareerRow from "./CareerRow";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

class CareerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            careers: [],
            title: "Career"
        };
    }

    componentDidMount() {
        let my = this;
        let careers = my.state.careers;
        this.props.careerStore.loadCareer().then(() => {
            this.props.careerStore.careerRegistry.forEach(function (career, i) {
                careers.push(<CareerRow career={career} key={i}/>);
                my.setState({careers: careers});
            });
            my.setState({updated: true});
        });
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{t('career')}</title>
                    <meta name="description" content={t('career')}/>
                </Helmet>
                <Banner/>
                <CategoryHeader title={this.state.title} type='career'/>
                <div id="content" className="page-wrap" style={{marginTop: '-40px'}}>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div data-elementor-type="wp-post" className="elementor elementor-about">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        {this.state.updated && this.state.careers}
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

export default inject('careerStore')(withTranslation('translations')(withCookies(withRouter(CareerView))));