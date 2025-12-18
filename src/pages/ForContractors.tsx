import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ForContractors: React.FC = () => {
    return (
        <div className="pro-page" style={{ paddingBottom: '5rem' }}>
            <SEO
                title="Join Our Network | For Thunder Bay Contractors"
                description="Get pre-qualified leads for your home service business. Join Thunder Bay's most trusted network of local professionals."
                canonical="https://thunderbayhomeservices.com/pro"
            />

            {/* Hero */}
            <section style={{ padding: '6rem 0 4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ display: 'inline-block', padding: '4px 12px', background: '#F1F5F9', color: 'var(--color-text-dim)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Partner Program
                    </span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Stop Chasing Leads.<br />Let Them Come to You.
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem', color: 'var(--color-text-dim)' }}>
                        Join Thunder Bay’s growing network of elite service providers. We send you pre-qualified job requests from homeowners ready to hire.
                    </p>
                    <Link to="/" className="btn-solid">
                        Apply to Join Network
                    </Link>
                </div>
            </section>

            {/* Benefits */}
            <section style={{ background: '#F8FAFC', padding: '5rem 0' }}>
                <div className="container">
                    <div className="grid">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Partner With Us?</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', marginBottom: '2rem' }}>
                                We aren't a typical lead-gen site. We are a local brand that homeowners trust. When you receive a request from us, it comes with that stamp of approval.
                            </p>
                            <ul style={{ display: 'grid', gap: '1rem' }}>
                                {[
                                    "No 'tire-kicker' leads — verified intent only",
                                    "Exclusive territories available",
                                    "We handle the SEO and marketing spend",
                                    "Simple pay-per-performance model"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-2" style={{ fontWeight: 600 }}>
                                        <CheckCircle size={20} className="text-accent" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card" style={{ padding: '2.5rem', borderTop: '4px solid var(--color-brand-primary)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Provider Requirements</h3>
                            <ul style={{ display: 'grid', gap: '1rem', color: 'var(--color-text-dim)' }}>
                                <li className="flex gap-2"><ArrowRight size={16} /> Must be licensed in Ontario</li>
                                <li className="flex gap-2"><ArrowRight size={16} /> $2M Liability Insurance (Minimum)</li>
                                <li className="flex gap-2"><ArrowRight size={16} /> 3+ Years of Local Experience</li>
                                <li className="flex gap-2"><ArrowRight size={16} /> Clean Legal Track Record</li>
                            </ul>
                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0', textAlign: 'center' }}>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Meet the criteria?</p>
                                <a href="mailto:partners@tbayhomeservices.com" className="btn-outline" style={{ width: '100%', display: 'inline-block' }}>
                                    Email Partner Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForContractors;
