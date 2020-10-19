import React from 'react';

class CategoryHeaderTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    componentDidMount() {
        if (this.props.title)
            this.setState({title: this.props.title});
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {
        if (prevProps.title !== this.props.title) {
            this.setState({title: this.props.title});
        }
    }

    render() {
        return (
            <section
                className="elementor-element elementor-element-title post-banner-heading elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-element elementor-column elementor-col-100 elementor-top-column">
                            <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                    <div
                                        className="elementor-element elementor-element-div elementor-widget elementor-widget-heading">
                                        <div className="elementor-widget-container">
                                            <h3 className="elementor-heading-title elementor-size-default">
                                                {this.state.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoryHeaderTitle;
