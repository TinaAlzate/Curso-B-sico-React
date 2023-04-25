import React from 'react';
import Registerformik from '../../components/pure/forms/Registerformik';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }
    return (
        <div>
            <h1>Register page</h1>
            <Registerformik></Registerformik>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default RegisterPage;
