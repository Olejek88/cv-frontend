import ProjectView from './ProjectsView';
import React from 'react';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            id: 0
        };
    };

    static getDerivedStateFromProps(props, state) {
        state.id = props.match.params.id;
        state.filter = props.match.params.filter;
        if (props.match.params.id !== state.id) {
            return {
                filter: props.filter,
                id: props.id
            };
        }
        return {
            filter: state.filter,
            id: state.id
        };
    }

    componentDidMount() {
        this.setState({filter: this.props.match.params.filter});
        this.setState({id: this.props.match.params.id});
    }

    render() {
        return (
            <ProjectView i={this.state.id}/>
        );
    }
}

export default Projects;