import React from 'react';
import './Login.css';

import {
    getApiContext,
    setAccessToken,
    login,
} from '../api';

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const loginCredentials = {
            username: event.target.username.value,
            passphrase: event.target.passphrase.value,
        };

        login(getApiContext(), loginCredentials, setAccessToken);
    };

    return (
        <div className="login_form">
            <form onSubmit={handleSubmit}>
                <label for="username">Username: </label><br/>
                <input type="text" id="username" name="username" /><br/><br/>
                <label for="passphrase">Passphrase: </label><br/>
                <input type="password" id="passphrase" name="passphrase" /><br/><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;