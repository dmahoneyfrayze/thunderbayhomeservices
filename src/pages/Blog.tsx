import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
    const { posts, loading } = useBlogPosts();

    return (
        <div style={{ padding: '8rem 0 6rem', background: '#F8FAFC', minHeight: '100vh' }}>
            <SEO
                title="Growth Insights for Thunder Bay Contractors | Frayze Blog"
                description="Actionable marketing and automation strategies specifically for Northwestern Ontario home service businesses. Read the latest from Frayze."
                canonical="/blog"
            />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-brand-primary)' }}>Latest Insights</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dim)' }}>
                        Growth strategies for the modern Thunder Bay contractor.
                    </p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div style={{ display: 'inline-block', width: '30px', height: '30px', border: '3px solid #E2E8F0', borderTopColor: 'var(--color-brand-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-dim)' }}>Loading articles...</p>
                    </div>
                ) : (
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {posts.map((post) => (
                            <Link
                                to={`/blog/${post.id}`}
                                key={post.id}
                                style={{ textDecoration: 'none' }}
                                className="card"
                            >
                                <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px 8px 0 0', marginBottom: '1.5rem', margin: '-2rem -2rem 1.5rem -2rem', position: 'relative' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                                    {/* Category Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        color: 'var(--color-brand-primary)',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem' }}>
                                    {/* Category moved to overlay, kept date here */}
                                    <span style={{ color: 'var(--color-text-dim)' }}>{post.date}</span>
                                </div>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h2>
                                <p style={{ color: 'var(--color-text-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                                <span style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                                    Read Article &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
