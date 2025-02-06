import React from "react";
import "./Contact.css"; // Import external CSS

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-card">
            <h2 className="contact-title">Send Us a Message</h2>
            <form className="contact-form">
              <div className="input-group">
                <input type="text" id="fullName" required />
                <label htmlFor="fullName">Full Name</label>
              </div>
              <div className="input-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="input-group">
                <textarea id="message" rows="5" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="contact-button">Send Message</button>
            </form>
          </div>

          {/* Location and Contact Details */}
          <div className="contact-card">
            <h2 className="contact-title">Contact Info</h2>
            <p><strong>📍 Address:</strong> Addis Ababa, Ethiopia</p>
            <p><strong>📞 Phone 1:</strong> +251 919 352 801</p>
            <p><strong>📞 Phone 2:</strong> +251 714 055 898</p>
            <p><strong>📧 Email:</strong> <a href="mailto:misganawcbcd21@gmail.com">misganawcbcd21@gmail.com</a></p>
            <h2 className="contact-title">Our Location</h2>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                width="100%"
                height="300"
                src="https://www.google.com/maps?q=+Addis+Ababa,+Ethiopia&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
