import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Download, Calculator, Send, CheckCircle } from 'lucide-react';
import LazyWidget from '../components/LazyWidget';
import { submitLead } from '../utils/submitLead';

const Tools: React.FC = () => {
    // Lead Magnet State
    const [magnetEmail, setMagnetEmail] = useState('');
    const [magnetSent, setMagnetSent] = useState(false);

    // Calculator State
    const [leads, setLeads] = useState(50);
    const [closeRate, setCloseRate] = useState(30);
    const [avgTicket, setAvgTicket] = useState(1500);
    const [calcEmail, setCalcEmail] = useState('');
    const [calcSent, setCalcSent] = useState(false);

    // Form State
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMsg, setContactMsg] = useState('');
    const [contactSent, setContactSent] = useState(false);

    // Handlers
    // submitLead imported from utils

    const handleMagnetSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await submitLead({ email: magnetEmail, source: 'Lead Magnet: 2026 Checklist' });
        if (success) setMagnetSent(true);
    };

    const handleCalcSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await submitLead({
            email: calcEmail,
            source: 'ROI Calculator',
            message: `Leads: ${leads}, Rate: ${closeRate}%, Ticket: $${avgTicket}, Rev: $${revenue}`
        });
        if (success) setCalcSent(true);
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await submitLead({
            name: contactName,
            email: contactEmail,
            message: contactMsg,
            source: 'Tools Contact Form'
        });
        if (success) setContactSent(true);
    };

    const revenue = leads * (closeRate / 100) * avgTicket;

    return (
        <div style={{ padding: '8rem 0 6rem', background: '#F8FAFC', minHeight: '100vh' }}>
            <SEO
                title="Free Local Business Marketing Tools & ROI Calculator | Frayze"
                description="Download free 2026 marketing checklists and calculate your AI revenue potential. Built for Thunder Bay Local Businesses. Get free tools to grow your business."
                canonical="/tools"
            />

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-brand-primary)' }}>Lead Generation Tools</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)' }}>
                        See how Frayze helps you capture more leads with interactive tools.
                    </p>
                </div>

                {/* 1. Lead Magnet Section */}
                <div className="card" style={{ maxWidth: '800px', margin: '0 auto 4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '1rem', background: '#DBEAFE', borderRadius: '12px', color: '#1E40AF' }}>
                            <Download size={32} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>The 2026 HVAC Marketing Checklist</h2>
                            <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem' }}>
                                Don't waste budget on outdated ads. Get our comprehensive checklist for dominating the Thunder Bay market.
                            </p>

                            {magnetSent ? (
                                <div style={{ padding: '1rem', background: '#DCFCE7', borderRadius: '8px', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={20} /> Success! Check your inbox for the PDF.
                                </div>
                            ) : (
                                <form onSubmit={handleMagnetSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={magnetEmail}
                                        onChange={(e) => setMagnetEmail(e.target.value)}
                                        style={{ flex: 1, padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                                    />
                                    <button type="submit" className="btn-solid" style={{ border: 'none' }}>Download PDF</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* 2. ROI Calculator Section */}
                <div className="card" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: '#F0FDF4', borderRadius: '12px', color: '#166534' }}>
                            <Calculator size={32} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Revenue Potential Calculator</h2>
                            <p style={{ color: 'var(--color-text-dim)' }}>
                                Estimate how much new revenue you could generate by automating your lead follow-up.
                            </p>
                        </div>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Monthly Leads</label>
                            <input type="number" value={leads} onChange={(e) => setLeads(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Closing Rate (%)</label>
                            <input type="number" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Avg Ticket ($)</label>
                            <input type="number" value={avgTicket} onChange={(e) => setAvgTicket(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1' }} />
                        </div>
                    </div>

                    <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '8px', color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
                        <span style={{ display: 'block', fontSize: '1rem', opacity: 0.8, marginBottom: '0.5rem' }}>Estimated Monthly Revenue</span>
                        <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#4ADE80' }}>${revenue.toLocaleString()}</span>
                    </div>

                    {calcSent ? (
                        <div style={{ padding: '1rem', background: '#DCFCE7', borderRadius: '8px', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} /> Report sent to your email!
                        </div>
                    ) : (
                        <form onSubmit={handleCalcSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                            <input
                                type="email"
                                placeholder="Email me this report"
                                required
                                value={calcEmail}
                                onChange={(e) => setCalcEmail(e.target.value)}
                                style={{ width: '300px', padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                            />
                            <button type="submit" className="btn-outline">Send Report</button>
                        </form>
                    )}
                </div>

                {/* Digital Audit Widget Section (New CTA) */}
                <div style={{ maxWidth: '800px', margin: '4rem auto', textAlign: 'center' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Get a Free Digital Audit</h2>
                        <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                            We'll scan your SEO, local listings, and speed to see how you rank against other Northwestern Ontario contractors.
                        </p>
                    </div>
                    <LazyWidget
                        scriptSrc="https://services.leadconnectorhq.com/prospecting/client/widget-embed.js"
                        scriptAttrs={{ 'data-widget-id': '68c07d48e7ddf0206a00dc98' }}
                        height="500px"
                    />
                </div>

                {/* 3. General Contact Form */}
                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: '#FAE8FF', borderRadius: '12px', color: '#86198F' }}>
                            <Send size={32} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Get in Touch</h2>
                            <p style={{ color: 'var(--color-text-dim)' }}>
                                Have a specific question? Send us a message directly.
                            </p>
                        </div>
                    </div>

                    {contactSent ? (
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', background: '#DCFCE7', borderRadius: '50%', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                                <CheckCircle size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                            <p style={{ color: 'var(--color-text-dim)' }}>We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="grid">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                                />
                            </div>
                            <textarea
                                placeholder="How can we help?"
                                rows={4}
                                required
                                value={contactMsg}
                                onChange={(e) => setContactMsg(e.target.value)}
                                style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '1rem', resize: 'vertical' }}
                            ></textarea>
                            <button className="btn-solid" style={{ alignSelf: 'flex-start', border: 'none' }}>Send Message</button>
                        </form>
                    )}
                </div>

                {/* 4. Future Tools Section (Coming Soon) */}
                <div style={{ marginTop: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Roadmap</span>
                        <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem' }}>Future Tools</h2>
                        <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '1rem auto 0' }}>
                            We're scaleable. While these micro-tools are coming soon to this platform, a <strong>comprehensive, all-in-one system</strong> including all these features is ready for deployment today at <a href="https://frayze.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>Frayze.ca</a>.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { title: 'Local SEO Engine', desc: 'Auto-optimize your site for "near me" searches in Thunder Bay & NWO.' },
                            { title: 'Listings Management', desc: 'Keep your business info consistent across Google, Bing, and local directories.' },
                            { title: 'Social Media Planner', desc: 'AI-generated posts that showcase your recent jobs and local expertise.' },
                            { title: 'Reputation Manager', desc: 'Automatic review requests and AI-drafted responses to build trust.' },
                            { title: 'AI Voice Reception', desc: 'A local-sounding AI that answers your phone and books jobs when you can\'t.' },
                            { title: 'Inventory Management', desc: 'Track local stock levels and sync with your sales engine in real-time.' },
                            { title: 'HR & Recruiting', desc: 'Automated job postings and AI-driven candidate screening for local trades.' },
                            { title: 'Digital Merchandising', desc: 'Auto-enhance site images and create lifestyle shots for your products.' },
                            { title: 'B2B Lead Generation', desc: 'Target local businesses and property managers for commercial contracts.' },
                            { title: 'Feed Distribution', desc: 'Sync your product catalog directly to Google Merchant Center and Facebook.' }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '2rem', background: '#F8FAFC', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: '1rem', right: '-2rem', background: '#DBEAFE', color: '#1E40AF', padding: '0.25rem 2.5rem', fontSize: '0.7rem', fontWeight: 700, transform: 'rotate(45deg)' }}>SOON</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tools;
