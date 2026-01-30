import { CheckCircle, Calendar, MessageSquare, FileText, LayoutDashboard, Copy, Play, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const Features: React.FC = () => (
  <>
    {/* How It Works Section */}
    <section id="how-it-works" style={{ padding: '6rem 0', background: 'white' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {/* Step 1 */}
          <div style={{ padding: '2rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--color-brand-light, #e0f2fe)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-brand-primary)' }}>
              <Copy size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Embed</h3>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem' }}>Copy one line of code to your existing website. Compatible with WordPress, Wix, Squarespace, and more.</p>
          </div>
          {/* Step 2 */}
          <div style={{ padding: '2rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--color-brand-light, #e0f2fe)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-brand-primary)' }}>
              <Play size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Automate</h3>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem' }}>Our AI instantly engages visitors, answers questions, and qualifies lead details 24/7.</p>
          </div>
          {/* Step 3 */}
          <div style={{ padding: '2rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--color-brand-light, #e0f2fe)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-brand-primary)' }}>
              <TrendingUp size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Grow</h3>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem' }}>Receive pre-qualified leads directly to your dashboard or CRM. Book more jobs with less effort.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Platform Tour Section */}
    <section id="features" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Everything You Need to Scale</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
            A complete suite of tools designed specifically for home service contractors.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {/* Feature 1: Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Calendar className="text-accent" size={24} />
                <h3 style={{ fontSize: '1.5rem' }}>Smart Scheduler</h3>
              </div>
              <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>Auto-syncs with Google/Outlook. Let clients book estimates directly into your available free slots without the back-and-forth.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Avoid double bookings</li>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Automated appointment reminders</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderTop: '1px solid #E2E8F0', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Visual Mockup Placeholder */}
              <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '80%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 600 }}><span>Mon</span><span>Tue</span><span>Wed</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <div style={{ background: '#e0f2fe', padding: '0.25rem', borderRadius: '2px', color: '#0369a1', fontSize: '0.7rem' }}>9:00 AM</div>
                  <div style={{ background: '#dcfce7', padding: '0.25rem', borderRadius: '2px', color: '#15803d', fontSize: '0.7rem' }}>Booked</div>
                  <div style={{ background: '#e0f2fe', padding: '0.25rem', borderRadius: '2px', color: '#0369a1', fontSize: '0.7rem' }}>10:00 AM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <MessageSquare className="text-accent" size={24} />
                <h3 style={{ fontSize: '1.5rem' }}>24/7 AI Chatbot</h3>
              </div>
              <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>Instant engagement for every visitor. Answers FAQs, qualifies leads, and captures contact info while you sleep.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Instant response time</li>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Handover to human when needed</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderTop: '1px solid #E2E8F0', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '80%' }}>
                <div style={{ background: '#e0f2fe', borderRadius: '12px 12px 12px 0', padding: '0.5rem', fontSize: '0.8rem', marginBottom: '0.5rem', width: 'fit-content' }}>Hi! Can I get a quote?</div>
                <div style={{ background: '#f0fdf4', borderRadius: '12px 12px 0 12px', padding: '0.5rem', fontSize: '0.8rem', marginLeft: 'auto', width: 'fit-content' }}>Sure! I just need a few details...</div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Lead Magnets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <FileText className="text-accent" size={24} />
                <h3 style={{ fontSize: '1.5rem' }}>Lead Magnets & Forms</h3>
              </div>
              <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>High-converting forms designed to capture more volume. Embed standard quote forms or "Instant Estimate" calculators.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Customizable fields</li>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Mobile-optimized</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderTop: '1px solid #E2E8F0', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '80%', textAlign: 'left' }}>
                <div style={{ height: '8px', width: '40%', background: '#cbd5e1', marginBottom: '8px', borderRadius: '4px' }}></div>
                <div style={{ height: '30px', width: '100%', border: '1px solid #e2e8f0', borderRadius: '4px', marginBottom: '8px' }}></div>
                <div style={{ height: '30px', width: '100%', background: '#0f172a', borderRadius: '4px' }}></div>
              </div>
            </div>
          </motion.div>

          {/* Feature 4: Client Portal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ padding: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <LayoutDashboard className="text-accent" size={24} />
                <h3 style={{ fontSize: '1.5rem' }}>Client Portal</h3>
              </div>
              <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>Your command center. Manage all leads, quotes, bookings, and customer communications from one simple dashboard.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Lead status tracking</li>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}><CheckCircle size={16} color="var(--color-brand-primary)" /> Team collaboration</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: '1.5rem', borderTop: '1px solid #E2E8F0', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: 'white', padding: '0.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '90%' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '20%', background: '#f1f5f9', height: '60px', borderRadius: '4px' }}></div>
                  <div style={{ width: '75%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ height: '15px', background: '#e2e8f0', borderRadius: '4px', width: '100%' }}></div>
                    <div style={{ height: '15px', background: '#e2e8f0', borderRadius: '4px', width: '80%' }}></div>
                    <div style={{ height: '15px', background: '#e2e8f0', borderRadius: '4px', width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  </>
);

export default Features;
