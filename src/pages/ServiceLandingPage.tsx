import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesConfig, type ServiceConfig } from '../config/servicesConfig';
import { useSchema } from '../hooks/useSchema';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const ServiceLandingPage: React.FC = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const [submitted, setSubmitted] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const service: ServiceConfig | undefined = servicesConfig.find(s => s.slug === serviceSlug);

    // Topic Clustering: Find related services
    const relatedServices = service ? servicesConfig.filter(s => service.relatedSlugs.includes(s.slug)) : [];

    // Structured Data (Schema.org) - Safely constructed
    const schemas = service ? [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': `${service.name} in Thunder Bay`,
            'description': service.subheadline,
            'provider': {
                '@type': 'LocalBusiness',
                'name': 'Thunder Bay Home Services',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Thunder Bay',
                    'addressRegion': 'ON',
                    'addressCountry': 'CA'
                }
            },
            'areaServed': {
                '@type': 'City',
                'name': 'Thunder Bay'
            }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': service.faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.answer
                }
            }))
        }
    ] : [];

    useSchema(schemas);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    if (submitted) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '10rem 0' }}>
                <SEO
                    title="Request Received | Thunder Bay Home Services"
                    description="Thank you for your request. We are matching you with local pros."
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card"
                    style={{ maxWidth: '500px', margin: '0 auto', padding: '4rem 2rem' }}
                >
                    <CheckCircle size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
                    <h2 style={{ marginBottom: '1rem' }}>Thanks — your request has been received.</h2>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem' }}>
                        We’re matching you with available {service.name.toLowerCase()} providers in Thunder Bay.
                        Expect a response shortly.
                    </p>
                    <div style={{ marginTop: '2.5rem' }}>
                        <Link to="/" className="btn-outline">Back to home</Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="service-page" style={{ paddingBottom: '5rem' }}>
            <SEO
                title={`${service.name} Thunder Bay | Verified Local Pros`}
                description={`Get quotes for ${service.name} in Thunder Bay. ${service.subheadline}. Verified experts, fast response.`}
                canonical={`https://thunderbayhomeservices.com/${service.slug}`}
            />

            {/* 1. New Premium Hero with Image & Overlay */}
            <section style={{
                position: 'relative',
                color: 'white',
                backgroundImage: `url(${service.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 0 6rem 0'
            }}>
                {/* Dark Overlay for Readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9))',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, padding: 0, textAlign: 'center' }}>

                    {/* Live Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            padding: '8px 16px',
                            borderRadius: '50px',
                            marginBottom: '2rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: '#4ade80' // Light green
                        }}
                    >
                        <span className="animate-pulse-green" style={{ width: '8px', height: '8px', display: 'block' }}></span>
                        3 Providers Available in Thunder Bay Today
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
                    >
                        {service.name} Services in Thunder Bay
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        style={{ fontSize: '1.4rem', color: '#E2E8F0', marginBottom: 0, fontWeight: 400, maxWidth: '700px', margin: '0 auto' }}
                    >
                        The Gold Standard for Local {service.name} Quotes
                    </motion.p>
                </div>
            </section>

            <Breadcrumbs />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '4rem', alignItems: 'start', padding: '2rem 0 4rem 0' }}>

                {/* Authority Content Column */}
                <div>
                    {/* 2. Intro: Neutral & Informational */}
                    <div style={{ marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-dim)', lineHeight: 1.8 }}>
                            {service.intro}
                        </p>
                    </div>

                    {/* 3. H2: Sub-Intent Coverage */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Specialized {service.name} Solutions</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {service.subServices.map((sub: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-2"
                                    style={{ fontWeight: 600, padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}
                                >
                                    <CheckCircle size={18} className="text-accent" /> {sub}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. H2: How It Works (Platform Authority) */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How Thunder Bay Home Services Works</h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                { title: "Submit Your Request", desc: "Tell us about your project or urgency. It takes less than 60 seconds." },
                                { title: "Get Matched with available Pros", desc: "We route your request to local providers who are currently taking new jobs." },
                                { title: "Compare & Choose", desc: "Receive up to 3 quotes. You decide which professional fits your needs." }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex gap-2"
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <div style={{ background: 'var(--color-brand-primary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, fontSize: '0.8rem' }}>{idx + 1}</div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{step.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 7. H2: FAQs (Topical Authority) */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {service.faqs.map((faq, idx: number) => (
                                <div key={idx} className="card" style={{ padding: '1.25rem', cursor: 'pointer' }} onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
                                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                                        <div className="flex gap-2" style={{ fontWeight: 700, fontSize: '1rem' }}>
                                            <HelpCircle size={18} className="text-accent" /> {faq.question}
                                        </div>
                                        {expandedFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                    <AnimatePresence>
                                        {expandedFaq === idx && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                style={{ marginTop: '1rem', color: 'var(--color-text-dim)', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '1.75rem', overflow: 'hidden' }}
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 6. H2: Local Proof (Neighborhood Signals) */}
                    <div style={{ marginBottom: '4rem', padding: '2rem', background: '#F8FAFC', borderRadius: '12px' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Serving All Communities in Thunder Bay</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>
                            We have authorized providers across the entire city and surrounding areas:
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {service.neighborhoods.map((n: string) => (
                                <span key={n} className="badge" style={{ background: 'white', border: '1px solid #E2E8F0' }}>{n}</span>
                            ))}
                            <span className="badge" style={{ background: 'white', border: '1px solid #E2E8F0' }}>& surrounding areas</span>
                        </div>
                    </div>

                    {/* Internal Section Linking (Topic Clustering) */}
                    {relatedServices.length > 0 && (
                        <div style={{ paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-dim)', marginBottom: '1rem' }}>Related Local Services:</p>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                {relatedServices.map((rs) => (
                                    <Link key={rs.slug} to={`/${rs.slug}`} style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-brand-primary)', textDecoration: 'underline' }}>
                                        {rs.name} in Thunder Bay
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Quote Form Sticky Box - Lifted up to overlap Hero slightly for depth */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ position: 'sticky', top: '20px', marginTop: '-6rem', zIndex: 10 }}
                >
                    <div className="card" style={{ padding: '2rem', boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.15)', borderTop: '4px solid var(--color-accent)' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Get {service.name} Quotes</h2>
                        <form
                            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                            style={{ display: 'grid', gap: '1.25rem' }}
                        >
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Full Name</label>
                                <input required type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Phone Number</label>
                                <input required type="tel" placeholder="807-555-0123" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Property Address</label>
                                <input required type="text" placeholder="Address, Thunder Bay" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Service Type</label>
                                    <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', background: 'white' }}>
                                        {service.serviceTypes.map((type: string, idx: number) => (
                                            <option key={idx}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Urgency</label>
                                    <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', background: 'white' }}>
                                        {service.urgencyOptions.map((opt: string, idx: number) => (
                                            <option key={idx}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <input required type="checkbox" id="consent" style={{ marginTop: '0.25rem' }} />
                                <label htmlFor="consent" style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', lineHeight: 1.4 }}>
                                    I agree to be contacted via phone or SMS by up to 3 local providers regarding my request.
                                </label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn-solid"
                                style={{ width: '100%', marginTop: '0.5rem' }}
                            >
                                Send My Request
                            </motion.button>

                            <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--color-text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                <ShieldCheck size={12} /> Secure data transfer. No spam.
                            </p>
                        </form>
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link to="/" style={{ fontSize: '0.875rem', color: 'var(--color-text-dim)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Browse other city services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceLandingPage;
