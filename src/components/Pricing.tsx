import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = {
    starter: {
      name: 'Starter',
      monthly: 29,
      annual: 299,
      monthlyLink: 'https://link.thunderbayhomeservices.com/payment-link/697c671f3533388501bad331',
      annualLink: 'https://link.thunderbayhomeservices.com/payment-link/697c671f3533388501bad331',
      features: ['Up to 50 leads per month', 'Email support', 'Basic analytics']
    },
    basic: {
      name: 'Basic',
      monthly: 79,
      annual: 799,
      monthlyLink: 'https://link.thunderbayhomeservices.com/payment-link/697c676358b49c90adab4b08',
      annualLink: 'https://link.thunderbayhomeservices.com/payment-link/697c676358b49c90adab4b08',
      features: ['Up to 200 leads per month', 'Priority email support'],
      isPopular: true
    },
    pro: {
      name: 'Pro',
      monthly: 149,
      annual: 1499,
      monthlyLink: 'https://link.thunderbayhomeservices.com/payment-link/697c67826503ca3744797572',
      annualLink: 'https://link.thunderbayhomeservices.com/payment-link/697c67826503ca3744797572',
      features: ['Unlimited leads', 'Dedicated support', 'Custom integrations', 'Onboarding assistance']
    }
  };

  return (
    <section id="pricing" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pricing Plans</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
            Simple, transparent pricing to grow with your business.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-brand-primary)', fontWeight: 600, marginTop: '1rem' }}>
            14 days free at all levels
          </p>

          {/* Toggle Switch */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
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

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto 4rem' }}>

          {/* Starter Plan */}
          <div className="tier" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plans.starter.name}</h3>
            <p className="price" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              ${billingCycle === 'monthly' ? plans.starter.monthly : plans.starter.annual}
              <span style={{ fontSize: '1rem', fontWeight: 400 }}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
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
            <a href={billingCycle === 'monthly' ? plans.starter.monthlyLink : plans.starter.annualLink} target="_blank" rel="noopener noreferrer" className="btn-solid" style={{ display: 'block', width: '100%', padding: '0.75rem', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontWeight: 600 }}>Start Free Trial</a>
          </div>

          {/* Basic Plan */}
          <div className="tier featured" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '2px solid var(--color-brand-primary)', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plans.basic.name}</h3>
            <p className="price" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              ${billingCycle === 'monthly' ? plans.basic.monthly : plans.basic.annual}
              <span style={{ fontSize: '1rem', fontWeight: 400 }}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
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
            <a href={billingCycle === 'monthly' ? plans.basic.monthlyLink : plans.basic.annualLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', width: '100%', padding: '0.75rem', borderRadius: '4px', textAlign: 'center', background: 'var(--color-brand-primary)', color: 'white', textDecoration: 'none', fontWeight: 600 }}>Start Free Trial</a>
          </div>

          {/* Pro Plan */}
          <div className="tier" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plans.pro.name}</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              ${billingCycle === 'monthly' ? plans.pro.monthly : plans.pro.annual}
              <span style={{ fontSize: '1rem', fontWeight: 400 }}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
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
            <a href={billingCycle === 'monthly' ? plans.pro.monthlyLink : plans.pro.annualLink} target="_blank" rel="noopener noreferrer" className="btn-solid" style={{ display: 'block', width: '100%', padding: '0.75rem', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontWeight: 600 }}>Start Free Trial</a>
          </div>

        </div>

        {/* Level Up Upsell Section */}
        <div style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Want to level up?</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', marginBottom: '2rem' }}>
            Take your business to the next level with our comprehensive agency solutions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Website Remake & SEO</h4>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>CRM & Automation</h4>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Social Media & Ads</h4>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Custom AI Solutions</h4>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Reputation & Analytics</h4>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Pipelines & AI Voice</h4>
            </div>
          </div>

          <a
            href="https://frayze.ca/solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: 'var(--color-text-main)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Explore Agency Solutions
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
