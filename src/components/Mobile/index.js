import MobileView from './MobileView';
import React from 'react';

class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        };
    };

    static getDerivedStateFromProps(props, state) {
        state.id = props.match.params.id;
        if (props.match.params.id !== state.id) {
            return {
                id: props.id
            };
        }
        return {
            id: 1
        };
    }

    componentDidMount() {
        this.setState({id: this.props.match.params.id});
    }

    render() {
        return (
            <MobileView i={this.state.id}/>
        );
    }
}

export default Mobile;