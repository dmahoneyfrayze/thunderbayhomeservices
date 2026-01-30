import { motion } from 'framer-motion';
import React from 'react';

const tiers = [
  { name: 'Basic', price: '$29/mo', features: ['Up to 50 quotes/month', 'Email support', 'Basic analytics'] },
  { name: 'Pro', price: '$79/mo', features: ['Up to 200 quotes/month', 'Priority email support', 'Advanced analytics', 'Custom templates'] },
  { name: 'Enterprise', price: 'Contact Us', features: ['Unlimited quotes', 'Dedicated support', 'Custom integrations', 'Onboarding assistance'] },
];

const Pricing: React.FC = () => (
  <section id="pricing" style={{ padding: '6rem 0' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pricing Plans</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
          Simple, transparent pricing to grow with your business.
        </p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {tiers.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.name}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{t.price}</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {t.features.map((feat, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{feat}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-solid">Start Free Trial</a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
