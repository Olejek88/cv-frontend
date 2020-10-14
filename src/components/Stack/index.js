import React from 'react';
import {withRouter} from 'react-router-dom'
import CategoryHeader from "../Home/CategoryHeader";
import Banner from "../Home/Banner";
import {inject} from "mobx-react/index";
import {withCookies} from "react-cookie";
import StackRow from "./StackRow";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

class Stack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            stacks: [],
            title: "Stacks"
        };
    }

    componentDidMount() {
        let my = this;
        let stacks = my.state.stacks;
        this.props.stackStore.loadStack().then(() => {
            this.props.stackStore.stackRegistry.forEach(function (stack, i) {
                stacks.push(<StackRow stack={stack} key={i}/>);
                my.setState({stacks: stacks});
            });
            my.setState({updated: true});
        });
    }

    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{t('stack')}</title>
                    <meta name="description" content={t('stack')}/>
                </Helmet>
                <Banner/>
                <CategoryHeader title={this.state.title} type='stack'/>
                <div id="content" className="page-wrap" style={{marginTop: '-150px'}}>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div data-elementor-type="wp-post" className="elementor elementor-about">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        {this.state.updated && this.state.stacks}
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

export default inject('stackStore')(withTranslation('translations')(withCookies(withRouter(Stack))));
