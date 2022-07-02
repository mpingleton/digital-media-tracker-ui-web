import React from 'react';
import PrimaryRouter from '../routes/PrimaryRouter';

import {
    getApiContext
} from '../api';

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiContext: getApiContext(),
        };
    }

    render() {
        return (<PrimaryRouter apiContext={this.state.apiContext} />);
    }
}

export default AppProvider;