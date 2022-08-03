import React, { useState, useEffect } from 'react';
import './MainLayout.css';

import {
    getApiContext,
    getSelf,
} from '../api';

const navigationBarLinks = [
    {
        title: 'Media',
        url: '/media',
    },
    {
        title: 'About',
        url: '/about',
    },
];

function MainLayout(props) {
    const [user, setUser] = useState({rank: '', firstName: '', lastName: ''});

    useEffect(() => {
        getSelf(getApiContext()).then((data) => setUser(data));
    }, []);

    return (
        <div>
            <div className="mainlayout_nav">
                <div className="mainlayout_nav_left">
                    <ul className="mainlayout_nav_left">
                        {navigationBarLinks.map((link) => (
                            <li className="mainlayout_nav_left_item">
                                <a className="mainlayout_nav_left_item" href={link.url}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mainlayout_nav_right">
                    <ul className="mainlayout_nav_right">
                        <li className="mainlayout_nav_right_item">
                            <a className="mainlayout_nav_right_item" href="/profile">{`${user.rank} ${user.lastName}, ${user.firstName}`}</a>
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