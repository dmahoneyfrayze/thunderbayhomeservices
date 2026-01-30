import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
    return (
        <footer style={{ background: '#F8FAFC', padding: '4rem 0 2rem', borderTop: '1px solid #E2E8F0', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Brand Column */}
                    <div style={{ maxWidth: '300px' }}>
                        <img src="/images/logo.png" alt="Thunder Bay Home Services" width="180" height="48" style={{ height: '48px', width: 'auto', marginBottom: '1.5rem' }} />
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            The AI quoting and scheduling engine built specifically for Northwestern Ontario contractors.
                        </p>
                    </div>

                    {/* Platform Column */}
                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Platform</h3>
                        <nav className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="/#features" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Features</a>
                            <a href="/#pricing" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Pricing</a>
                            <Link to="/tools" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Lead Gen Tools</Link>
                            <a href="https://app.frayze.ca/login" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Login</a>
                        </nav>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Company</h3>
                        <nav className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="/#how-it-works" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>About Us</a>
                            <Link to="/blog" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Blog</Link>
                            <a href="https://frayze.ca/resources/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Growth Guides</a>
                            <a href="https://thunderbayai.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>NWO AI Insights</a>
                            <Link to="/support" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Support</Link>
                        </nav>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Legal</h3>
                        <nav className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="https://frayze.ca/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Privacy Policy</a>
                            <a href="https://frayze.ca/terms" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Terms of Service</a>
                            <Link to="/support#cancel-section" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Cancellations</Link>
                            <Link to="/setup" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>New Customer Setup</Link>
                        </nav>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '2rem', textAlign: 'center', color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Frayze Technologies Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
