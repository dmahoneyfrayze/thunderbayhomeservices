import { motion } from 'framer-motion';
import React from 'react';
import { MapPin, Zap, Rocket } from 'lucide-react';

const LocalAdvantage: React.FC = () => {
    return (
        <section id="local-advantage" style={{ padding: '6rem 0', background: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Background Accent */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Built for <span style={{ color: 'var(--color-brand-primary)' }}>Thunder Bay</span> & Northwestern Ontario
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                            We aren't just a software company; we are a local partner. Our mission is to democratize enterprise-grade AI for local contractors, helping you compete, scale, and deliver exceptional service right here at home.
                        </p>
                    </motion.div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="card"
                        style={{ border: 'none', background: '#F8FAFC', padding: '2.5rem' }}
                    >
                        <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <MapPin size={28} className="text-accent" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Local Understanding</h3>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                            We understand the unique challenges of the NWO market—seasonality, service areas, and customer expectations. Our AI is tuned for local context.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="card"
                        style={{ border: 'none', background: '#F8FAFC', padding: '2.5rem' }}
                    >
                        <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <Zap size={28} className="text-accent" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instant Modernization</h3>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                            Skip the expensive custom development. Deploy Silicon Valley-level tech on your website in minutes and instantly look more professional than the competition.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="card"
                        style={{ border: 'none', background: '#F8FAFC', padding: '2.5rem' }}
                    >
                        <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <Rocket size={28} className="text-accent" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Future-Proofing</h3>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                            As AI capabilities grow, so does your business. We continuously update our platform with the latest tools (Voice AI, Predictive Analytics) so you stay ahead.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocalAdvantage;
