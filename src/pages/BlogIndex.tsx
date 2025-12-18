import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../config/blogConfig';

const BlogIndex: React.FC = () => {
    return (
        <div className="blog-index" style={{ paddingBottom: '5rem' }}>
            <SEO
                title="Expert Home Guides | Thunder Bay Home Services"
                description="Local advice on home maintenance, cost guides, and seasonal tips for Thunder Bay homeowners."
                canonical="https://thunderbayhomeservices.com/blog"
            />

            {/* Hero */}
            <section style={{ padding: '6rem 0 4rem 0', background: '#F8FAFC', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
                    >
                        Local Insights & Expert Guides
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                        Honest advice for Thunder Bay homeowners. From cost breakdowns to seasonal maintenance checklists.
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="container" style={{ marginTop: '4rem' }}>
                <div className="grid">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ padding: '2rem', flex: 1 }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
                                        <span className="flex gap-1" style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                                            <Tag size={14} /> {post.category}
                                        </span>
                                        <span className="flex gap-1">
                                            <Clock size={14} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h2>
                                    <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
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
