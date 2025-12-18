import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { servicesConfig } from '../config/servicesConfig';
import { useSchema } from '../hooks/useSchema';
import SEO from '../components/SEO';
import heroBg from '../assets/images/thunder-bay-hero.jpg';

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
            <section style={{
                padding: '8rem 0 6rem 0',
                textAlign: 'center',
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.95)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}
                    >
                        Find Trusted Home Services<br />in <span className="text-accent">Thunder Bay</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}
                    >
                        The city’s comprehensive home services directory. Compare local providers, explore expert guides, and get up to 3 quotes — without phone calls or pressure.
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

            {/* Platform Positioning (Above Fold Support) */}
            <section style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '4rem' }}>
                <div className="container" style={{ padding: '0 0' }}>
                    <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', lineHeight: 1.7, fontWeight: 500 }}>
                            <strong>Thunder Bay Home Services</strong> is a city-wide platform designed to help homeowners research, compare, and connect with local service providers. From emergency repairs to seasonal maintenance, our goal is to make finding reliable help simple, transparent, and efficient.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Pillars */}
            <section id="services" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Local Service Pillars</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                            Explore Thunder Bay’s most in-demand home services. Each category includes provider comparisons, service guides, and local insights.
                        </p>
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

            {/* Expert Guides Section */}
            <section style={{ padding: '4rem 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Expert Guides for Thunder Bay Homeowners</h2>
                            <p style={{ color: 'var(--color-text-dim)' }}>Research provided by local industry veterans.</p>
                        </div>
                        <Link to="/blog" style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            View all guides <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid">
                        {[
                            { title: "Snow Removal Contracts vs One-Time Plowing", link: "/blog/cost-of-snow-removal-thunder-bay-2024" },
                            { title: "What to Know Before Hiring a Plumber", link: "/blog/emergency-plumbing-tips-thunder-bay" },
                            { title: "How to Prepare Your Home for Winter", link: "/blog/fall-home-maintenance-checklist-northern-ontario" }
                        ].map((guide, idx) => (
                            <Link key={idx} to={guide.link} className="card" style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{guide.title}</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600 }}>Read Guide →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works (Marketplace Clarity) */}
            <section id="how-it-works" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Thunder Bay Home Services Works</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '700px', margin: '0 auto' }}>
                            Our platform is designed to give homeowners clarity and choice. We focus on matching requests based on service type, location, and timing — so providers and homeowners connect efficiently.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "1. Choose a service or explore guides", desc: "Start by researching your problem or selecting the service you need help with." },
                            { title: "2. Submit a request based on needs", desc: "Answer a few quick questions about urgency and project scope." },
                            { title: "3. Compare availability and quotes", desc: "Receive responses from providers who are actually taking new work." }
                        ].map((step, idx) => (
                            <div key={idx} style={{ padding: '2rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#F1F5F9', marginBottom: '1rem' }}>0{idx + 1}</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-brand-primary)' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-text-dim)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Local Authority Layer */}
            <section style={{ background: 'var(--color-brand-primary)', color: 'white', padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Built for Thunder Bay</h2>
                        <p style={{ color: '#E2E8F0', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.8 }}>
                            Thunder Bay Home Services focuses exclusively on local providers serving Thunder Bay and surrounding communities. Our content, comparisons, and service categories are tailored to the region’s climate, housing stock, and seasonal needs.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            {[
                                "Local providers only",
                                "No fees for homeowners",
                                "Transparent comparison process",
                                "Fast response times"
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
                                    <CheckCircle size={20} className="text-accent" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion Reinforcement */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Need help now?</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', marginBottom: '2rem' }}>
                        Submit a single request and compare available home service providers across Thunder Bay — no phone calls required.
                    </p>
                    <Link to="/snow-removal" className="btn-solid">
                        Get Instant Quotes
                    </Link>
                </div>
            </section>

            {/* For Contractors */}
            <section style={{ background: '#F8FAFC', padding: '5rem 0', borderTop: '1px solid #E2E8F0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>For Service Providers</h2>
                    <p style={{ color: 'var(--color-text-dim)', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
                        Thunder Bay Home Services partners with local service providers to connect them with homeowner requests across the city. Our platform is designed to deliver qualified, service-specific inquiries while reducing time spent on advertising and lead follow-up.
                    </p>
                    <Link to="/pro" className="btn-outline">
                        Learn More for Contractors
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
