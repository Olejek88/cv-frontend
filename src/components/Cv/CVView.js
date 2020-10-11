import React from 'react';
import {withRouter} from 'react-router-dom'
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import CategoryTitle from "../Home/CategoryTitle";
import CVRow from "./CVRow";
import {inject} from "mobx-react/index";
import {withCookies} from "react-cookie";

class CVView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            cvs: [],
            title: ""
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
        return (
            <React.Fragment>
                <Banner/>
                <CategoryHeader title={this.state.title} type='cv'/>
                <CategoryTitle title={this.state.title}/>
                <div id="content" className="page-wrap">
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

export default inject('cvStore')(withCookies(withRouter(CVView)));