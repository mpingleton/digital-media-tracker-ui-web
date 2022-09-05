import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginDialog from '../dialogs/LoginDialog';

function Login() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title="Login - Digital Media Tracker";
    }, []);

    return (
        <div className="login_form">
           <LoginDialog
                isOpen={true}
                onSuccess={() => {
                    navigate('/media', { replace: true });
                }}
                onClose={() => {
                    navigate('/', { replace: true });
                }}
            />
        </div>
    );
}

export default Login;