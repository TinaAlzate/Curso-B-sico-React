import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class'
import ContactoListComponent from '../container/contacto_list'

const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h1>Datos personales:</h1>
            <h3>Nombre: { contacto.nombre }</h3>
            <h3>Apellido: { contacto.apellido}</h3>
            <h3>Email: { contacto.email }</h3>
            <ContactoListComponent estado = { true }></ContactoListComponent>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;
