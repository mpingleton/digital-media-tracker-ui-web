import React from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
    setAccessToken,
    login,
} from '../api';

function LoginDialog(props) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginCredentials = {
            username: event.target.username.value,
            passphrase: event.target.passphrase.value,
        };

        login(getApiContext(), loginCredentials, setAccessToken)
            .then((data) => {
                if (props.onSuccess !== undefined) {
                    props.onSuccess();
                }
            });
    };

    return (
        <Dialog isOpen={props.isOpen} onClose={props.onClose}>
            <form className="login_form" onSubmit={handleSubmit}>
                <label for="username">Username: </label><br/>
                <input type="text" id="username" name="username" /><br/><br/>
                <label for="passphrase">Passphrase: </label><br/>
                <input type="password" id="passphrase" name="passphrase" /><br/><br/>
                <input type="submit" value="Login" />
            </form>
        </Dialog>
    );
}

export default LoginDialog;