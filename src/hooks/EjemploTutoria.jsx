import React, { use, useState, useEffect } from 'react';

const EjemploTutoria = () => {

    const usuario = {
        nombre:'Valentina',
        puntos:0
    }

    const [partida, setPartida] = useState(usuario);

    useEffect(() => {
        console.log('Actualizado puntos')
    }, [partida.puntos]);

    function sumarPartida (){
        setPartida({...partida, puntos:(partida.puntos+1)});
    }

    return (
        <div>
            <h1>Hola, { partida.nombre }</h1>
            <h2>Puntuación: { partida.puntos }</h2>
            <button onClick = { sumarPartida }>Sumar puntos</button>
        </div>
    );
}

export default EjemploTutoria;
