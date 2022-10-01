import "./ContactForm.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gt2dc7b', 'template_j4s0nd2', form.current, 'gk2eEzBoCGsdxyThU')
            .then((result) => {
                console.log(result.text);
                alert("Message has sent succesfully")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong")
            });
    }

    return (
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="sender_name" />

                <label>Email</label>
                <input type="email" name="sender_email" />

                <label>Message</label>
                <textarea
                    name="message"
                    rows="6"
                    placeholder="Type your message here" />
                <button type="submit" value="Send" className="btn">SEND &nbsp; MESSAGE</button>
            </form>

        </div>
    )
}


export default ContactForm