import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS configuration
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(''); // Clear any previous status
    
    try {
      // Check if EmailJS is properly configured
      if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || !PUBLIC_KEY) {
        throw new Error('EmailJS not configured. Please add your public key in src/config/emailjs.js');
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'John Jay Moanes', // Your name
        reply_to: formData.email
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using service:', SERVICE_ID, 'template:', TEMPLATE_ID);
      console.log('Public key:', PUBLIC_KEY);

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', {
        error: error,
        message: error.message || error.toString() || 'No error message available',
        status: error.status,
        text: error.text,
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        hasPublicKey: PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
      });
      
      // More specific error messages
      const errorMessage = error.message || error.toString() || 'Unknown error';
      const errorStatus = error.status;
      
      if (errorMessage.includes('not configured')) {
        setSubmitStatus('config_error');
      } else if (errorMessage.includes('Invalid template') || errorStatus === 400) {
        setSubmitStatus('template_error');
      } else if (errorMessage.includes('Invalid service')) {
        setSubmitStatus('service_error');
      } else if (errorStatus === 400) {
        setSubmitStatus('bad_request');
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:johnjaymoanes25@gmail.com" target="_blank" rel="noopener noreferrer">
                    johnjaymoanes25@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    soon to be added
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com/jmoanes" target="_blank" rel="noopener noreferrer">
                    github.com/jmoanes
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Your message..."
                  rows="5"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'config_error' && (
                <div className="error-message-general">
                  <i className="fas fa-cog"></i>
                  EmailJS not configured. Please add your public key in src/config/emailjs.js
                </div>
              )}

              {submitStatus === 'template_error' && (
                <div className="error-message-general">
                  <i className="fas fa-file-alt"></i>
                  Email template error. Please check your template ID: {TEMPLATE_ID}
                </div>
              )}

              {submitStatus === 'service_error' && (
                <div className="error-message-general">
                  <i className="fas fa-server"></i>
                  Email service error. Please check your service ID: {SERVICE_ID}
                </div>
              )}

              {submitStatus === 'bad_request' && (
                <div className="error-message-general">
                  <i className="fas fa-exclamation-triangle"></i>
                  Bad request (400 error). Please check your EmailJS template variables and configuration. 
                  <br />
                  <small>Template ID: {TEMPLATE_ID}</small>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message-general">
                  <i className="fas fa-exclamation-circle"></i>
                  Sorry, there was an error sending your message. Please check the console for details and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
