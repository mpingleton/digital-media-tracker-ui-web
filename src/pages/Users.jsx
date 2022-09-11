import React, {useEffect, useState} from 'react';
import Panel from '../components/Panel';
import NewUserDialog from '../dialogs/NewUserDialog';
import ThreeComponentPage from '../layouts/ThreeComponentPage';

import {
    getApiContext,
    getUsers,
} from '../api';

function Users() {
    const [users, setUsers] = useState([]);
    const [isNewUserDialogOpen, setNewUserDialogOpen] = useState(false);

    useEffect(() => {
        document.title="Users - Digital Media Tracker";
        getUsers(getApiContext()).then((data) => setUsers(data.users));
    }, []);

    var userList = (<h3>Loading...</h3>);
    if (users.length > 0) {
        userList = users.map((u) => (
            <tr>
                <td><a href={`/users/id/${u.userId}`}>{u.username}</a></td>
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
                        setNewUserDialogOpen(!isNewUserDialogOpen);
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

    const dialogNewUser = (
        <NewUserDialog
            isOpen={isNewUserDialogOpen}
            onSuccess={() => {
                window.location.reload();
                setNewUserDialogOpen(false);
            }}
            onClose={() => {
                setNewUserDialogOpen(false);
            }}
        />
    );

    return (
        <ThreeComponentPage
            leftComponent={actionPanel}
            centerComponent={userTable}
            rightComponent={filterPanel}
            dialogs={[dialogNewUser]}
        />
    );
}

export default Users;