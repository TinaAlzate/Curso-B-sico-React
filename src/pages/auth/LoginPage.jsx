import React from 'react';
import Formiklogin from '../../components/pure/forms/Formiklogin'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }
    return (
        <div>
            <h1>Login page</h1>
            <Formiklogin></Formiklogin>
            <button onClick={register}>Registrate</button>
        </div>
    );
}

export default LoginPage;
