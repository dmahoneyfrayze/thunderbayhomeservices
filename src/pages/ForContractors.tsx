import React from 'react';
import { CheckCircle, ShieldCheck, DollarSign, Users, ArrowRight, LayoutDashboard, Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import contractorsHero from '../assets/images/For_Contractors_Background_Thunder_Bay.jpg';
import SEO from '../components/SEO';

const ForContractors: React.FC = () => {
    return (
        <div className="for-contractors-page overflow-hidden">
            <SEO
                title="Get Local Home Service Leads in Thunder Bay | For Contractors"
                description="Thunder Bay Home Services connects local contractors with homeowner service requests across the city. Pay per lead. No long-term contracts."
                canonical="https://thunderbayhomeservices.com/for-contractors"
            />

            {/* HERO SECTION */}
            <section style={{
                backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url(${contractorsHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                color: 'white',
                padding: '10rem 0 8rem 0',
                textAlign: 'center',
                position: 'relative'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            background: 'rgba(59, 130, 246, 0.2)',
                            color: '#BFDBFE',
                            border: '1px solid rgba(96, 165, 250, 0.3)',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            letterSpacing: '0.05em'
                        }}>
                            PARTNER PROGRAM
                        </span>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white' }}>
                            Grow Your Business with<br /><span style={{ color: '#60A5FA' }}>Qualified Local Leads</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                            Connect with Thunder Bay homeowners actively looking for your services. <br className="hidden-mobile" />Zero setup fees. Zero cold calling. Just results.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="#apply" className="btn-solid" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', background: '#2563EB', color: 'white' }}>
                                Apply to Become a Partner
                            </a>
                            <a href="#how-it-works" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '1.1rem 2rem' }}>
                                How It Works <ArrowRight size={18} style={{ display: 'inline', marginLeft: '0.5rem' }} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* QUALIFICATION FILTER */}
            <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 800 }}>Who We Partner With</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '4rem', color: '#475569', maxWidth: '600px', margin: '0 auto 4rem' }}>
                            We maintain a curated network of trusted local professionals. Our platform works best for providers who meet these standards:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                            {[
                                "Licensed & Insured where required by law",
                                "Established reputation in Thunder Bay",
                                "Able to respond to new requests within 24h",
                                "Dedicated to high-quality workmanship"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '12px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid #F1F5F9' }}
                                >
                                    <div style={{ background: '#DCFCE7', padding: '0.5rem', borderRadius: '50%', color: '#16A34A', display: 'flex' }}>
                                        <CheckCircle size={20} />
                                    </div>
                                    <span style={{ fontWeight: 600, color: '#334155', fontSize: '1.05rem' }}>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* VALUE PROP GRID */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 800, lineHeight: 1.2 }}>
                                Focus on Your Trade,<br />Not Your Marketing.
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                                Stop wasting time on ad managers, SEO, and social media. We handle the digital acquisition so you can focus on quoting and closing.
                            </p>

                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {[
                                    { title: "High Intent Leads", desc: "Homeowners have actively requested reliable service." },
                                    { title: "Exclusive Matching", desc: "We don't flood leads to dozens of vendors. Competition is limited." },
                                    { title: "Zero Risk", desc: "Pay only for valid leads. No monthly retainers." }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ marginTop: '0.25rem' }}>
                                            <div style={{ background: '#EFF6FF', color: '#2563EB', padding: '0.5rem', borderRadius: '8px' }}>
                                                <Star size={20} fill="currentColor" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.125rem' }}>{item.title}</h4>
                                            <p style={{ color: '#475569' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ display: 'grid', gap: '1.5rem' }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ background: 'linear-gradient(to bottom right, #0F172A, #1E293B)', padding: '2rem', borderRadius: '1rem', color: 'white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', position: 'relative', overflow: 'hidden' }}>
                                <Users style={{ color: '#60A5FA', marginBottom: '1.5rem' }} size={40} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>Targeted Homeowners</h3>
                                <p style={{ color: '#CBD5E1', lineHeight: 1.6 }}>
                                    Our leads aren't tire kickers. They are residents searching for specific solutions like "furnace repair" or "snow removal contracts".
                                </p>
                            </div>
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                                <LayoutDashboard style={{ color: '#2563EB', marginBottom: '1.5rem' }} size={40} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0F172A' }}>Flexible Control</h3>
                                <p style={{ color: '#475569', lineHeight: 1.6 }}>
                                    Take as much work as you can handle. Pause when you're booked. You control your volume week-to-week.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" style={{ padding: '8rem 0', background: '#0f172a', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '5rem', fontWeight: 800, color: 'white' }}>Simple 4-Step Process</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', position: 'relative' }}>
                        {[
                            { title: "Join", desc: "Complete the application form below." },
                            { title: "Verify", desc: "We verify your service area and categories." },
                            { title: "Receive", desc: "Get lead details instantly via email/SMS." },
                            { title: "Close", desc: "Quote the customer and win the job." }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                style={{ position: 'relative', zIndex: 10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div style={{ width: '4rem', height: '4rem', background: '#2563EB', color: 'white', borderRadius: '1rem', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.5)' }}>
                                    {idx + 1}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>{step.title}</h3>
                                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section style={{ padding: '8rem 0', background: 'white' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Transparency</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 800 }}>Fair Lead Pricing</h2>
                        <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
                            We price leads based on service value. You only pay for valid, qualified requests.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        {[
                            { service: "Snow Removal", price: "$20", range: "$20–$35" },
                            { service: "Plumbing / HVAC", price: "$45", range: "$45–$85" },
                            { service: "General Trades", price: "$30", range: "$30–$60" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid #E2E8F0', background: 'white', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            >
                                <h3 style={{ fontWeight: 700, color: '#64748B', marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.service}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{item.price}<span style={{ fontSize: '1.25rem', color: '#94A3B8', fontWeight: 500 }}>+</span></div>
                                <div style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 500, marginBottom: '1.5rem' }}>Typical range: {item.range}</div>
                                <div style={{ width: '100%', height: '4px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                                    <div style={{ width: '50%', height: '100%', background: '#3B82F6' }}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', background: 'rgba(34, 197, 94, 0.1)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #DCFCE7', maxWidth: '600px', margin: '0 auto' }}>
                        <p style={{ fontWeight: 600, color: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <DollarSign size={20} fill="currentColor" />
                            No setup fees. No monthly minimums. No contracts.
                        </p>
                    </div>
                </div>
            </section>

            {/* APPLICATION SECTION */}
            <section id="apply" style={{ padding: '8rem 0', background: '#0f172a', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {/* Left Content */}
                        <div style={{ color: 'white', paddingTop: '2.5rem' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1, color: 'white' }}>Start Growing Today</h2>
                            <p style={{ color: '#94A3B8', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Join Thunder Bay's fastest growing home service network. It takes less than 2 minutes to apply.
                            </p>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#CBD5E1' }}>
                                    <ShieldCheck style={{ color: '#60A5FA' }} /> <span>Verified Partner Badge</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#CBD5E1' }}>
                                    <Users style={{ color: '#60A5FA' }} /> <span>Dedicated Account Support</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#CBD5E1' }}>
                                    <CheckCircle style={{ color: '#60A5FA' }} /> <span>48h Approval Process</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Card */}
                        <div style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem' }}>Partner Application</h3>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Business Name</label>
                                        <input type="text" style={{ width: '100%', padding: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.75rem', outline: 'none', fontSize: '1rem' }} placeholder="e.g. Superior Plumbing" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Contact Name</label>
                                        <input type="text" style={{ width: '100%', padding: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.75rem', outline: 'none', fontSize: '1rem' }} placeholder="Your Name" />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1.25rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Email Address</label>
                                    <input type="email" style={{ width: '100%', padding: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.75rem', outline: 'none', fontSize: '1rem' }} placeholder="name@company.com" />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Phone Number</label>
                                        <input type="tel" style={{ width: '100%', padding: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.75rem', outline: 'none', fontSize: '1rem' }} placeholder="(807) 555-0123" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Primary Service</label>
                                        <div style={{ position: 'relative' }}>
                                            <select style={{ width: '100%', padding: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.75rem', outline: 'none', fontSize: '1rem', appearance: 'none', cursor: 'pointer', color: '#334155', fontWeight: 500 }}>
                                                <option>Select a service...</option>
                                                <option>Snow Removal</option>
                                                <option>Plumbing</option>
                                                <option>HVAC / Heating</option>
                                                <option>Electrical</option>
                                                <option>Cleaning</option>
                                                <option>Landscaping</option>
                                                <option>Moving</option>
                                                <option>Painting</option>
                                                <option>Roofing</option>
                                                <option>Junk Removal</option>
                                            </select>
                                            <ChevronDown style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button style={{ width: '100%', background: 'linear-gradient(to right, #2563EB, #3B82F6)', color: 'white', fontWeight: 700, padding: '1.25rem', borderRadius: '0.75rem', fontSize: '1.125rem', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>
                                        Submit Application
                                    </button>
                                    <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94A3B8', marginTop: '1rem' }}>
                                        By submitting, you agree to our partner terms. Applications are reviewed manually within 24-48 hours.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForContractors;
