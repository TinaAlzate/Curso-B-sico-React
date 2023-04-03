// Ejemplo hooks:
// useState()
// useContext()

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1 
 * dispone de un contexto que va a tener un valor 
 * que recibe desde el padre 
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
    /**
     * Inicializamos un estado vacio que se va rellenar con los
     * datos del contexto del padre 
     */
    const state = useContext(miContexto);
    
    return (
        <div>
            <h1>El token es: { state.token }</h1>
            {/* Pintamos en componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h1>La sesión es: { state.sesion }</h1>
        </div>
    );
}

export default function MiComponenteConContexto(){
    const estadoInicial = {
        token: '123456',
        sesion: 1
    }
    //Creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: 'JVYDBi2165',
                sesion: sesionData.sesion + 1
            }
        );
    }
    return (
        <miContexto.Provider value={ sesionData }>
            {/* Todo lo que este dentro puede leer los datos de sesionData */}
            {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
            <h1>***Ejemplo de usestate() y de useContext()***</h1>
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar sesión</button>
        </miContexto.Provider>
    )
}

