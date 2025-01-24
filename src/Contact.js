import React from 'react';
import ContactForm from './form';

const Contact = () => {
    return (
        <main>
            <div className='contact'>
                <h1>Kontakt</h1>
                <p>Hier kann man mich erreichen. Ich werde mich so schnell es geht bei Ihnen zurückmelden.</p>
                <ContactForm />
            </div>
        </main>
    );
};

export default Contact;