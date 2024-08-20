import React, { useState, useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import "./ContactUsForm.css"

function ContactUsForm() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // emailjs.sendForm(
        //   'service_8co694f',      // Replace with your Service ID
        //   'template_vafufv4',     // Replace with your Template ID
        //   form.current,
        //   '57hdkNVG50aTphqNf'          // Replace with your User ID
        // )
        //   .then((response) => {
        //     alert('Your message has been sent successfully!');
        //     form.current.reset();
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //     alert('There was an error sending your message. Please try again.');
        //   });

        alert("success");
    };

    return (
        <div className='form-container'>
            <form className="contact-us-form" id="contact-us" ref={form} onSubmit={handleSubmit}>
                    <h3> Send Us A Message </h3>
                <div className="contact-us-form-group">
                    <input placeholder='Full Name' type="text" id="full-name"
                        name="fullName"
                        required />
                </div>
                
                <div className="contact-us-form-group">
                    <input placeholder='Email Address' type="email" id="email"
                        name="email"
                        required />
                </div>
                
                <div className="contact-us-form-group">
                    <input placeholder='Phone No' type="number" id="mobile-no"
                        name="mobileNo"
                        required />
                </div>
                
                
                <div className="contact-us-form-group">
                <input placeholder='Subject' type="text" id="subject"
                        name="subject"
                        required />
                </div>
                
                <div className="contact-us-form-group">
                    <textarea placeholder='Message' id="message"
                        name="message"
                        rows="4" required></textarea>
                </div>
                <button type="submit" className="contact-us-button">Submit</button>
            </form>
        </div>
    )
}

export default ContactUsForm
