import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle, Mail } from 'lucide-react';

const Setup: React.FC = () => {
    return (
        <div className="setup-page" style={{ paddingTop: '6rem', minHeight: '80vh', background: '#F8FAFC' }}>
            <SEO
                title="Welcome to Frayze | Account Setup"
                description="Welcome to Frayze. Follow these steps to get your AI up and running."
            />

            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ width: '80px', height: '80px', background: '#DCFCE7', borderRadius: '50%', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                        <CheckCircle size={40} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-brand-primary)' }}>Payment Successful!</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)' }}>
                        Welcome to the Frayze family. Let's get your AI automated and booking leads.
                    </p>
                </div>

                <div className="card" style={{ padding: '3rem', background: 'white' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ minWidth: '50px', height: '50px', background: 'var(--color-brand-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1.25rem' }}>1</div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Check Your Email</h3>
                            <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                                We've sent your login credentials to the email address you provided. Look for a subject line: <strong>"Your Frayze Access"</strong>.
                            </p>
                            <div style={{ marginTop: '1rem', padding: '1rem', background: '#F1F5F9', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <Mail size={18} /> Don't see it? Check spam or <a href="mailto:support@frayze.ca" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>contact support</a>.
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ minWidth: '50px', height: '50px', background: 'var(--color-brand-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1.25rem' }}>2</div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Log In to Dashboard</h3>
                            <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                                Click the link in the email to access your new dashboard. From there, the "Get Started" wizard will guide you through customizing your bot.
                            </p>
                            <a href="https://app.frayze.ca/login" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '6px', textDecoration: 'none', color: 'white' }}>
                                Go to Dashboard
                            </a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ minWidth: '50px', height: '50px', background: 'var(--color-brand-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1.25rem' }}>3</div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Get Started</h3>
                            <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6, marginBottom: '1rem' }}>
                                Once you're signed in, follow the simple onboarding guide to connect your accounts and start automating.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setup;
