import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email address'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters'),
    });

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form data:', values);
        alert('Your message has been sent!');
        resetForm();
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
                            <Field name="name" type="text" placeholder="Your Name" />
                            <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                        </div>

                        <div className='email-form'>
                            <label htmlFor="email">Email</label><br></br>
                            <Field name="email" type="email" placeholder="Your Email" />
                            <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                        </div>

                        <div className='message-form'>
                            <label htmlFor="message">Message</label><br></br>
                            <Field
                                name="message"
                                as="textarea"
                                placeholder="Your Message"
                                rows="5"
                            />
                            <ErrorMessage name="message" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                        </div>

                        <button type="submit" style={{ marginTop: '1rem' }}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;