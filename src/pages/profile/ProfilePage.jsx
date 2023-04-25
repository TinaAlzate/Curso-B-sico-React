import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }
    
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigateTo('/tasks')}>Tasks</button>
            <button onClick={ () => navigate(-1) }>Go back</button>
        </div>
    );
}

export default ProfilePage;
