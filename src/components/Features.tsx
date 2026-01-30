import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const features = [
  { title: 'AI-Powered Estimates', description: 'Generate accurate quotes in seconds using advanced machine learning algorithms.' },
  { title: 'Customizable Templates', description: 'Tailor quotes to match your brand and service offerings.' },
  { title: 'Real-Time Analytics', description: 'Gain insights into quoting performance and customer engagement.' },
  { title: 'Seamless Integrations', description: 'Connect easily with your CRM, accounting, and scheduling tools.' },
];

const Features: React.FC = () => (
  <section id="features" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Key Features</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
          Everything you need to streamline and scale your home services business.
        </p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}
          >
            <CheckCircle size={24} className="text-accent" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.title}</h3>
            <p style={{ color: 'var(--color-text-dim)' }}>{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
