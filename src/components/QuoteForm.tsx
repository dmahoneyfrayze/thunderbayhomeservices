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
    <section id="get-quote" style={{ padding: '4rem 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>Get Your Instant Quote</h2>
        <form onSubmit={handleSubmit}>
          <label>Name<input name="name" onChange={handleChange} required /></label>
          <label>Email<input type="email" name="email" onChange={handleChange} required /></label>
          <label>Phone<input name="phone" onChange={handleChange} required /></label>
          <label>Service<select name="service" onChange={handleChange} required>
            <option value="">Select a service</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select></label>
          <label>Address<input name="address" onChange={handleChange} required /></label>
          <label>Details<textarea name="details" onChange={handleChange} rows={3} /></label>
          <label>Preferred Date/Time<input type="datetime-local" name="datetime" onChange={handleChange} /></label>
          <button type="submit" disabled={status==='sending'}>
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