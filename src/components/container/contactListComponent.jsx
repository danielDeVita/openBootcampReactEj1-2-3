import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';


const ContactListComponent = () => {

    const defaultContact = new Contact('Daniel', 'De Vita', 'dani@dani.com', true)
    const defaultContact2 = new Contact('Leinad', 'Ativ ed', 'inad@inad.com', false)

    return (
        <div>
            <div>
                <h1>
                    Tus contactos:
                </h1>
            </div>
            <ContactComponent contact={defaultContact} ></ContactComponent>
            <ContactComponent contact={defaultContact2} ></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
