import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, ShieldCheck } from 'lucide-react';
import { blogPosts } from '../config/blogConfig';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="blog-post">
            <SEO
                title={post.title}
                description={post.excerpt}
                canonical={`https://thunderbayhomeservices.com/blog/${post.slug}`}
                type="article"
            />

            <Breadcrumbs />

            <div className="container" style={{ padding: '2rem 0 5rem 0' }}>
                <Link to="/blog" className="flex gap-2" style={{ color: 'var(--color-text-dim)', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
                    <ArrowLeft size={16} /> Back to Guides
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '4rem', alignItems: 'start' }}>

                    {/* Article Content */}
                    <article>
                        <header style={{ marginBottom: '2rem' }}>
                            <span style={{ display: 'inline-block', background: '#F1F5F9', color: 'var(--color-brand-primary)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                                {post.category}
                            </span>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{post.title}</h1>
                            <div className="flex gap-4" style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', flexWrap: 'wrap' }}>
                                <span className="flex gap-1"><User size={16} /> {post.author}</span>
                                <span className="flex gap-1"><Calendar size={16} /> {post.date}</span>
                                <span className="flex gap-1"><Clock size={16} /> {post.readTime}</span>
                            </div>
                        </header>

                        <div
                            className="prose"
                            style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-text-main)' }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Sidebar CTA */}
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--color-brand-primary)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Need a Pro?</h3>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                Don't want to DIY? We connect you with verified Thunder Bay experts for free.
                            </p>
                            <Link to="/#services" className="btn-solid" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                                Get 3 Free Quotes
                            </Link>
                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', fontSize: '0.85rem', color: 'var(--color-text-dim)', textAlign: 'center' }}>
                                <span className="flex gap-1 justify-center"><ShieldCheck size={14} /> Verified Local Pros</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPost;
