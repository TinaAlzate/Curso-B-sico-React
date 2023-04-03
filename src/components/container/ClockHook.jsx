import React, { useEffect, useState } from 'react';

export const ClockHook = () => {

    const estadoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Valentina',
        apellido: 'Alzate'
    }
    const [persona, setPersona] = useState(estadoInicial);

    useEffect(() => {
        function tick(){
            setPersona({...persona, fecha:new Date(), edad: (persona.edad)+1 });
        }

        const timerID = setInterval (() => tick(), 1000);

    }, [persona]);

    return (
        <div>
            <div>
                <h2>Hora Actual: { persona.fecha.toLocaleTimeString() }</h2>
                <h3>Usuario: { persona.nombre } { persona.apellido }</h3>
                <h1>Edad: { persona.edad }</h1>
            </div>
        </div>
    );
}