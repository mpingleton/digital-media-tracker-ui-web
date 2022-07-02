import React from 'react';
import './Login.css';

import {
    getApiContext,
    setAccessToken,
    login,
} from '../api';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(event.target.username.value);
        //console.log(event.target.passphrase.value);

        const loginCredentials = {
            username: event.target.username.value,
            passphrase: event.target.passphrase.value,
        };

        login(getApiContext(), loginCredentials, setAccessToken);
    }

    render() {
        return (
            <div className="login_form">
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username: </label><br/>
                    <input type="text" id="username" name="username" /><br/><br/>
                    <label for="passphrase">Passphrase: </label><br/>
                    <input type="password" id="passphrase" name="passphrase" /><br/><br/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;