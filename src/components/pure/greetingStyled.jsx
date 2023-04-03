import React, { useState } from 'react';

//Definiendo estilos en constantes 

//Estilos para usuarios logeados
const loggedStyle = {
    color: 'blue',
}
//Estilos para usuarios no logeados
const unloggedStyle = {
    color:'tomato',
    fontWeight:'bold'
}

const GreetingStyled = (props) => {
    //Generamos un estado para el componente y asi controlar 
    //si el usuario esta o no logeado
    const [logged, setLogged] = useState(false);

    const grertingUser = () => (<p>Hola, { props.name }</p>);

    const pleaseLogin = () => (<p>Please login</p>);

    return (
        <div style={( logged ? loggedStyle : unloggedStyle )}>
            { logged ? grertingUser() : pleaseLogin()}
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged)
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
