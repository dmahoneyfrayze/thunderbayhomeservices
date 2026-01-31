import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Do I need to be tech-savvy to use this?",
        answer: "Not at all. We built Frayze specifically for busy contractors, not computer wizs. If you can copy and paste, you can install our bot. Plus, our dashboard is designed to be as simple as checking your email."
    },
    {
        question: "Does this replace my receptionist or office staff?",
        answer: "No, it supercharges them. Frayze handles the 24/7 initial response, qualifying leads and answering basic questions so your staff only spends time on ready-to-book customers. It eliminates the game of phone tag."
    },
    {
        question: "What happens if I can't set it up?",
        answer: "We have a dedicated support team right here in Canada. Every plan comes with access to our help center, and our Pro plan includes dedicated onboarding assistance to get everything running perfectly for you."
    },
    {
        question: "Can I customize the chatbot's answers?",
        answer: "Absolutely. You can teach the AI about your specific services, pricing estimates, unique selling points, and service areas. It learns to speak like your best salesperson."
    },
    {
        question: "Is there a long-term contract?",
        answer: "No. All our plans are month-to-month. We believe you should stay because you're making money, not because you're locked in a contract. You can cancel anytime."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="section-padding" style={{ background: '#F8FAFC' }}>
            {/* Inject FAQ Schema via SEO component (or Helmet directly if SEO component isn't mounted here, but better to use SEO if page level) */}
            {/* Since FAQ is a section, we might need a Helmet wrapper if not on a main page, but Home.tsx renders this. */}
            {/* Wait, Home.tsx renders FAQ. Home.tsx uses SEO. We should pass this schema up or use Helmet here. */}
            {/* Using Helmet directly for the schema to avoid prop drilling complex data through Home.tsx */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)' }}>Everything you need to know about getting started.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'white',
                                borderRadius: '8px',
                                border: '1px solid #E2E8F0',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{faq.question}</h3>
                                {activeIndex === index ? <ChevronUp size={20} color="var(--color-text-dim)" /> : <ChevronDown size={20} color="var(--color-text-dim)" />}
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
