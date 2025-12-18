import { motion } from 'framer-motion';
import { ShieldCheck, Users, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
    return (
        <div className="about-page" style={{ paddingBottom: '5rem' }}>
            <SEO
                title="About Us | Thunder Bay Home Services"
                description="Thunder Bay's authorized directory for verified home service professionals. Connecting neighbors with trusted local experts since 2024."
                canonical="https://thunderbayhomeservices.com/about"
            />

            {/* Hero */}
            <section style={{ padding: '6rem 0 4rem 0', background: 'var(--color-brand-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                    >
                        Connecting Thunder Bay Neighbors<br />with Trusted Pros
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: '#E2E8F0' }}>
                        We are on a mission to simplify home maintenance in Northern Ontario by creating a verified network of local experts.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="container" style={{ padding: '5rem 0' }}>
                <div className="grid">
                    <div className="card" style={{ padding: '2rem' }}>
                        <ShieldCheck size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Verified Insurance</h3>
                        <p style={{ color: 'var(--color-text-dim)' }}>We verify that every provider in our network carries active liability insurance to protect your home.</p>
                    </div>
                    <div className="card" style={{ padding: '2rem' }}>
                        <Users size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Local Quality</h3>
                        <p style={{ color: 'var(--color-text-dim)' }}>We only work with Thunder Bay and area locals. No faceless national franchises without local roots.</p>
                    </div>
                    <div className="card" style={{ padding: '2rem' }}>
                        <MapPin size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Community First</h3>
                        <p style={{ color: 'var(--color-text-dim)' }}>From Port Arthur to Westfort, we understand the specific needs of Thunder Bay homes and weather.</p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section style={{ background: '#F8FAFC', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Our Standard</h2>
                        <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-dim)' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Finding a reliable contractor shouldn't be a gamble. In Thunder Bay, word-of-mouth used to be the only way to find someone decent. But what happens when your neighbor's "guy" is booked up for 3 months?
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We built <strong>Thunder Bay Home Services</strong> to bridge the gap. We do the vetting upfront—checking insurance, references, and local reputation—so you don't have to.
                            </p>
                            <p>
                                When you submit a request through our platform, you aren't shouting into the void. You are connecting directly with a pre-screened professional who is currently looking for work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operator Section */}
            <section style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid #E2E8F0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#64748B' }}>About the Operator</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        Thunder Bay Home Services is a local platform that helps homeowners research, compare, and request home services across Thunder Bay. The platform connects residents with available local service providers for snow removal, plumbing, HVAC, electrical, cleaning, landscaping, moving, painting, and roofing services.
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '1rem' }}>
                        Operated by Frayze Technologies Inc.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
