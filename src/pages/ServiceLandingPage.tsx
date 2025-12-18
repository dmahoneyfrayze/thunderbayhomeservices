import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
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

    // Structured Data (Schema.org)
    const schemas = service ? [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': service.name,
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
                title={`${service.name} Services in Thunder Bay | Compare Local Providers`}
                description={`Compare local ${service.name.toLowerCase()} providers in Thunder Bay. Explore service types, read expert guidance, and request up to 3 quotes from available professionals.`}
                canonical={`https://thunderbayhomeservices.com/${service.slug}`}
            />

            {/* H1 - Primary Entity - Locked Structure */}
            <section style={{
                position: 'relative',
                color: 'white',
                backgroundImage: `url(${service.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 0 6rem 0'
            }}>
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
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', textShadow: '0 4px 10px rgba(0,0,0,0.3)', lineHeight: 1.2 }}
                    >
                        {service.name} Services<br />in Thunder Bay
                    </motion.h1>
                    <p style={{ fontSize: '1.4rem', color: '#E2E8F0', marginBottom: 0, fontWeight: 400, maxWidth: '700px', margin: '0 auto' }}>
                        {service.subheadline}
                    </p>
                </div>
            </section>

            <Breadcrumbs />

            <div className="container service-page-grid">

                {/* Left Column: Authority Content */}
                <div>

                    {/* SECTION 1: NEUTRAL INTRO */}
                    <div style={{ marginBottom: '4rem' }}>
                        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', lineHeight: 1.8 }}>
                            {service.intro}
                        </p>
                    </div>

                    {/* SECTION 2: SERVICE TYPES */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-brand-primary)' }}>Types of {service.name} Available in Thunder Bay</h2>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {service.typesData.map((type, idx) => (
                                <div key={idx}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{type.title}</h3>
                                    <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 3: WHEN TO REQUEST */}
                    <div style={{ marginBottom: '4rem', background: '#F8FAFC', padding: '2rem', borderRadius: '12px' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{service.whenToRequest.title}</h2>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>{service.whenToRequest.description}</p>
                        <ul style={{ display: 'grid', gap: '0.75rem', paddingLeft: '1.5rem' }}>
                            {service.whenToRequest.bullets?.map((bullet, idx) => (
                                <li key={idx} style={{ color: 'var(--color-text-dim)', fontSize: '1rem' }}>{bullet}</li>
                            ))}
                        </ul>
                    </div>

                    {/* SECTION 4: HOW THE PLATFORM WORKS */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How Thunder Bay Home Services Works</h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                "Submit a request based on your service needs",
                                "We match your request with available local providers",
                                "Compare quotes or availability and choose how to proceed"
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <div style={{ background: 'var(--color-brand-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700 }}>{idx + 1}</div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{step}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: '1.5rem', color: 'var(--color-text-dim)', fontStyle: 'italic' }}>
                            Our platform is designed to give homeowners clarity and choice without requiring phone calls or repeated outreach. <br /><strong>Requests are shared only with providers who service your area and availability window.</strong>
                        </p>
                    </div>

                    {/* SECTION 5: WHY COMPARE */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Compare {service.name} Providers?</h2>
                        <ul style={{ display: 'grid', gap: '0.75rem', paddingLeft: '1.5rem' }}>
                            {service.whyCompare.map((item, idx) => (
                                <li key={idx} style={{ color: 'var(--color-text-dim)', fontSize: '1.05rem' }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* SECTION 6: LOCAL SIGNALS */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{service.name} Across Thunder Bay Neighborhoods</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-text-dim)' }}>
                            Local providers on our platform serve neighborhoods across Thunder Bay, including <strong>{service.neighborhoods.join(', ')},</strong> and surrounding areas, including residential and commercial properties across the city.
                        </p>
                    </div>

                    {/* FAQs */}
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

                    {/* SECTION 7: RELATED SERVICES */}
                    {relatedServices.length > 0 && (
                        <div style={{ paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Related Home Services</h2>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-dim)' }}>
                                Homeowners often request {service.name.toLowerCase()} alongside other services such as:
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                {relatedServices.map((rs) => (
                                    <Link key={rs.slug} to={`/${rs.slug}`} style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-brand-primary)', textDecoration: 'underline' }}>
                                        {rs.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <motion.div
                    id="request-quote"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="sticky-sidebar-wrapper"
                >
                    <div className="card" style={{ padding: '2rem', boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.15)', borderTop: '4px solid var(--color-accent)' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Get {service.name} Quotes</h2>
                        <form
                            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                            style={{ display: 'grid', gap: '1.25rem' }}
                        >
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Full Name</label>
                                <input required type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '16px' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Phone Number</label>
                                <input required type="tel" placeholder="Your phone number" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '16px' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Property Address</label>
                                <input required type="text" placeholder="Address, Thunder Bay" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '16px' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Service Type</label>
                                    <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', background: 'white', fontSize: '16px' }}>
                                        {service.serviceTypes.map((type: string, idx: number) => (
                                            <option key={idx}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Urgency (optional)</label>
                                    <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: '6px', background: 'white', fontSize: '16px' }}>
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
                                Get {service.name} Quotes
                            </motion.button>

                            <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--color-text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                <ShieldCheck size={12} /> Secure data transfer. No spam.
                            </p>
                        </form>
                    </div>

                    {/* SECTION 8: CTA (Small Mobile / Desktop) */}
                    <div className="hidden-desktop" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Ready to get started?</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>Submit a single request to compare available {service.name} providers in Thunder Bay.</p>
                    </div>
                </motion.div>
                {/* Mobile Sticky CTA */}
                <div className="hidden-desktop" style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'white',
                    borderTop: '1px solid #E2E8F0',
                    zIndex: 50,
                    boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                    <button
                        onClick={() => document.getElementById('request-quote')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-solid"
                        style={{ width: '100%', borderRadius: '12px', padding: '1rem', fontSize: '1.1rem', boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)' }}
                    >
                        Request {service.name} Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceLandingPage;
