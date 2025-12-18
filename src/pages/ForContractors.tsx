import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ShieldCheck, DollarSign, Users, ArrowRight, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import contractorsHero from '../assets/images/For_Contractors_Background_Thunder_Bay.jpg';

const ForContractors: React.FC = () => {
    return (
        <div className="for-contractors-page">
            <Helmet>
                <title>Get Local Home Service Leads in Thunder Bay | For Contractors</title>
                <meta name="description" content="Thunder Bay Home Services connects local contractors with homeowner service requests across the city. Pay per lead. No long-term contracts." />
            </Helmet>

            {/* HERO SECTION */}
            <section style={{
                backgroundImage: `linear-gradient(to bottom, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95)), url(${contractorsHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                color: 'white',
                padding: '8rem 0 6rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Get Local Home Service Leads<br /><span className="text-accent">in Thunder Bay</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        Connect with homeowners actively requesting service. No advertising setup. No long-term contracts. Pay only for qualified leads.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#apply" className="btn-solid" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Apply to Become a Partner</a>
                        <a href="#how-it-works" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>How It Works <ArrowRight size={16} style={{ display: 'inline', marginLeft: '0.5rem' }} /></a>
                    </div>
                </div>
            </section>

            {/* QUALIFICATION FILTER */}
            <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>Who We Work With</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#475569' }}>
                            Thunder Bay Home Services partners with established, local service providers who are actively taking on new work and value qualified inbound requests.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            {[
                                "Licensed or insured where required",
                                "Actively serving Thunder Bay or surrounding areas",
                                "Able to respond to inquiries promptly",
                                "Provides one or more core home services"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                    <span style={{ fontWeight: 500, color: '#334155' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#0f172a' }}>What You Receive</h2>
                            <ul className="space-y-4">
                                {[
                                    "Homeowners requesting specific services",
                                    "Requests matched by service type and location",
                                    "No cold outreach or ad management",
                                    "Flexible volume based on availability",
                                    "Seasonal and year-round opportunities"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '4px', borderRadius: '50%' }}>
                                            <CheckCircle size={16} />
                                        </div>
                                        <span style={{ fontSize: '1.1rem', color: '#334155' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0284c7' }}>
                                <p style={{ fontWeight: 600, color: '#0c4a6e' }}>No dashboards. No promises. Just outcomes.</p>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="card p-6 bg-white shadow-lg border border-slate-100">
                                <Users className="text-brand-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">High Intent</h3>
                                <p className="text-slate-600">Leads are homeowners who have actively requested a quote or service.</p>
                            </div>
                            <div className="card p-6 bg-white shadow-lg border border-slate-100">
                                <LayoutDashboard className="text-brand-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Zero Admin</h3>
                                <p className="text-slate-600">We handle the marketing and capture. You just get the job details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" style={{ padding: '6rem 0', background: '#1e293b', color: 'white' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2rem', marginBottom: '4rem' }}>How the Platform Works for Providers</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Request", desc: "Homeowners submit service requests" },
                            { title: "Matching", desc: "Requests are matched to available providers" },
                            { title: "Delivery", desc: "You receive lead details based on your criteria" },
                            { title: "Control", desc: "You decide how many leads you accept" }
                        ].map((step, idx) => (
                            <div key={idx} className="relative">
                                <div style={{
                                    width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700
                                }}>
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p style={{ color: '#94a3b8' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: '4rem', color: '#cbd5e1', maxWidth: '600px', margin: '4rem auto 0', fontSize: '1.1rem' }}>
                        Our system is designed to reduce time spent chasing inquiries and help providers focus on quoting and completing work.
                    </p>
                </div>
            </section>

            {/* PRICING */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>Pricing Structure</h2>
                        <p style={{ fontSize: '1.1rem', color: '#475569' }}>
                            Providers are charged per qualified service request. Pricing varies by service category and demand.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { service: "Snow Removal", price: "$20–$35", unit: "per request" },
                            { service: "Plumbing", price: "$40–$75", unit: "per request" },
                            { service: "HVAC / Heating", price: "$60–$100", unit: "per request" }
                        ].map((item, idx) => (
                            <div key={idx} className="card p-6 text-center border border-slate-200">
                                <h3 className="font-bold text-slate-700 mb-2">{item.service}</h3>
                                <div className="text-2xl font-extrabold text-brand-primary mb-1">{item.price}</div>
                                <div className="text-sm text-slate-500">{item.unit}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-green-50 p-6 rounded-lg border border-green-100">
                        <p className="font-semibold text-green-800 flex items-center justify-center gap-2">
                            <DollarSign size={20} />
                            There are no setup fees, no monthly minimums, and no long-term contracts.
                        </p>
                    </div>
                </div>
            </section>

            {/* QUALITY CONTROL */}
            <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
                <div className="container max-w-3xl mx-auto text-center">
                    <ShieldCheck size={48} className="text-brand-primary mx-auto mb-6" />
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>How Requests Are Managed</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#475569' }}>
                        We limit the number of providers per service category to maintain lead quality and response times. Providers who consistently fail to respond may be removed from the platform.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Partner FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How many providers receive each request?", a: "Requests are typically shared with a limited number of providers based on service type, location, and availability." },
                            { q: "Can I pause or limit leads?", a: "Yes. Providers control availability and volume to match their capacity." },
                            { q: "Do I need to sign a contract?", a: "No long-term contracts are required. Participation is flexible and based on availability." },
                            { q: "What types of services are accepted?", a: "We work with providers across snow removal, plumbing, HVAC, electrical, cleaning, landscaping, moving, painting, roofing, and related home services." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-slate-800">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA (APPLICATION GATE) */}
            <section id="apply" style={{ padding: '6rem 0', background: '#0f172a', color: 'white' }}>
                <div className="container max-w-2xl mx-auto text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Apply to Become a Service Partner</h2>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '3rem' }}>
                        Complete a short application to confirm service category, coverage area, and availability. Approved providers will be contacted with next steps.
                    </p>
                    <div className="bg-white p-8 rounded-xl text-left shadow-2xl">
                        {/* Placeholder Form Structure */}
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Business Name</label>
                                    <input type="text" className="w-full p-3 border border-slate-300 rounded-lg text-slate-900" placeholder="e.g. Superior Plumbing" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Contact Name</label>
                                    <input type="text" className="w-full p-3 border border-slate-300 rounded-lg text-slate-900" placeholder="Your Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                                <input type="email" className="w-full p-3 border border-slate-300 rounded-lg text-slate-900" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                                <input type="tel" className="w-full p-3 border border-slate-300 rounded-lg text-slate-900" placeholder="807-555-0123" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Primary Service Category</label>
                                <select className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 bg-white">
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
                            </div>
                            <button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-4 rounded-lg text-lg transition-colors mt-4">
                                Apply to Become a Partner
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                By applying, you agree to our partner terms. Manual approval required.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForContractors;
