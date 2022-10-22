import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    const [conectado, setConectado] = useState(contact.conectado);
    const handlerConectado = () => {
        setConectado(!conectado)
    }

    return (
        <div>
            <h1>Nombre: {contact.nombre} </h1>
            <h2>Apellido: {contact.apellido} </h2>
            <h3>Email: {contact.email} </h3>
            <h4> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h4>
            <button onClick={handlerConectado}>{conectado === false ? 'Conectar' : 'Desconectar'}</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
