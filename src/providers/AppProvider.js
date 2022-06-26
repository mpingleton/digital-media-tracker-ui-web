import React from 'react';
import ApiContext from '../api/ApiContext';
import PrimaryRouter from '../routes/PrimaryRouter';

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.api = new ApiContext();
        this.state = {

        };
    }

    render() {
        return (<PrimaryRouter />);
    }
}

export default AppProvider;