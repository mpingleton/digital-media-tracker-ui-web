import React from 'react';
import './MainLayout.css';

function MainLayout(props) {
    return (
        <div>
            <div className="mainlayout_nav">
                <div className="mainlayout_nav_left">
                    <ul className="mainlayout_nav_left">
                        <li className="mainlayout_nav_left_item">
                            <a className="mainlayout_nav_left_item" href="/media">Media</a>
                        </li>
                        <li className="mainlayout_nav_left_item">
                            <a className="mainlayout_nav_left_item" href="/about">About</a>
                        </li>
                    </ul>
                </div>
                <div className="mainlayout_nav_right">
                    <ul className="mainlayout_nav_right">
                        <li className="mainlayout_nav_right_item">
                            <a className="mainlayout_nav_right_item" href="/profile">SrA Doe, John</a>
                        </li>
                        <li className="mainlayout_nav_right_item">
                            <a className="mainlayout_nav_right_item" href="#">Sign Out</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mainlayout_body">
                {props.element}
            </div>
        </div>
    );
}

export default MainLayout;