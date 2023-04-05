import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef()

    function pressButton(){
        const text = messageRef.current.value
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }
    return (
        <div style={{background:'lightblue', padding:'1rem'}}>
            <p onMouseOver={() => console.log('ON MOUSE OVER')}>Hello, {name}</p>
            <button onClick={() => console.log('Pressed button 1')}>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Button 3</button>
            <input 
                placeholder='Insert a text' 
                onFocus={ () => console.log('Input focused') }
                onChange={ (e) => console.log('Input canged:', e.target.value) }
                onCopy={ () => console.log('Copied text from input')}
                ref={ messageRef }
            />
            <button onClick={ () => send(messageRef.current.value) }>
                Send message
            </button>
            <div style={{background: 'lightpink', margin: '2rem'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
