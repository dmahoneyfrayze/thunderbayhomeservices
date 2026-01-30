import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import DemoForm from '../components/DemoForm';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import heroBg from '../assets/images/guides_hero.png';

const Home: React.FC = () => {
  const location = useLocation();

  // Smooth scroll to hash anchors
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="home-page">
      <SEO
        title="AI-Powered Lead Capture & Booking Engine | Frayze"
        description="Get your own 24/7 quote bot, scheduling system, and follow-up automation—self-deploy in 5 minutes, no developer needed."
        canonical="/"
      />

      {/* Hero Section */}
      <section
        style={{
          padding: '8rem 0 6rem',
          textAlign: 'center',
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--color-text-main)' }}>
            AI‑Powered Lead Capture & Booking Engine for <span style={{ color: 'var(--color-brand-primary)' }}>Home‑Service Contractors</span>
          </h1>
          <p className="subhead" style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Get your own 24/7 quote bot, scheduling system, and follow‑up automation—self‑deploy in 5 minutes, no developer needed.
          </p>
          <a
            href="#demo"
            className="btn-primary btn-xl"
            style={{
              padding: '1rem 2rem',
              fontSize: '1.25rem',
              background: 'var(--color-brand-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              display: 'inline-block',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* How It Works (Conceptual placeholder or just Features/Demo flow) */}
      <div id="how-it-works"></div>

      {/* Demo Form Section */}
      <DemoForm />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* Final CTA / Contact - optionally kept or removed since we have the DemoForm */}
      {/* Keeping a simple footer CTA area just in case, but simplifying it */}
      <section style={{ padding: '4rem 0', background: 'var(--color-brand-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Automate Your Business?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join hundreds of contractors saving 20+ hours a week.
          </p>
          <a
            href="#demo"
            className="btn-solid"
            style={{
              background: 'white',
              color: 'var(--color-brand-primary)',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
