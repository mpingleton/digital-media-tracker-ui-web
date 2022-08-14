import React, {useEffect, useState} from 'react';

import {
    getApiContext,
    getSelf,
} from '../api';

function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        document.title="User Profile - Digital Media Tracker";
        getSelf(getApiContext()).then((data) => setUser(data));
    }, []);

    var displayUser = (<h3>Loading...</h3>);
    if (user.userId !== undefined) {
        displayUser = (
            <div>
                <h2>{`${user.rank} ${user.lastName}, ${user.firstName}`}</h2>
                <p>Username: {user.username}</p>
                <p>Role: {user.role}</p>
            </div>
        );
    }

    return (
        <div className="profile_page">
            {displayUser}
        </div>
    );
}

export default Profile;