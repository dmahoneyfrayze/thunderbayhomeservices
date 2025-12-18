import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesConfig } from '../config/servicesConfig';
import { useSchema } from '../hooks/useSchema';

const Home: React.FC = () => {
    useSchema({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Thunder Bay Home Services',
        'description': 'Trusted directory for home services in Thunder Bay. Compare local providers for snow removal, plumbing, HVAC, and more.',
        'url': 'https://thunderbayhomeservices.com',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Thunder Bay',
            'addressRegion': 'ON',
            'addressCountry': 'CA'
        }
    });

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{ padding: '5rem 0 3rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Find Trusted Home Services in Thunder Bay
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Compare local providers. Get up to 3 quotes. <br />No phone calls required.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Link to="/snow-removal" className="btn-solid">
                            Get 3 Quotes Instantly
                        </Link>
                        <a href="#services" className="btn-outline">
                            Browse Services →
                        </a>
                    </div>
                </div>
            </section>

            {/* Service Selector Grid */}
            <section id="services" className="container">
                <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Our Local Pillars</h2>
                <div className="grid">
                    {servicesConfig.map((service) => (
                        <Link
                            key={service.id}
                            to={`/${service.slug}`}
                            className="card"
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span className="text-accent">{service.icon}</span>
                                <span style={{ fontWeight: 700 }}>{service.name}</span>
                            </div>
                            <ArrowRight size={16} className="text-accent" />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Trust Layer */}
            <section style={{ background: '#F8FAFC', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>The Authorized Thunder Bay Source</h2>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                            We connect homeowners with vetted, local service providers across Thunder Bay.
                            No obligation. No spam. No pressure.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                                <CheckCircle size={18} className="text-accent" /> Local providers only
                            </div>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                                <CheckCircle size={18} className="text-accent" /> No fees for homeowners
                            </div>
                            <div className="flex gap-2" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                                <CheckCircle size={18} className="text-accent" /> Fast response times
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Need help now?</h3>
                <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem' }}>Get matched with service experts in minutes.</p>
                <Link to="/snow-removal" className="btn-solid">
                    Get Instant Quotes
                </Link>
            </section>
        </div>
    );
};

export default Home;
