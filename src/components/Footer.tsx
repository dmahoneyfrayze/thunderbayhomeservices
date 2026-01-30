import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
    // Helper to scroll to hash if on same page
    const scrollToHash = (hash: string) => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{
            background: '#F8FAFC',
            borderTop: '1px solid #E2E8F0',
            marginTop: 'auto',
            paddingTop: '4rem',
            paddingBottom: '2rem'
        }}>
            <div style={{ width: '100%', maxWidth: '100%', padding: '0 5%', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <img src={logo} alt="Frayze Home-Services" style={{ height: '80px', width: 'auto' }} />
                        </Link>
                        <p className="mission" style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Thunder Bay Home Services partners with local contractors, providing AI tools to capture and convert more leads.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                Contact us:
                            </div>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                <Mail size={16} /> <span>hello@thunderbayhomeservices.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Navigate</h4>
                        <nav className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#how-it-works" onClick={() => scrollToHash('#how-it-works')} style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>How It Works</a>
                            <a href="#features" onClick={() => scrollToHash('#features')} style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Features</a>
                            <a href="#pricing" onClick={() => scrollToHash('#pricing')} style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Pricing</a>
                            <Link to="/resources" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Resources Hub</Link>
                        </nav>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Legal</h4>
                        <nav className="footer-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/privacy" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Privacy Policy</Link>
                            <Link to="/terms" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>Terms of Service</Link>
                        </nav>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.875rem' }}>
                        © 2026 Thunder Bay Home Services (Frayze AI). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
