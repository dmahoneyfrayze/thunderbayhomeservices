import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import FrayzeWidget from '../components/FrayzeWidget';
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
        title="Frayze AI Quote Engine | Home Services SaaS"
        description="Streamline your quoting process with AI-powered estimates tailored for home services businesses."
        canonical="/"
      />

      {/* Hero Section */}
      <section
        style={{
          padding: '8rem 0',
          textAlign: 'center',
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            AI-Powered Quotes for <br /> Home Services Businesses
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Generate accurate, professional estimates in seconds. Reduce turnaround time, improve win rates, and scale your quoting workflow effortlessly.
          </p>
          <a
            href="https://app.frayze.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
            style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Frayze Widget Demo */}
      <section id="demo" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Try Our AI Quote Widget
          </h2>
          <FrayzeWidget widgetKey="YOUR_WIDGET_KEY_HERE" />
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* Contact / CTA */}
      <section id="contact" style={{ padding: '4rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Sign up for your free trial and see how Frayze AI can transform your quoting workflow.
          </p>
          <a
            href="https://app.frayze.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
            style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
