import { Link } from 'react-router-dom';
import { servicesConfig } from '../config/servicesConfig';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: '#F8FAFC',
            borderTop: '1px solid #E2E8F0',
            marginTop: 'auto',
            paddingTop: '4rem',
            paddingBottom: '2rem'
        }}>
            <div className="container" style={{ padding: '0 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <ShieldCheck size={24} className="text-accent" />
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-brand-primary)' }}>
                                TBAY<span className="text-accent">HOME</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Thunder Bay Home Services is a local platform offering service comparisons, expert guides, and homeowner resources across Thunder Bay. Our mission is to help residents make informed decisions when hiring home service professionals.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                <Phone size={16} /> <span>(807) 555-0123</span>
                            </div>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                <Mail size={16} /> <span>hello@tbayhomeservices.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Popular Services</h4>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                            {servicesConfig.slice(0, 5).map(service => (
                                <li key={service.slug}>
                                    <Link to={`/${service.slug}`} style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Services Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>More Services</h4>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                            {servicesConfig.slice(5).map(service => (
                                <li key={service.slug}>
                                    <Link to={`/${service.slug}`} style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                            <li><Link to="/about" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>About Us</Link></li>
                            <li><Link to="/for-contractors" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>For Contractors</Link></li>
                            <li><Link to="/privacy" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.875rem' }}>
                        © {new Date().getFullYear()} Thunder Bay Home Services. <span style={{ opacity: 0.7 }}>Operated by <a href="https://frayze.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Frayze Technologies Inc.</a></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
