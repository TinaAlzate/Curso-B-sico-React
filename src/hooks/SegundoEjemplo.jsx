// Ejemplo de uso de 
// useState()
// useRef()
// useEffect()

import React, {useState, useRef, useEffect} from 'react';

const SegundoEjemplo = () => {
//Vamos a crear dos contadores distintos cad auno en un estado diferente
const [contador1, setContador1] = useState(0);
const [contador2, setContador2] = useState(0);

//Vamos a crear una referencia con useRef() para asociar una variable
// con un elemento del DOM del componente (vista HTML) 

const miRef = useRef();

function incrementar1(){
    setContador1(contador1 + 1);
}

function incrementar2(){
    setContador2(contador2 + 1)
}

//Trabajando con useEffect

// Caso 1 = Ejecutar siempre un snippet de código
//Cada vez haya un cambio en el estado del componente
//se ejecuta todo aquello que este en el useEffect()

// useEffect(() => {
//     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
//     console.log('Mostrando referencia al elemento del DOM');
//     console.log(miRef);
// })

// Caso 2 = Ejecutar solo cuando cambie contador 1
// Cada vez que haya un cambio en contador 1, se ejecuta lo que este en useEffect()
// En caso de que cambie contador 2, no habra ejecucion

// useEffect(() => {
//     console.log('CAMBIO EN EL ESTADO DEL contador 1');
//     console.log('Mostrando referencia al elemento del DOM');
//     console.log(miRef);
// }, [contador1]);

// Caso 3 = Ejecutar solo cuando cambie contador 1 o contador2 en caso de que hayan mas de dos elementos
// Cada vez que haya un cambio en contador 1 o contador 2, se ejecuta lo que este en useEffect()
// En caso de que cambie un contador diferente a 1 o 2 , no habra ejecucion

useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL contador 1/contador 2');
    console.log('Mostrando referencia al elemento del DOM');
    console.log(miRef);
}, [contador1, contador2]);

    return (
        <div>
            <div>
            <h1>Uso de useState(), useRef(), useEffect()</h1>
            <h3>Contador 1: { contador1 }</h3>
            <h3>Contador 2: { contador2 }</h3>
            {/* Elemento referenciado */}
            <h2 ref={miRef}>Ejemplo del elemento referenciado</h2>
            {/* Botones para cambiar los contadores */}
            <button onClick = {incrementar1}>Incrementar contador 1</button>
            <button onClick = {incrementar2} >Incrementar contador 2</button>
        </div>
        </div>
    );
}

export default SegundoEjemplo;
