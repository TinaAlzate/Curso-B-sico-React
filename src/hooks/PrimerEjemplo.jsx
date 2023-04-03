// Ejemplo de uso del hook useState
// Crear un componente de tipo función y acceder a su estado de
// privado a través de un hook y, además, poder modificarlo

import React, { use, useState } from 'react';

const PrimerEjemplo = () => {

    //Valor inical para un contador
    const valorinicial = 0;
    //Valor inicial para una persona
    const personainicial={
        nombre:'Valentina',
        email:'valzate618@gmail.com'
    }

    // Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente para así poder gestionar su cambio y que este se vea reflejado en la vista del componente
    const [contador, setcontador] = useState(valorinicial);
    const [persona, setpersona] = useState(personainicial);

    function incrementarContador(){
        setcontador(contador + 1);
    }
    function actualizarPersona(){
        setpersona(
            {
                nombre:'Javier',
                email: 'jarestrepot@uqvirtual.edu.co'
            }
        )
    }
    return (
        <div>
            <h1>Uso de useState()</h1>
            <h3>Contador: { contador }</h3>
            <h2>Datos de usuario:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>
            <button onClick = {incrementarContador}>Aumentar contador</button>
            <button onClick = {actualizarPersona} >Actualizar persona</button>
        </div>
    )
}

export default PrimerEjemplo;
