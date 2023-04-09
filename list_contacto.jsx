import React, { useState } from 'react';
import ContactComponent from '../pure/contacto';
import ContactoForm from '../pure/form/contactoForm';

function ContactoListComponent () {

    const contactos = [
        { nombre: 'Jose', apellido: 'Fernandez', email: 'valzate618@gmail.com', conectado: true },
        { nombre: 'Maria', apellido: 'Gómez', email: 'maria@gmail.com', conectado: true },
    ];

    const [nuevoContacto, setContacto] = useState(contactos);

    function conexion(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContact = [...nuevoContacto];
        tempContact[index].estado = !tempContact[index].estado;
        setContacto(tempContact);
    }
    
    function remove(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContact = [...nuevoContacto];
        tempContact.splice(index, 1);
        setContacto(tempContact);
    }
    
    function addContacto(contacto) {
        const tempContact = [...nuevoContacto];
        tempContact.push(contacto);
        setContacto(tempContact);
    }

    return (
        <div>
            {nuevoContacto.map((contacto, index) => {
                return (
                    <ContactComponent 
                    key={index} 
                    contacto={contacto} 
                    conexion={conexion} 
                    remove={remove} />
                );
            })}
            <ContactoForm add={addContacto}></ContactoForm>
        </div>
    );
};

export default ContactoListComponent;
