import React, { useState } from 'react';
import SEO from '../components/SEO';
import { submitLead } from '../utils/submitLead';
import { MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';

const Support: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'contact' | 'cancel'>('contact');
    const [status, setStatus] = useState<string | null>(null);

    const handleFormSubmit = async (e: React.FormEvent, type: 'Support Request' | 'Cancellation Request') => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        const success = await submitLead({
            ...data,
            source: type
        });

        if (success) {
            setStatus('submitted');
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus('error');
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div style={{ padding: '8rem 0 6rem', background: '#F8FAFC', minHeight: '100vh' }}>
            <SEO
                title="Frayze Support | Local Help for Thunder Bay Local Businesses"
                description="Need help with your Frayze AI agent? Contact our Thunder Bay support team or manage your account settings. We're here to help you succeed."
                canonical="/support"
            />

            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-brand-primary)' }}>Support Center</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)' }}>
                        Local help for Thunder Bay & NWO businesses.
                    </p>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1px' }}>
                    <button
                        onClick={() => { setActiveTab('contact'); setStatus(null); }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === 'contact' ? '2px solid var(--color-brand-primary)' : 'none',
                            color: activeTab === 'contact' ? 'var(--color-brand-primary)' : 'var(--color-text-dim)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        General Support
                    </button>
                    <button
                        onClick={() => { setActiveTab('cancel'); setStatus(null); }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === 'cancel' ? '2px solid #EF4444' : 'none',
                            color: activeTab === 'cancel' ? '#EF4444' : 'var(--color-text-dim)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        Cancel Service
                    </button>
                </div>

                <div className="card" style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    {activeTab === 'contact' ? (
                        <div id="contact-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <MessageSquare style={{ color: 'var(--color-brand-primary)' }} />
                                <h2 style={{ fontSize: '1.5rem' }}>How can we help?</h2>
                            </div>
                            <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem' }}>
                                Have a question about your AI agent or need technical assistance? Fill out the form below and our local team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={(e) => handleFormSubmit(e, 'Support Request')}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <label>
                                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</span>
                                        <input name="name" required placeholder="Your name" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} />
                                    </label>
                                    <label>
                                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</span>
                                        <input name="email" type="email" required placeholder="you@company.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} />
                                    </label>
                                </div>
                                <label style={{ display: 'block', marginBottom: '1.5rem' }}>
                                    <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</span>
                                    <textarea name="message" required rows={4} placeholder="Describe your issue..." style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0', fontFamily: 'inherit' }} />
                                </label>
                                <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', padding: '1rem', background: 'var(--color-brand-primary)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div id="cancel-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <AlertTriangle style={{ color: '#EF4444' }} />
                                <h2 style={{ fontSize: '1.5rem' }}>Cancellation Request</h2>
                            </div>
                            <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem' }}>
                                We're sorry to see you go. As per our 14-day free trial and flexible monthly terms, you can cancel at any time. Please tell us why you're leaving so we can improve.
                            </p>

                            <form onSubmit={(e) => handleFormSubmit(e, 'Cancellation Request')}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <label>
                                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Account Email</span>
                                        <input name="email" type="email" required placeholder="The email used for your account" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} />
                                    </label>
                                    <label>
                                        <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Business Name</span>
                                        <input name="name" required placeholder="Your business name" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0' }} />
                                    </label>
                                </div>
                                <label style={{ display: 'block', marginBottom: '1.5rem' }}>
                                    <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Reason for cancellation</span>
                                    <select name="message" required style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0', background: 'white' }}>
                                        <option value="">Select a reason</option>
                                        <option value="too_expensive">Too expensive / Budget cuts</option>
                                        <option value="too_complex">Too complex to use</option>
                                        <option value="not_enough_leads">Not generating enough leads</option>
                                        <option value="closing_business">Closing the business</option>
                                        <option value="switching_provider">Switching to another provider</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                                <button type="submit" disabled={status === 'sending'} style={{ width: '100%', padding: '1rem', background: '#EF4444', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                                    {status === 'sending' ? 'Processing...' : 'Request Cancellation'}
                                </button>
                            </form>
                        </div>
                    )}

                    {status === 'submitted' && (
                        <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#F0FDF4', color: '#166534', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={32} />
                            <div>
                                <h3 style={{ marginBottom: '0.25rem' }}>Request Received</h3>
                                <p style={{ fontSize: '0.9rem' }}>We've received your request and will process it within 24 hours.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
                        Prefer email? Reach us at <a href="mailto:support@frayze.ca" style={{ color: 'var(--color-brand-primary)' }}>support@frayze.ca</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;
