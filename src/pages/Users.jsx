import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

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

    const actionPanel = (
        <Panel id="users_actionbar">
            <div className="actionpanel">
                <button
                    onClick={() => {
                        
                    }}
                >
                    New User
                </button>
            </div>
        </Panel>
    );

    const filterPanel = (
        <Panel id="users_filterpanel">
            <ul>
                <li><a href="/users">{'(Clear Filters)'}</a></li>
            </ul>
        </Panel>
    );

    const userTable = (
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
    );

    return (
        <ThreeComponentPage
            leftComponent={actionPanel}
            centerComponent={userTable}
            rightComponent={filterPanel}
            dialogs={[]}
        />
    );
}

export default Users;