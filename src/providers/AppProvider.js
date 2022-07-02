import React from 'react';
import PrimaryRouter from '../routes/PrimaryRouter';

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<PrimaryRouter />);
    }
}

export default AppProvider;