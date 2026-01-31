import React, { useState } from 'react';
import { X } from 'lucide-react';
import { submitLead } from '../utils/submitLead';

interface AccountSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    redirectUrl?: string;
    planName?: string;
}

const AccountSetupModal: React.FC<AccountSetupModalProps> = ({ isOpen, onClose, redirectUrl, planName }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        website: '',
        phone: '',
        email: '',
        address1: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        businessType: '' // Still capturing but not strictly requested as * input, can make optional or infer
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Combine names for backward compatibility if needed, or pass separately
        const success = await submitLead({
            name: `${form.firstName} ${form.lastName}`,
            firstName: form.firstName, // Backend doesn't use these explicitly yet but good to pass if we update later
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            companyName: form.companyName,
            website: form.website,
            address1: form.address1,
            city: form.city,
            state: form.state,
            country: form.country,
            postalCode: form.postalCode,
            source: `Sign Up - ${planName || 'Pricing'}`
        });

        if (success) {
            setStatus('success');
            // Short delay to show success before redirecting to payment
            setTimeout(() => {
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                } else {
                    onClose(); // Fallback
                }
            }, 1500);
        } else {
            setStatus('error');
        }
    };

    return (
        <div
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 9999,
                display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem'
            }}
        >
            <div style={{
                backgroundColor: 'white', borderRadius: '12px', width: '100%', maxWidth: '500px',
                maxHeight: '90vh', overflowY: 'auto', position: 'relative', padding: '2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#64748b'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Account Setup</h2>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    {planName ? `Please complete your profile to start your ${planName} trial.` : 'Please complete your profile to continue.'}
                </p>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0', color: '#16a34a' }}>
                        <h3>Success!</h3>
                        <p>Redirecting to secure payment...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                        {/* Name Row */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>First Name*</span>
                                <input name="firstName" required value={form.firstName} onChange={handleChange} style={inputStyle} placeholder="First Name" />
                            </label>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>Last Name*</span>
                                <input name="lastName" required value={form.lastName} onChange={handleChange} style={inputStyle} placeholder="Last Name" />
                            </label>
                        </div>

                        {/* Company & Website */}
                        <label>
                            <span style={labelStyle}>Organization*</span>
                            <input name="companyName" required value={form.companyName} onChange={handleChange} style={inputStyle} placeholder="Company Name" />
                        </label>
                        <label>
                            <span style={labelStyle}>Website*</span>
                            <input name="website" required value={form.website} onChange={handleChange} style={inputStyle} placeholder="e.g. https://yoursite.com" />
                        </label>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>Business Phone*</span>
                                <input name="phone" required value={form.phone} onChange={handleChange} style={inputStyle} placeholder="(555) 123-4567" />
                            </label>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>Email*</span>
                                <input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="you@company.com" />
                            </label>
                        </div>

                        {/* Address Section */}
                        <div style={{ borderTop: '1px solid #e2e8f0', margin: '0.5rem 0' }}></div>
                        <h3 style={{ fontSize: '1rem', color: '#334155', margin: 0 }}>Address</h3>

                        <label>
                            <span style={labelStyle}>Street Address*</span>
                            <input name="address1" required value={form.address1} onChange={handleChange} style={inputStyle} placeholder="123 Main St" />
                        </label>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>City*</span>
                                <input name="city" required value={form.city} onChange={handleChange} style={inputStyle} />
                            </label>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>State/Province*</span>
                                <input name="state" required value={form.state} onChange={handleChange} style={inputStyle} />
                            </label>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>Postal Code*</span>
                                <input name="postalCode" required value={form.postalCode} onChange={handleChange} style={inputStyle} />
                            </label>
                            <label style={{ flex: 1 }}>
                                <span style={labelStyle}>Country*</span>
                                <input name="country" required value={form.country} onChange={handleChange} style={inputStyle} placeholder="Country" />
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                marginTop: '1rem', padding: '0.75rem', borderRadius: '6px', border: 'none',
                                backgroundColor: '#0F172A', color: 'white', fontWeight: 600, cursor: 'pointer',
                                opacity: status === 'sending' ? 0.7 : 1
                            }}
                        >
                            {status === 'sending' ? 'Creating Account...' : 'Continue to Payment'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.85rem', fontWeight: 500, color: '#334155', marginBottom: '0.25rem'
};

const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem'
};

export default AccountSetupModal;
