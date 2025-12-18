import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../config/blogConfig';
import guidesHero from '../assets/images/guides_hero.png';
import LeadMagnet from '../components/LeadMagnet';

const BlogIndex: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Extract unique categories
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    // Filter posts
    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="blog-index" style={{ paddingBottom: '5rem' }}>
            <SEO
                title="Expert Home Guides | Thunder Bay Home Services"
                description="Local advice on home maintenance, cost guides, and seasonal tips for Thunder Bay homeowners."
                canonical="https://thunderbayhomeservices.com/blog"
            />

            {/* Hero */}
            <section style={{
                backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${guidesHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 0 6rem 0',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}
                    >
                        Local Insights & Expert Guides
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
                        Honest advice for Thunder Bay homeowners. From cost breakdowns to seasonal maintenance checklists.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
                <div style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    border: '1px solid #e2e8f0'
                }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '9999px',
                                border: 'none',
                                background: selectedCategory === category ? 'var(--color-brand-primary)' : '#f1f5f9',
                                color: selectedCategory === category ? 'white' : 'var(--color-text-dim)',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Lead Magnet: Cost Guide */}
            <section className="container" style={{ marginTop: '3rem' }}>
                <LeadMagnet
                    title="2025 Thunder Bay Winter Service Cost Guide"
                    description="Planning your budget? Get our detailed report on local pricing for snow removal, heating repairs, and emergency plumbing."
                    type="report"
                    buttonText="Get the Cost Guide"
                />
            </section>

            {/* Content Grid */}
            <section className="container" style={{ marginTop: '4rem' }}>
                <div className="grid">
                    {filteredPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ minHeight: '200px', background: '#f8fafc', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                                    {post.imageUrl && (
                                        <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    )}
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
                                        <span className="flex gap-1" style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                                            <Tag size={14} /> {post.category}
                                        </span>
                                        <span className="flex gap-1">
                                            <Clock size={14} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.3, fontWeight: 700 }}>{post.title}</h2>
                                    <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                        {post.excerpt}
                                    </p>
                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-brand-primary)' }}>
                                        Read Article <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                {filteredPosts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-dim)' }}>
                        No guides found in this category.
                    </div>
                )}
            </section>

            {/* Newsletter / CTA */}
            <section className="container" style={{ marginTop: '6rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--color-brand-primary)', color: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Need a pro instead of advice?</h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Browse our directory of vetted Thunder Bay service providers.</p>
                    <Link to="/#services" className="btn-solid" style={{ background: 'white', color: 'var(--color-brand-primary)' }}>
                        Find a Pro
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogIndex;
