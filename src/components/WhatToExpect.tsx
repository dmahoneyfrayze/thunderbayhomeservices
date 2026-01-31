import React from 'react';
import { CheckCircle2, TrendingUp, CalendarCheck, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: TrendingUp,
        text: "Capture every website visitor automatically"
    },
    {
        icon: CalendarCheck,
        text: "Book qualified jobs directly to your calendar"
    },
    {
        icon: MessageSquare,
        text: "Answer customer questions instantly, day or night"
    }
];

const WhatToExpect: React.FC = () => {
    return (
        <section className="section-padding" style={{ background: '#F8FAFC' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: '#DBEAFE',
                        color: '#1E40AF',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        marginBottom: '1rem'
                    }}>
                        EARLY ACCESS
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Your First AI Employee (Without the Overhead)</h2>
                </div>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'white',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #E2E8F0'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>What to Expect</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{
                                    flexShrink: 0,
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: '#ECFDF5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircle2 className="text-emerald-600" size={20} color="#059669" />
                                </div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text-main)' }}>{benefit.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
