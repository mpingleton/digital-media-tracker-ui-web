import React from 'react';
import './MainLayout.css';

function MainLayout() {
    return (
        <div>
            <div className="mainlayout_nav">
                <div className="mainlayout_nav_left">
                    <p>Left</p>
                </div>
                <div className="mainlayout_nav_right">
                    <p>Right</p>
                </div>
            </div>
            <div className="mainlayout_body">
                <h1>Body</h1>
            </div>
        </div>
    );
}

export default MainLayout;