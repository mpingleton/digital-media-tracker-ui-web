import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Digital Media Tracker</h1>
                <h3>Digital Media Tracker is authorized to store and process Unclassified information only!</h3>
                <a href="/login">Login</a>
            </div>
        );
    }
}

export default Landing;