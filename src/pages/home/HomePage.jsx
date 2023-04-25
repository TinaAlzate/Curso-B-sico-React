import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const HomePage = () => {

    const location = useLocation()
    const navigate = useNavigate();

    console.log('We are in route:', location.pathname); // '/about | /faqs'

    const navigateTo = (path) => {
        navigate(path);
    }

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true', //Query params
            state: true
        });
    }

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigateProps('/online-state')}>Go to page with state / Query params</button>
            <button onClick={() => navigateTo('/profile')}>Go to profile</button>
            <button onClick={ () => navigate(-1)}>Go back</button>
        </div>
    );
}

export default HomePage;
