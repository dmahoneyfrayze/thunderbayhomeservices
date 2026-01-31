import { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import heroBg from '/images/thunder-bay-hero.webp';

// Lazy load below-the-fold components to reduce initial LCP/TBT
const WhatToExpect = lazy(() => import('../components/WhatToExpect'));
const DemoForm = lazy(() => import('../components/DemoForm'));
const Features = lazy(() => import('../components/Features'));
const Pricing = lazy(() => import('../components/Pricing'));
const LocalAdvantage = lazy(() => import('../components/LocalAdvantage'));
const TargetAudience = lazy(() => import('../components/TargetAudience'));
const AfterInstall = lazy(() => import('../components/AfterInstall'));
const FAQ = lazy(() => import('../components/FAQ'));
const LazyWidget = lazy(() => import('../components/LazyWidget'));

// Lightweight placeholder for suspended components
const SectionLoader = () => <div style={{ height: '100px', background: '#F8FAFC' }} />;

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
        title="Frayze | The AI Lead Engine for Thunder Bay Contractors"
        description="Stop losing jobs to voicemail. Frayze is the local AI sales agent for Thunder Bay & NWO contractors that books leads 24/7. Start your free trial."
        canonical="/"
        image="https://thunderbayhomeservices.com/assets/guides_hero-CcOUGRcY.png"
      />

      {/* Hero Section - Kept Eager for LCP */}
      <section
        className="hero-padding"
        style={{
          position: 'relative',
          textAlign: 'center',
          overflow: 'hidden',
          backgroundColor: '#F1F5F9' /* Fallback color */
        }}
      >
        {/* LCP Optimized Image */}
        <img
          src={heroBg}
          alt="Thunder Bay Home Services AI"
          width="1920"
          height="1080"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(1.1)'
          }}
          fetchPriority="high"
        />

        {/* White Gradient Overlay for Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.95))',
            zIndex: 0
          }}
        ></div>

        {/* Subtle animated background accent */}
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translate(-50%, 0)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(255,255,255,0) 60%)', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.8)', borderRadius: '50px', border: '1px solid #E2E8F0', marginBottom: '1.5rem', backdropFilter: 'blur(4px)' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent)' }}>✨ Built for Thunder Bay & Northwestern Ontario</span>
          </div>

          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--color-text-main)', letterSpacing: '-0.02em' }}>
            Never Miss Another Job Inquiry — <span className="gradient-text">Even After Hours</span>
          </h1>

          <p className="subhead" style={{ fontSize: '1.35rem', color: 'var(--color-text-dim)', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            An AI receptionist for Thunder Bay & NWO contractors that answers questions, captures leads, and books jobs automatically — 24/7.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="#demo"
                className="btn-primary"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.125rem',
                  background: 'var(--color-brand-primary)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.2)'
                }}
              >
                Start Free Trial
              </a>
              <a
                href="#how-it-works"
                className="btn-outline"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  color: 'var(--color-text-dim)',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  border: 'none'
                }}
              >
                See How It Works
              </a>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', opacity: 0.8 }}>
              No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<SectionLoader />}>
        <WhatToExpect />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LocalAdvantage />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TargetAudience />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AfterInstall />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <DemoForm />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Pricing />
      </Suspense>

      <section className="reviews-section section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Trusted by NWO Contractors</h2>
            <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
              See what your neighbors in Thunder Bay, Kenora, and across NWO are saying about Frayze.
            </p>
          </div>
          <Suspense fallback={<SectionLoader />}>
            <LazyWidget
              scriptSrc="https://api.frayze.ca/reputation/assets/review-widget.js"
              height="600px"
              renderContent={() => (
                <iframe
                  className="lc_reviews_widget"
                  src="https://api.frayze.ca/reputation/widgets/review_widget/9A5cW9ju0zoGXbGIDmyW"
                  frameBorder="0"
                  scrolling="no"
                  style={{ minWidth: '100%', width: '100%' }}
                  title="Frayze Reviews"
                />
              )}
            />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      {/* Final CTA / Contact */}
      <section style={{ padding: '4rem 0', background: 'var(--color-brand-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Ready to Automate Your Business?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9, color: 'white' }}>
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
