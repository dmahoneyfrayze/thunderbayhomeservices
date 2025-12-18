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
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm font-bold tracking-wide mb-6">
                            PARTNER PROGRAM
                        </span>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white' }}>
                            Grow Your Business with<br /><span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Qualified Local Leads</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                            Connect with Thunder Bay homeowners actively looking for your services. <br className="hidden md:block" />Zero setup fees. Zero cold calling. Just results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#apply" className="btn-solid group relative overflow-hidden" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', background: '#2563EB' }}>
                                <span className="relative z-10">Apply to Become a Partner</span>
                                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </a>
                            <a href="#how-it-works" className="btn-outline group hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '1.1rem 2rem' }}>
                                How It Works <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 800 }}>Who We Partner With</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '4rem', color: '#475569', maxWidth: '600px', margin: '0 auto 4rem' }}>
                            We maintain a curated network of trusted local professionals. Our platform works best for providers who meet these standards:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
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
                                    className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="bg-green-100 p-2 rounded-full text-green-600">
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 800, lineHeight: 1.2 }}>
                                Focus on Your Trade,<br />Not Your Marketing.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Stop wasting time on ad managers, SEO, and social media. We handle the digital acquisition so you can focus on quoting and closing.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "High Intent Leads", desc: "Homeowners have actively requested reliable service." },
                                    { title: "Exclusive Matching", desc: "We don't flood leads to dozens of vendors. Competition is limited." },
                                    { title: "Zero Risk", desc: "Pay only for valid leads. No monthly retainers." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                                                <Star size={20} fill="currentColor" className="text-blue-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid gap-6"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                                <Users className="text-blue-400 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-3">Targeted Homeowners</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Our leads aren't tire kickers. They are residents searching for specific solutions like "furnace repair" or "snow removal contracts".
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                                <LayoutDashboard className="text-blue-600 mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Flexible Control</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Take as much work as you can handle. Pause when you're booked. You control your volume week-to-week.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" style={{ padding: '8rem 0', background: '#0f172a', color: 'white' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '5rem', fontWeight: 800, color: 'white' }}>Simple 4-Step Process</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[32px] left-0 w-full h-[2px] bg-slate-700 z-0"></div>

                        {[
                            { title: "Join", desc: "Complete the application form below." },
                            { title: "Verify", desc: "We verify your service area and categories." },
                            { title: "Receive", desc: "Get lead details instantly via email/SMS." },
                            { title: "Close", desc: "Quote the customer and win the job." }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl mx-auto mb-6 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-900/50 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-3 opacity-90 text-white">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section style={{ padding: '8rem 0', background: 'white' }}>
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Transparency</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 800 }}>Fair Lead Pricing</h2>
                        <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
                            We price leads based on service value. You only pay for valid, qualified requests.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { service: "Snow Removal", price: "$20", range: "$20–$35" },
                            { service: "Plumbing / HVAC", price: "$45", range: "$45–$85" },
                            { service: "General Trades", price: "$30", range: "$30–$60" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl transition-all text-center"
                            >
                                <h3 className="font-bold text-slate-500 mb-4 text-sm uppercase tracking-wide">{item.service}</h3>
                                <div className="text-4xl font-extrabold text-slate-900 mb-2">{item.price}<span className="text-lg text-slate-400 font-medium">+</span></div>
                                <div className="text-sm text-slate-500 font-medium  mb-6">Typical range: {item.range}</div>
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="w-1/2 h-full bg-blue-500 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center bg-green-50/50 p-6 rounded-xl border border-green-100 max-w-2xl mx-auto">
                        <p className="font-semibold text-green-700 flex items-center justify-center gap-2">
                            <DollarSign size={20} className="fill-current" />
                            No setup fees. No monthly minimums. No contracts.
                        </p>
                    </div>
                </div>
            </section>

            {/* APPLICATION SECTION (High Design) */}
            <section id="apply" style={{ padding: '8rem 0', background: '#0f172a', position: 'relative', overflow: 'hidden' }}>
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"></div>
                </div>

                <div className="container max-w-5xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left Content */}
                        <div className="lg:col-span-2 text-white pt-10">
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1, color: 'white' }}>Start Growing Today</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Join Thunder Bay's fastest growing home service network. It takes less than 2 minutes to apply.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-300">
                                    <ShieldCheck className="text-blue-400" /> <span>Verified Partner Badge</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <Users className="text-blue-400" /> <span>Dedicated Account Support</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <CheckCircle className="text-blue-400" /> <span>48h Approval Process</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Card */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">Partner Application</h3>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Business Name</label>
                                            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Superior Plumbing" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Contact Name</label>
                                            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                        <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="name@company.com" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                                            <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="(807) 555-0123" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Primary Service</label>
                                            <div className="relative">
                                                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium">
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
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-5 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                                            Submit Application
                                        </button>
                                        <p className="text-center text-xs text-slate-400 mt-4">
                                            By submitting, you agree to our partner terms. Applications are reviewed manually within 24-48 hours.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForContractors;
