import React from 'react';
import ApiContext from '../api/ApiContext';
import login from '../api/calls/login';
import PrimaryRouter from '../routes/PrimaryRouter';

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: new ApiContext()
        };
    }

    render() {
        return (<PrimaryRouter />);
    }
}

export default AppProvider;