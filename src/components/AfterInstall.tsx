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
        <section style={{ padding: '6rem 0', background: 'var(--color-brand-primary)', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>What Happens After I Sign Up?</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        We've made the process incredibly simple. You can be live in under 15 minutes.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem',
                        position: 'relative'
                    }}
                >
                    {steps.map((step, index) => (
                        <div key={index} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <step.icon size={32} color="white" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>{step.title}</h3>
                            <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: 1.6, color: 'white' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AfterInstall;
