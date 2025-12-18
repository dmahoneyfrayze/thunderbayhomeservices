import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesConfig } from '../config/servicesConfig';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';

const GetQuote: React.FC = () => {
    return (
        <div className="container" style={{ padding: '8rem 0', minHeight: '80vh', maxWidth: '800px' }}>
            <SEO
                title="Request a Quote | Thunder Bay Home Services"
                description="Select a service to get started with your free quote. We match you with top-rated local professionals in Thunder Bay."
                canonical="https://thunderbayhomeservices.com/get-quote"
            />

            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-brand-primary)' }}>
                    What service do you need?
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)' }}>
                    Select a service below to request a free quote from local professionals.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {servicesConfig.map((service) => (
                    <Link
                        key={service.slug}
                        to={`/${service.slug}#request-quote`}
                        style={{ textDecoration: 'none' }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.01, borderColor: 'var(--color-accent)' }}
                            whileTap={{ scale: 0.99 }}
                            className="card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1.5rem',
                                cursor: 'pointer',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                        >
                            <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-brand-primary)' }}>
                                {service.name}
                            </span>
                            <ArrowRight size={20} className="text-accent" />
                        </motion.div>
                    </Link>
                ))}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--color-text-dim)' }}>
                    Looking for something else? <Link to="/#services" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>View all services</Link>
                </p>
            </div>
        </div>
    );
};

export default GetQuote;
