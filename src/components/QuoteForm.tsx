import React, { useState } from 'react';

const services = [
  'Plumbing',
  'HVAC & Heating',
  'Electrical',
  'Roofing',
  'Landscaping',
  'Snow Removal',
  'Junk Removal',
  'Painting',
  'Moving Services'
];

import './QuoteForm.css';

const QuoteForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', address: '', details: '', datetime: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/.netlify/functions/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('submitted');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="get-quote" className="quote-form">
      <div className="container">
        <h2>Get Your Instant Quote</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" onChange={handleChange} required />
          <label htmlFor="service">Service</label>
          <select id="service" name="service" onChange={handleChange} required>
            <option value="">Select a service</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <label htmlFor="address">Address</label>
          <input id="address" name="address" onChange={handleChange} required />
          <label htmlFor="details">Details</label>
          <textarea id="details" name="details" onChange={handleChange} rows={3} />
          <label htmlFor="datetime">Preferred Date/Time</label>
          <input type="datetime-local" id="datetime" name="datetime" onChange={handleChange} />
          <button type="submit" className="btn-solid" disabled={status==='sending'}>
            {status==='sending'? 'Sending...' : 'Submit Quote'}
          </button>
          {status==='submitted' && <p>Thank you! Your quote request has been sent.</p>}
          {status==='error' && <p>Oops! Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;