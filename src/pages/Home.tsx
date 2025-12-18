import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { servicesConfig } from '../config/servicesConfig';
import { useSchema } from '../hooks/useSchema';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const location = useLocation();

    // Handle hash scrolling
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
            <SEO
                title="Thunder Bay Home Services | Local Quotes"
                description="Find vetted local professionals for snow removal, plumbing, HVAC, and electrical work in Thunder Bay. Get 3 free quotes instantly."
                canonical="https://thunderbayhomeservices.com"
            />

            {/* Hero Section */}
            <section style={{ padding: '6rem 0 4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
                    >
                        Find Trusted Home Services<br />in <span className="text-accent">Thunder Bay</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}
                    >
                        The city’s authorized directory. Compare local providers.<br />
                        Get up to 3 quotes. No phone calls required.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/snow-removal" className="btn-solid" style={{ boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)' }}>
                            Get 3 Quotes Instantly
                        </Link>
                        <a href="#services" className="btn-outline">
                            Browse Services →
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Service Selector Grid */}
            <section id="services" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Our Local Pillars</h2>
                        <p style={{ color: 'var(--color-text-dim)' }}>Select a service to see available pros in your neighborhood.</p>
                    </div>

                    <div className="grid">
                        {servicesConfig.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/${service.slug}`}
                                    className="card"
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span className="text-accent" style={{ fontSize: '1.5rem' }}>{service.icon}</span>
                                        <div style={{ textAlign: 'left' }}>
                                            <span style={{ fontWeight: 700, display: 'block', fontSize: '1.1rem' }}>{service.name}</span>
                                            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>{service.serviceTypes.slice(0, 2).join(', ')}...</span>
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-accent" style={{ opacity: 0.7 }} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Layer */}
            <section id="how-it-works" style={{ background: '#F8FAFC', padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>The Authorized Thunder Bay Source</h2>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            We connect homeowners with vetted, local service providers across Thunder Bay.
                            No obligation. No spam. No pressure.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                            {[
                                "Local providers only",
                                "No fees for homeowners",
                                "Fast response times",
                                "Verified Insurance"
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-2" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-brand-primary)' }}>
                                    <CheckCircle size={20} className="text-accent" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card"
                    style={{ background: 'var(--color-brand-primary)', color: 'white', maxWidth: '800px', margin: '0 auto', border: 'none' }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Need help now?</h3>
                    <p style={{ color: '#E2E8F0', marginBottom: '2rem', fontSize: '1.1rem' }}>Get matched with service experts in minutes.</p>
                    <Link to="/snow-removal" className="btn-solid" style={{ background: 'white', color: 'var(--color-brand-primary)' }}>
                        Get Instant Quotes
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
