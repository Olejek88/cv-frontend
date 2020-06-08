import React from 'react';

class ExperienceTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Project',
            subtitle: 'A daily dose'
        };
    }

    componentDidMount() {
        if (this.props.title)
            this.setState({title: this.props.title});
        if (this.props.subtitle)
            this.setState({subtitle: this.props.subtitle});
    }

    render() {
        return (
            <div className="author-page">
                <h3 className="archive-cat-title" style={{textAlign: 'center'}}>{this.props.title}</h3>
                <h3 className="daily-dosis" style={{textAlign: 'center'}}>{this.props.subtitle}</h3>
            </div>
        );
    }
}

export default ExperienceTitle;
