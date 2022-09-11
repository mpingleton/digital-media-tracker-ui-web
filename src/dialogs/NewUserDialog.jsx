import React, { useState, useEffect } from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
    createUser,
} from '../api';

function NewUserDialog(props) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            username: event.target.username.value,
            passphrase: event.target.passphrase.value,
            role: event.target.role.value,
            rank: event.target.rank.value,
            firstName: event.target.first_name.value,
            lastName: event.target.last_name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
        };

        createUser(getApiContext(), userData)
            .then(() => {
                if (props.onSuccess !== undefined) {
                    props.onSuccess();
                }
            });
    };

    return (
        <Dialog isOpen={props.isOpen} onClose={props.onClose}>
            <form className="new_user_form" onSubmit={handleSubmit}>
                <label for="username">Username: </label><br/>
                <input type="text" id="username" name="username" /><br/><br/>
                <label for="passphrase">Passphrase: </label><br/>
                <input type="password" id="passphrase" name="passphrase" /><br/><br/>
                <label for="role">Role: </label>
                <select id="role" name="role">
                    <option value="USER">User</option>
                    <option value="ADMIN">Administrator</option>
                </select><br/><br/>
                <label for="rank">Rank: </label><br/>
                <input type="text" id="rank" name="rank" /><br/><br/>
                <label for="first_name">First Name: </label><br/>
                <input type="text" id="first_name" name="first_name" /><br/><br/>
                <label for="last_name">Last Name: </label><br/>
                <input type="text" id="last_name" name="last_name" /><br/><br/>
                <label for="email">E-Mail: </label><br/>
                <input type="text" id="email" name="email" /><br/><br/>
                <label for="phone">Phone: </label><br/>
                <input type="text" id="phone" name="phone" /><br/><br/>
                <input type="submit" value="Create" />
            </form>
        </Dialog>
    );
}

export default NewUserDialog;