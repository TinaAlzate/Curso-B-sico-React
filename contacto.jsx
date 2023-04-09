import React from "react";

const ContactComponent = ({ contacto, conexion, remove }) => {
    return (
    <div className="contact-component">
        <h2>{contacto.nombre} {contacto.apellido}</h2>
        <span>{contacto.email} </span>
        <button style={{ backgroundColor: contacto.estado ? "green" : "red" }} className="state-button" onClick={() => {conexion(contacto);}}>
        {contacto.estado ? "Conectado" : "Desconectado"}</button>
        <button className="remove-button" onClick={() => remove(contacto)}>Borrar</button>
    </div>
    );
};

export default ContactComponent;
