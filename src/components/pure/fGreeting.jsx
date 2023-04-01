import React, { useState } from 'react';
import PropTypes from 'prop-types';


const FGreeting = (props) => {

    // Breve introduccion: useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(25);

    const birthday = () => {
        setage(age + 1)
    }
    return (
        <div>
            <h1>Hola { props.name } desde componente funcional!!</h1>
            <h2>Tu edad es de: { age }</h2>
            <div>
                <button onClick={ birthday }>Cumplir años</button>
            </div>
        </div>
    );
};


FGreeting.propTypes = {
    name: PropTypes.string,
};


export default FGreeting;
