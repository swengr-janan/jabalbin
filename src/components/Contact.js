import React from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1nnh73v",
        "template_cus524o",
        e.target,
        "C1MG7ujT7furn1szD"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email: " + JSON.stringify(error));
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="clipart-container">
        <img
          src={`${process.env.PUBLIC_URL}/contact.png`}
          alt="Contact Clipart"
          className="clipart"
        />
      </div>
      <div className="form-container">
        <form id="contact-form" onSubmit={sendEmail}>
          <h2>Let’s Connect and Make Things Happen!</h2>
          <p>Please provide the details below, and let's connect!</p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
