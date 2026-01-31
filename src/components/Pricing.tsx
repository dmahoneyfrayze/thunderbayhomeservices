
import React, { useState } from 'react';
import { submitLead } from '../utils/submitLead';
import AccountSetupModal from './AccountSetupModal';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [selectedPlanLink, setSelectedPlanLink] = useState('');
  const [selectedPlanName, setSelectedPlanName] = useState('');

  const handleStartTrial = (link: string, name: string) => {
    setSelectedPlanLink(link);
    setSelectedPlanName(name);
    setShowSetupModal(true);
  };

  const plans = {
    starter: {
      name: 'Starter',
      monthly: 29,
      annual: 299,
      monthlyLink: 'https://link.thunderbayhomeservices.com/payment-link/697c671f3533388501bad331',
      annualLink: 'https://link.thunderbayhomeservices.com/payment-link/697c671f3533388501bad331',
      features: ['Designed for up to 50 leads/mo', 'Email notifications only', '1 User Account', 'Basic analytics']
    },
    basic: {
      name: 'Basic',
      monthly: 79,
      annual: 799,
      monthlyLink: 'https://link.thunderbayhomeservices.com/payment-link/697c676358b49c90adab4b08',
      annualLink: 'https://link.thunderbayhomeservices.com/payment-link/697c676358b49c90adab4b08',
      features: ['Designed for up to 200 leads/mo', 'Email & SMS notifications', '1 User Account', 'Priority email support'],
      isPopular: true
    },
    pro: {
      name: 'Pro',
      monthly: 149,
      annual: 1499,
      monthlyLink: 'https://link.thunderbayhomeservices.com/payment-link/697c67826503ca3744797572',
      annualLink: 'https://link.thunderbayhomeservices.com/payment-link/697c67826503ca3744797572',
      features: ['Unlimited leads', 'Email & SMS notifications', '3 User Accounts', 'Priority Support']
    }
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-block',
            background: '#FEF3C7',
            color: '#92400E', // Darker amber for WCAG AA contrast
            padding: '0.5rem 1rem',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            🚀 Launching Soon
          </div>

          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>One Core Product — Scales With You</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
            Choose the plan that fits your current volume. Upgrade or downgrade anytime.
          </p>

          {/* Quick Join Waitlist */}
          <div style={{ maxWidth: '400px', width: '95%', margin: '2rem auto', background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', border: '1px solid #E2E8F0' }}>
            {/* Changed from h4 to h3 for correct heading hierarchy */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Get Early Access</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>Join the waitlist to get notified when we launch.</p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const btn = form.querySelector('button');

                if (btn) {
                  btn.disabled = true;
                  btn.innerText = 'Joining...';
                }

                const success = await submitLead({
                  email,
                  source: 'Waitlist',
                  name: 'Waitlist User'
                });

                if (success) {
                  alert('You have been added to the waitlist!');
                  (e.target as HTMLFormElement).reset();
                } else {
                  alert('Something went wrong. Please try again.');
                }

                if (btn) {
                  btn.disabled = false;
                  btn.innerText = 'Join Waitlist';
                }
              }}
              style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                style={{ flex: 1, padding: '0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
              />
              <button
                type="submit"
                className="btn-solid"
                style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap', cursor: 'pointer', flex: '1 0 auto' }}
              >
                Join Waitlist
              </button>
            </form>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-brand-primary)', fontWeight: 600, marginTop: '2rem' }}>
            14 days free at all levels
          </p>

          {/* Toggle Switch */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <span style={{
              fontWeight: billingCycle === 'monthly' ? 700 : 400,
              color: billingCycle === 'monthly' ? 'var(--color-brand-primary)' : 'var(--color-text-dim)',
              cursor: 'pointer'
            }} onClick={() => setBillingCycle('monthly')}>Monthly</span>

            <button
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
              style={{
                width: '60px',
                height: '32px',
                background: billingCycle === 'annual' ? 'var(--color-brand-primary)' : '#cbd5e1',
                borderRadius: '999px',
                position: 'relative',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              aria-label="Toggle billing cycle"
            >
              <div style={{
                width: '24px',
                height: '24px',
                background: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '4px',
                left: billingCycle === 'monthly' ? '4px' : 'calc(100% - 28px)',
                transition: 'left 0.3s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} />
            </button>

            <span style={{
              fontWeight: billingCycle === 'annual' ? 700 : 400,
              color: billingCycle === 'annual' ? 'var(--color-brand-primary)' : 'var(--color-text-dim)',
              cursor: 'pointer'
            }} onClick={() => setBillingCycle('annual')}>
              Annual <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 600 }}>(Save ~15%)</span>
            </span>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto 4rem' }}>

          {/* Starter Plan */}
          <div className="tier" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plans.starter.name}</h3>
            <p className="price" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              ${billingCycle === 'monthly' ? plans.starter.monthly : plans.starter.annual}
              <span style={{ fontSize: '1rem', fontWeight: 400 }}> USD /{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </p>
            {billingCycle === 'monthly' && (
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>+ $25.00 Setup Fee</p>
            )}
            {billingCycle === 'annual' && (
              <p style={{ fontSize: '0.9rem', color: '#16a34a', marginBottom: '1.5rem', fontWeight: 600 }}>Setup Fee Waived</p>
            )}

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left', display: 'inline-block' }}>
              {plans.starter.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-brand-primary)', marginRight: '0.5rem' }}>✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleStartTrial(billingCycle === 'monthly' ? plans.starter.monthlyLink : plans.starter.annualLink, plans.starter.name)}
              className="btn-solid"
              style={{ display: 'block', width: '100%', padding: '0.75rem', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
            >
              Start Free Trial
            </button>
          </div>

          {/* Basic Plan */}
          <div className="tier featured" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '2px solid var(--color-brand-primary)', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plans.basic.name}</h3>
            <p className="price" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              ${billingCycle === 'monthly' ? plans.basic.monthly : plans.basic.annual}
              <span style={{ fontSize: '1rem', fontWeight: 400 }}> USD /{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </p>
            {billingCycle === 'monthly' && (
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>+ $25.00 Setup Fee</p>
            )}
            {billingCycle === 'annual' && (
              <p style={{ fontSize: '0.9rem', color: '#16a34a', marginBottom: '1.5rem', fontWeight: 600 }}>Setup Fee Waived</p>
            )}
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left', display: 'inline-block' }}>
              {plans.basic.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-brand-primary)', marginRight: '0.5rem' }}>✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleStartTrial(billingCycle === 'monthly' ? plans.basic.monthlyLink : plans.basic.annualLink, plans.basic.name)}
              className="btn-primary"
              style={{ display: 'block', width: '100%', padding: '0.75rem', borderRadius: '4px', textAlign: 'center', background: 'var(--color-brand-primary)', color: 'white', textDecoration: 'none', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
            >
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="tier" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plans.pro.name}</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              ${billingCycle === 'monthly' ? plans.pro.monthly : plans.pro.annual}
              <span style={{ fontSize: '1rem', fontWeight: 400 }}> USD /{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </p>
            {billingCycle === 'monthly' && (
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>+ $25.00 Setup Fee</p>
            )}
            {billingCycle === 'annual' && (
              <p style={{ fontSize: '0.9rem', color: '#16a34a', marginBottom: '1.5rem', fontWeight: 600 }}>Setup Fee Waived</p>
            )}
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left', display: 'inline-block' }}>
              {plans.pro.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-brand-primary)', marginRight: '0.5rem' }}>✓</span> {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleStartTrial(billingCycle === 'monthly' ? plans.pro.monthlyLink : plans.pro.annualLink, plans.pro.name)}
              className="btn-solid"
              style={{ display: 'block', width: '100%', padding: '0.75rem', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
            >
              Start Free Trial
            </button>
          </div>

          <AccountSetupModal
            isOpen={showSetupModal}
            onClose={() => setShowSetupModal(false)}
            redirectUrl={selectedPlanLink}
            planName={selectedPlanName}
          />

        </div>
      </div>
    </section>
  );
};

export default Pricing;
