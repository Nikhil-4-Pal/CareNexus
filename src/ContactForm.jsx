<<<<<<< HEAD
=======
// src/ContactForm.jsx
>>>>>>> origin/master
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
<<<<<<< HEAD
    <div className="contact-form h-full w-screen flex flex-col items-center justify-center ">
      <h2 className=' text-4xl mt-[2rem] text-blue-900 font-Raleway ' >Send your request</h2>
      <form  className=' bg-blue-300 shadow-md shadow-neutral-600 mt-[2rem] w-[33rem] h-[25rem] rounded-lg flex flex-col gap-[2%]  justify-center items-center ' onSubmit={handleSubmit}>
        <input
            className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
=======
    <div className="contact-form">
      <h2>Send your request</h2>
      <form onSubmit={handleSubmit}>
        <input
>>>>>>> origin/master
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
=======
>>>>>>> origin/master
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
=======
>>>>>>> origin/master
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
=======
>>>>>>> origin/master
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
<<<<<<< HEAD
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
=======
>>>>>>> origin/master
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <button  className=' bg-blue-800 text-white h-[2rem] w-[6rem] rounded-lg ' type="submit">Send</button>
=======
        <button type="submit">Send</button>
>>>>>>> origin/master
      </form>
    </div>
  );
};


<<<<<<< HEAD
export default ContactForm;
=======
export default ContactForm;
>>>>>>> origin/master
