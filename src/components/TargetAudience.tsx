import React from 'react';
import { Wrench, TreePine, Droplets, Home, BatteryCharging, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const trades = [
    { icon: Droplets, name: "Plumbing", desc: "Qualify emergency leaks vs. renovations instantly." },
    { icon: Home, name: "HVAC & Heating", desc: "Book seasonal tune-ups automatically." },
    { icon: BatteryCharging, name: "Electrical", desc: "Schedule service calls 24/7 without answering the phone." },
    { icon: TreePine, name: "Landscaping", desc: "Capture leads during projected busy seasons effortlessly." },
    { icon: Wrench, name: "General Contractors", desc: "Filter tire-kickers from serious renovation projects." },
    { icon: Truck, name: "Moving & Junk", desc: "Give instant standardized quotes based on volume." },
];

const TargetAudience: React.FC = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Who is Frayze For?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        We are built for <strong>growth-minded</strong> home service business owners in Thunder Bay who want to scale their operations but hate the administrative busywork.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {trades.map((trade, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '2rem',
                                border: '1px solid #E2E8F0',
                                borderRadius: '12px',
                                textAlign: 'center',
                                background: '#fff',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--color-bg-secondary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: 'var(--color-brand-primary)'
                            }}>
                                <trade.icon size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{trade.name}</h3>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>{trade.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
