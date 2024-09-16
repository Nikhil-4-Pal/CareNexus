import React from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="form-section">
        <ContactForm />
      </div>
      <div className="details-section">
        <ContactDetails />
      </div>
    </div>
  );
};


export default ContactPage;