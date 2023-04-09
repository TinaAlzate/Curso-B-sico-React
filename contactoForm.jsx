import React, { useRef } from 'react';


const ContactoForm = ({ add }) => {

    const nameRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')

    function addContacto(e){
        e.preventDefault();
        const newContacto = {
            nombre: nameRef.current.value,
            apellido: apellidoRef.current.value,
            email: emailRef.current.value,
            conectado: true
        }
        add(newContacto);
        nameRef.current.value='';
        apellidoRef.current.value='';
        emailRef.current.value = '';
    }
    return (
        <div>
            <form onSumit={addContacto}>
            <div className="form-outline flex-fill">
                <input ref={nameRef} id='inputName' type='text' className="form-control form-control-lg" placeholder='Name' required autoFocus/>
                <input ref={apellidoRef} id='inputApellido' type='text' className="form-control form-control-lg" placeholder='Lastname' required/>
                <input ref={emailRef} id='inputEmail' type='email' className="form-control form-control-lg" placeholder='Email' required/>
                
            </div>
            <button onClick={addContacto} type="submit" className="btn btn-success btn-lg mx-2">Add</button>
            </form>
        </div>
    );
}

export default ContactoForm;
