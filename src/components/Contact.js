import React from 'react';
import {inject} from "mobx-react/index";

class Contact extends React.Component {
    onCloseClicked = () => {
        this.props.handler();
    };

    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            about: []
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
        return (
            <div id="contact-container" className="widget-align-right" style={{width: '300px', height: '400px'}}>
                <div className="shadow-container"/>
                <div className="widget">
                    <div className="dhBdz widget-app-container">
                        <div className="eRGMbE p-top-8" tabIndex="0">
                            <div className="initial-message-bubble">
                                <button onClick={this.onCloseClicked} className="fQCLtD">x</button>
                                <div className="initial-message-avatar justify-center" style={{top: '-24px'}}>
                                    <div className="justify-center" style={{height: '48px'}}>
                                        <div className="chat-head">
                                            <div className="tznVS chat-head-avatar">
                                                <div className="edYRae"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: this.state.about.contact}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('aboutStore')(Contact);
