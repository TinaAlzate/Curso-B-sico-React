import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in route:', location.pathname); // '/about|/faqs'

    const navigateTo = (path) => {
        navigate(path);
    }

    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={ () => navigateTo('/') }>Go to home</button>
                <button onClick={ () => navigate(-1) }>Go back</button>
            </div>
        </div>
    );
}

export default AboutPage;
