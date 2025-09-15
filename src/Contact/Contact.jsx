import React, { useState, useEffect } from 'react';
import './Contacts.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationState, setValidationState] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bg = document.querySelector('.overlay-bg');
      if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setValidationState(prev => ({
      ...prev,
      [name]: value.trim() !== '' ? 'valid' : 'invalid'
    }));
  };

  const handleInputFocus = (e) => {
    const { name } = e.target;
    setValidationState(prev => ({
      ...prev,
      [name]: 'focused'
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setValidationState({});

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  const handleContactClick = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Create notification
      const notification = document.createElement('div');
      notification.textContent = 'Copied to clipboard!';
      notification.className = 'copy-notification';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 2000);
    });
  };

  return (
    <section className="contact-section">
      <div className="overlay-bg" />
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">
            Get in <span>Touch</span>
          </h2>
          <p className="contact-sub">
            Have a project in mind or just want to say hello? Let's connect and create something amazing together!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              className={validationState.name ? `validation-${validationState.name}` : ''}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              className={validationState.email ? `validation-${validationState.email}` : ''}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              className={validationState.phone ? `validation-${validationState.phone}` : ''}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              className={validationState.message ? `validation-${validationState.message}` : ''}
              required
            />
            <button 
              type="submit" 
              className={`${isLoading ? 'loading' : ''} ${isSuccess ? 'success' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                'Sending...'
              ) : isSuccess ? (
                <>
                  <FaCheck />
                  Message Sent!
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-info">
            <div className="info-item" onClick={() => handleContactClick('Info@nuamenterprises.com')}>
              <FaEnvelope className="info-icon" />
              <span>Info@nuamenterprises.com</span>
            </div>
            <div className="info-item" onClick={() => handleContactClick('+91 6282603759')}>
              <FaPhoneAlt className="info-icon" />
              <span>+91 6282603759</span>
            </div>
            <div className="info-item" onClick={() => handleContactClick('3/675, Neriyakkal House, Unichira, Thrikkakara, Ernakulam - 682021, Kerala, India')}>
              <FaMapMarkerAlt className="info-icon" />
              <span>3/675, Neriyakkal House, Unichira, Thrikkakara, Ernakulam - 682021, Kerala, India</span>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.045076685193!2d76.31257731479488!3d10.006572992824848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5c5d2dd9d9%3A0x5e5e5e5e5e5e5e5e!2sThrikkakara%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;