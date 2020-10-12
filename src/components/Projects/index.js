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

    componentWillReceiveProps(nextProps, next) {
        this.setState({filter: nextProps.match.params.filter});
        this.setState({id: nextProps.match.params.id});
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