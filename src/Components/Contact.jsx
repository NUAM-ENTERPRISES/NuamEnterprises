import React, { useEffect } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header" data-aos="zoom-in">
        <h2>Let’s <span>Connect</span></h2>
        <p>We’re here to help you innovate and grow. Reach out now!</p>
      </div>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info" data-aos="fade-right">
          <div className="info-box">
            <h3>📞 Contact</h3>
            <p>+91 6282603759</p>
          </div>
          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>Info@nuamenterprises.com</p>
          </div>
          <div className="info-box">
            <h3>📍 Address</h3>
            <p>3/675, Neriyakkal House, Unichira, Thrikkakara, Thrikkakara, Ernakulam, Ernakulam- 682021, Kerala, India</p>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" data-aos="fade-up">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Map */}
        <div className="contact-map" data-aos="fade-left">
            <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.000000!2d76.195654!3d10.222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x000000!2zMTDCsDEzJzIwLjAiTiA3NsKwMTEnMzAuMiJF!5e0!3m2!1sen!2sin!4v000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
