import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ContactoListComponent (estado) {
    const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <div>
                <h3>{ conectado ? 'Contacto no disponible': 'Contacto en línea' }</h3>
                <button onClick={() => setConectado(!conectado)}>{conectado ? 'Conectar' : 'Desconectar'}</button>
            </div>
        </div>
    );
}

ContactoListComponent.propTypes = {
    estado: PropTypes.bool,
};

export default ContactoListComponent;
