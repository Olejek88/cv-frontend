import React from 'react';

class HeaderTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Категория',
            type: 'main'
        };
    }

    componentDidMount() {
        if (this.props.title) {
            this.setState({title: this.props.title});
            this.setState({type: this.props.type});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {
        if (prevProps.title !== this.props.title) {
            this.setState({title: this.props.title});
            this.setState({type: this.props.type});
        }
    }

    render() {
        return (
            <div
                className="elementor-element elementor-element-f9dc749 banner_sections elementor-column elementor-col-50 elementor-top-column">
                <div className="elementor-column-wrap  elementor-element-populated">
                    <div className="elementor-widget-wrap">
                        <div
                            className="elementor-element elementor-element-33e3be2 tab-banner elementor-widget elementor-widget-text-editor">
                            <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                    <p style={{textAlign: 'center'}}>
                                        <span style={{color: '#fff'}}>{this.state.title} </span>
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTitle;
