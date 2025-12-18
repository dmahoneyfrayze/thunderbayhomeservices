import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, DollarSign, CheckCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesConfig, type ServiceConfig } from '../config/servicesConfig';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const CostGuidePage: React.FC = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const service: ServiceConfig | undefined = servicesConfig.find(s => s.slug === serviceSlug);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    const { costInfo } = service;

    return (
        <div className="cost-guide-page" style={{ paddingBottom: '6rem' }}>
            <SEO
                title={`How Much Does ${service.name} Cost in Thunder Bay? (2025 Guide)`}
                description={`Updated 2025 Pricing Guide for ${service.name} in Thunder Bay. Average costs: ${costInfo.averageCost}. See price tables and factors affecting your quote.`}
                canonical={`https://thunderbayhomeservices.com/cost/${service.slug}`}
            />

            <Breadcrumbs />

            <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* HEADER */}
                <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                    <span style={{
                        background: '#EFF6FF',
                        color: '#2563EB',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>
                        2025 PRICING GUIDE
                    </span>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: '#0F172A' }}>
                        How Much Does <span className="text-accent">{service.name}</span> Cost in Thunder Bay?
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
                        A transparent look at local pricing, factors that influence your quote, and what to expect when hiring a pro.
                    </p>
                </div>

                {/* AVERAGE COST CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'linear-gradient(135deg, #0F172A, #1E293B)',
                        borderRadius: '1.5rem',
                        padding: '3rem',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <div style={{ background: 'rgba(255,255,255,0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                        <DollarSign size={32} color="#60A5FA" />
                    </div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94A3B8', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Average Price Range</h2>
                    <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
                        {costInfo.averageCost}
                    </div>
                    <p style={{ color: '#CBD5E1', fontSize: '1.1rem' }}>
                        Typical range for standard residential projects in Thunder Bay.
                    </p>
                </motion.div>

                {/* PRICE TABLE */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#0F172A' }}>Common {service.name} Prices</h2>
                    <div style={{ border: '1px solid #E2E8F0', borderRadius: '1rem', overflow: 'hidden' }}>
                        {costInfo.priceTable.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '1.5rem',
                                background: idx % 2 === 0 ? 'white' : '#F8FAFC',
                                borderBottom: idx !== costInfo.priceTable.length - 1 ? '1px solid #E2E8F0' : 'none',
                                alignItems: 'center'
                            }}>
                                <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#334155' }}>{item.label}</span>
                                <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#0F172A' }}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#64748B', background: '#FFF7ED', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #FFEDD5' }}>
                        <Info size={20} className="text-orange-500" style={{ flexShrink: 0 }} />
                        <p><strong>Note:</strong> {costInfo.disclaimer}</p>
                    </div>
                </div>

                {/* COST FACTORS */}
                <div style={{ marginBottom: '5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>What Affects Your Quote?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {costInfo.factors.map((factor, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '1rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <CheckCircle size={24} className="text-secondary" />
                                <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#334155' }}>{factor}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div style={{ background: 'var(--color-brand-primary)', padding: '4rem 2rem', borderRadius: '1.5rem', textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Stop Guessing. Get an Exact Quote.</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#DBEAFE', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Connect with top-rated Thunder Bay {service.name.toLowerCase()} providers and compare up to 3 specific quotes for your project.
                    </p>
                    <Link
                        to={`/${service.slug}`}
                        className="btn-solid"
                        style={{
                            background: 'white',
                            color: 'var(--color-brand-primary)',
                            fontSize: '1.25rem',
                            padding: '1.25rem 3rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}
                    >
                        Get Free Quotes <ArrowRight size={24} />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CostGuidePage;
