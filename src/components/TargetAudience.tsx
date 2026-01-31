import React from 'react';
import { Wrench, TreePine, Droplets, Home, BatteryCharging, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const trades = [
    { icon: Droplets, name: "Plumbing", desc: "Automatically separate emergency calls from quote requests." },
    { icon: Home, name: "HVAC & Heating", desc: "Fill your schedule with seasonal tune-ups automatically." },
    { icon: BatteryCharging, name: "Electrical", desc: "Dispatch 24/7 service calls without picking up the phone." },
    { icon: TreePine, name: "Landscaping", desc: "Secure contracts for the busy season while you're on site." },
    { icon: Wrench, name: "General Contractors", desc: "Identify serious renovation projects from tire-kickers instantly." },
    { icon: Truck, name: "Moving & Junk", desc: "Approve quotes instantly based on volume." },
];

const TargetAudience: React.FC = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Who This Is For</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        This product is built for <strong>home service businesses</strong> that rely on calls, quotes, and appointments.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-dim)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
                        Used by contractors across plumbing, HVAC, electrical, landscaping, and more. If you book jobs, our system captures the lead before it’s lost.
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
