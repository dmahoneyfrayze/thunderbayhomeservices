import { Link } from 'react-router-dom';
import { Mail, Facebook } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
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
                            <img src={logo} alt="Frayze Home-Services" style={{ height: '120px', width: 'auto' }} />
                        </Link>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Frayze Home-Services SaaS empowers businesses with a self-deploy lead generation and quoting engine—24/7, AI-powered, no coding required.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                Questions? Contact us:
                            </div>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                <Mail size={16} /> <span>support@thunderbayhomeservices.com</span>
                            </div>
                            <a href="https://www.facebook.com/tbayhomeservices/" target="_blank" rel="noopener noreferrer" className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', textDecoration: 'none', alignItems: 'center' }}>
                                <Facebook size={16} /> <span>Follow us</span>
                            </a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                            <li><Link to="/resources" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>Resources</Link></li>
                            <li><Link to="/privacy" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.875rem' }}>
                        © {new Date().getFullYear()} Frayze Home-Services SaaS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
