import React, { useState } from 'react';
import './QuoteForm.css'; // Re-using QuoteForm styles for now as base

const DemoForm: React.FC = () => {
    const [form, setForm] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: ''
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // TODO: Replace with actual submission logic/endpoint
        // For now simulating a successful submission
        setTimeout(() => {
            setStatus('submitted');
        }, 1000);
    };

    return (
        <section id="demo" className="quote-form" style={{ background: '#F8FAFC', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Get Your Free Trial</h2>
                    <p style={{ color: 'var(--color-text-dim)' }}>
                       No credit card required. Live on your site in under 5 minutes.
                    </p>
                </div>

                <form id="demo-signup" onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <label style={{ display: 'block', marginBottom: '1rem' }}>
                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Company Name</span>
                        <input
                            name="companyName"
                            required
                            placeholder="Your company name"
                            value={form.companyName}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                        />
                    </label>

                    <label style={{ display: 'block', marginBottom: '1rem' }}>
                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name</span>
                        <input
                            name="contactName"
                            required
                            placeholder="e.g. Jane Doe"
                            value={form.contactName}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                        />
                    </label>

                    <label style={{ display: 'block', marginBottom: '1rem' }}>
                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@yourcompany.com"
                            value={form.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                        />
                    </label>

                    <label style={{ display: 'block', marginBottom: '1rem' }}>
                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</span>
                        <input
                            name="phone"
                            required
                            placeholder="(555) 123‑4567"
                            value={form.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                        />
                    </label>

                    <label style={{ display: 'block', marginBottom: '1.5rem' }}>
                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Business Type</span>
                        <select
                            name="businessType"
                            required
                            value={form.businessType}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E2E8F0', background: 'white' }}
                        >
                            <option value="">Select industry</option>
                            <option>Plumbing</option>
                            <option>HVAC</option>
                            <option>Electrical</option>
                            <option>Landscaping</option>
                            <option>Cleaning</option>
                            <option>Other</option>
                        </select>
                    </label>

                    <button
                        type="submit"
                        className="btn-primary full-width"
                        disabled={status === 'sending'}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            backgroundColor: 'var(--color-brand-primary, #0066CC)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        {status === 'sending' ? 'Submitting...' : 'Get My Free Trial'}
                    </button>

                    {status === 'submitted' && (
                        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#F0FDF4', color: '#166534', borderRadius: '4px', textAlign: 'center' }}>
                            Success! We'll be in touch shortly.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default DemoForm;
