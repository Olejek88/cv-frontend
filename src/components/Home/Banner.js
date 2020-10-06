import React from 'react';
import {withRouter} from 'react-router-dom';

class Banner extends React.Component {
    inputEnter = function (e) {
        if (e.key === 'Enter') {
            this.setState({redirect: true});
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            redirect: false
        };
        this.inputEnter = this.inputEnter.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({redirect: true});
    }

    inputChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        return (
            <div className="sydney-hero-area">
                <div className="header-image">
                    <img className="header-inner" src={'images/plain-banner-bg.png'} alt="" title=""
                         width="1349"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Banner);
