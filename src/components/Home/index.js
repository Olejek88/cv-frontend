import MainView from './MainView';
import React from 'react';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {
    render() {
        //const { t } = this.props;
        //console.log(t('my_projects.label'));
        return (
            <MainView/>
        );
    }
}

export default withRouter(Home);