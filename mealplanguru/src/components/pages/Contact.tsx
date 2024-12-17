import React, { useState } from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: { [key: string]: boolean } = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // complete this later!
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });

    alert('Your message has been sent!');
  };

  return (
    <div className="contact-page">
      <h2>We always welcome your feedback. Send us your suggestions, ideas, criticisms, complaints or even food requests!</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: false }));
            }}
            required
          />
          {errors.name && <small className="error-text">Required field</small>}
        </div>
        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: false }));
            }}
            required
          />
          {errors.email && <small className="error-text">Required field</small>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={`form-group ${errors.message ? 'error' : ''}`}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrors((prev) => ({ ...prev, message: false }));
            }}
            required
          ></textarea>
          {errors.message && <small className="error-text">Required field</small>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}