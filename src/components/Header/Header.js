import React from 'react';
import {Link} from 'react-router-dom';
import MenuNew from "../MenuNew";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1920,
            class: 'site-header fixed'
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
    }

    updateDimensions() {
        let documentElement = document.documentElement;
        this.setState({width: documentElement.clientWidth});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener('scroll', this.handleScroll);
    }

    /*
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    */

    handleScroll() {
        let masthead = document.getElementById('masthead');
        let rect = masthead.getBoundingClientRect();
        if (rect) {
            let e = window.pageYOffset;
            if (e < 100) {
                this.setState({class: 'site-header fixed'});
            } else {
                this.setState({class: 'site-header fixed float-header'});
            }
        }
    }

    render() {
        return (
            <header id="masthead" ref="masthead" className={this.state.class} role="banner">
                <div className="header-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-8 col-xs-8">
                                <Link to="/">
                                    {this.state.width >= 1000 &&
                                    <img className="site-logo"
                                         alt="olejek"
                                         src={"images/code_olejek.png"}/>
                                    }
                                    {this.state.width < 1000 &&
                                    <img className="site-logo"
                                         alt="olejek"
                                         src={"images/code_olejek.png"}/>
                                    }
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-4 col-xs-12">
                                <div className="btn-menu"></div>
                                <MenuNew/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
