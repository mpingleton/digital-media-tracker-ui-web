import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {
    getApiContext,
    setAccessToken,
    login,
} from '../api';

function Login() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title="Login - Digital Media Tracker";
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginCredentials = {
            username: event.target.username.value,
            passphrase: event.target.passphrase.value,
        };

        login(getApiContext(), loginCredentials, setAccessToken)
            .then((data) => {
                navigate('/media', { replace: true });
            });
    };

    return (
        <div className="login_form">
            <form className="login_form" onSubmit={handleSubmit}>
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