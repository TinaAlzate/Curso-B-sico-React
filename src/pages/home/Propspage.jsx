import React from 'react';
import { useLocation } from 'react-router-dom'

const Propspage = () => {

    const location = useLocation();

    console.log('QUERY PARAMS: ', location.search) // query params sent

    return (
        <div>
            <h1>State: {location.state ? 'The user is online' : 'The user is offline'} </h1>
        </div>
    );
}

export default Propspage;
