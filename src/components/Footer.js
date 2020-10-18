import React from 'react';
import SiteMenu from "./SiteMenu";
import SiteInfo from "./SiteInfo";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        let documentElement = document.documentElement;
        this.setState({width: documentElement.clientWidth});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className="main_container" style={{float: 'bottom'}}>
                <React.Fragment>
                    {this.state.width >= 720 && <SiteMenu/>}
                    {this.state.width >= 720 && <SiteInfo/>}
                </React.Fragment>
            </div>
        );
    }
}

export default Footer;
