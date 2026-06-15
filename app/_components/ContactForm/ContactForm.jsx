'use client';

import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again later.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send your message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      {status === 'success' && <div className='success-message'>{message}</div>}
      {status === 'error' && <div className='error-message'>{message}</div>}

      <div className='form-group'>
        <label htmlFor='name'>Full Name *</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Your name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email Address *</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='your@email.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          placeholder='(123) 456-7890'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='business'>Business Name</label>
        <input
          type='text'
          id='business'
          name='business'
          placeholder='Your business name'
          value={formData.business}
          onChange={handleChange}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='message'>Message *</label>
        <textarea
          id='message'
          name='message'
          placeholder='Tell us about your wholesale bakery needs...'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type='submit'
        className='submit-btn'
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
