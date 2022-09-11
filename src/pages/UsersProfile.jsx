import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import {
    getApiContext,
    getUserById,
} from '../api';

function UsersProfile() {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        document.title="User Profile - Digital Media Tracker";
        getUserById(getApiContext(), userId).then((data) => setUser(data));
    }, []);

    return (
        <div className="users_profile_page">
            <h2>{user.username}</h2>
            <p>{`Role: ${user.role}`}</p>
            <p>{`Rank: ${user.rank}`}</p>
            <p>{`First Name: ${user.firstName}`}</p>
            <p>{`Last Name: ${user.lastName}`}</p>
        </div>
    );
}

export default UsersProfile;