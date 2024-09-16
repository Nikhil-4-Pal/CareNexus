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
    <div className="contact-form h-full w-screen flex flex-col items-center justify-center ">
      <h2 className=' text-4xl mt-[2rem] text-blue-900 font-Raleway ' >Send your request</h2>
      <form  className=' bg-blue-300 shadow-md shadow-neutral-600 mt-[2rem] w-[33rem] h-[25rem] rounded-lg flex flex-col gap-[2%]  justify-center items-center ' onSubmit={handleSubmit}>
        <input
            className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
        className=' w-[30rem] h-[3rem] text-md font-sans rounded-md  font-bold focus:outline-none p-[1rem] '
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button  className=' bg-blue-800 text-white h-[2rem] w-[6rem] rounded-lg ' type="submit">Send</button>
      </form>
    </div>
  );
};


export default ContactForm;