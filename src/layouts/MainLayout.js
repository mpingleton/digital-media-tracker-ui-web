import React from 'react';
import './MainLayout.css';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="mainlayout_nav">
                    <p>Navbar</p>
                </div>
                <div className="mainlayout_body">
                    <h1>Body</h1>
                </div>
            </div>
        );
    }
}

export default MainLayout;