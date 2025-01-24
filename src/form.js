import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Feld ist verpflichtend')
            .email('Die von Ihnen gewählte Email ist nicht valide'),
        message: Yup.string()
            .required('Feld ist verpflichtend')
            .min(10, 'Nachrichten müssen mindestens 10 Zeichen lang sein'),
    });

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        const serviceID = 'service_307oyrw';
        const templateID = 'template_09tn7cl';
        const publicKey = 'zAKXoyph60fXZQ-Jc';

        emailjs.send(serviceID, templateID, values, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Ihre Nachricht wurde erfolgreich versendet!');
                resetForm();
            })
            .catch((err) => {
                console.error('Email failed to send:', err);
                alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
            });
    };

    return (
        <div className='form'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className='name-form'>
                            <br></br>
                            <label htmlFor="name">Name</label><br></br>
                            <Field name="name" type="text" placeholder="Ihr Name" />
                        </div>

                        <div className='email-form'>
                            <label htmlFor="email">Email*</label><br></br>
                            <Field name="email" type="email" placeholder="Ihre Email" />
                            <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.8rem', fontWeight: '500' }} />
                        </div>

                        <div className='message-form'>
                            <label htmlFor="message">Nachricht*</label><br></br>
                            <Field
                                name="message"
                                as="textarea"
                                placeholder="Ihre Nachricht"
                                rows="5"
                            />
                            <ErrorMessage name="message" component="div" style={{ color: 'red', fontSize: '0.8rem', fontWeight: '500' }} />
                        </div>

                        <button type="submit" style={{ marginTop: '1rem' }}>
                            Abschicken
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;