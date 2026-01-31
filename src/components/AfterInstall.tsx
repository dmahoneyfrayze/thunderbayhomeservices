import React from 'react';
import { Mail, Settings, Code2, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: Mail,
        title: "1. Instant Access",
        desc: "You'll receive an email immediately with your login credentials to the Frayze dashboard."
    },
    {
        icon: Settings,
        title: "2. Customize Your Bot",
        desc: "Spend 5 minutes adjusting your settings. Tell the AI your hours, services, and tone of voice."
    },
    {
        icon: Code2,
        title: "3. Copy & Paste",
        desc: "Grab the one-line styling snippet and paste it into your website header. It works on any platform."
    },
    {
        icon: TrendingUp,
        title: "4. Watch It Grow",
        desc: "Sit back as your new AI employee starts capturing leads, booking calls, and filling your calendar."
    }
];

const AfterInstall: React.FC = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--color-brand-primary)', color: 'white' }}>
            <div className="container">
                <div className="service-page-grid" style={{ alignItems: 'start' }}>
                    {/* Left Sticky Column */}
                    <div className="sticky-sidebar-wrapper">
                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>What Happens After I Sign Up?</h2>
                            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
                                We've made the process incredibly simple. Live on your site in under 5 minutes.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {steps.map((step, index) => (
                                    <a href={`#step-${index + 1}`} key={index} style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 600 }}>{index + 1}</div>
                                        {step.title.split('. ')[1]}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Steps Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {steps.map((step, index) => (
                            <div id={`step-${index + 1}`} key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    minWidth: '60px',
                                    height: '60px',
                                    background: 'var(--color-brand-light, #e0f2fe)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-brand-primary)'
                                }}>
                                    <step.icon size={28} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brand-primary)' }}>{step.title}</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', lineHeight: 1.6 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AfterInstall;
