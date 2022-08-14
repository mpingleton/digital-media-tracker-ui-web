import React, {useEffect, useState} from 'react';

import {
    getApiContext,
    getUsers,
} from '../api';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        document.title="Users - Digital Media Tracker";
        getUsers(getApiContext()).then((data) => setUsers(data.users));
    }, []);

    var userList = (<h3>Loading...</h3>);
    if (users.length > 0) {
        userList = users.map((u) => (
            <tr>
                <td>{u.username}</td>
                <td>{u.role}</td>
                <td>{u.rank}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
            </tr>
        ));
    }

    return (
        <div className="users_page">
            <div className="buttonbar">
                <ul className="buttonbar">
                    <li className="buttonbar_item">
                        <a className="buttonbar_item" href="/users/new">New User</a>
                    </li>
                </ul>
            </div>
            <table>
                <tr>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Rank</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {userList}
            </table>
        </div>
    );
}

export default Users;