import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { posts, loading } = useBlogPosts();
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        if (!loading && posts.length > 0) {
            const foundPost = posts.find(p => p.id === slug);
            setPost(foundPost);
        }
    }, [slug, posts, loading]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <p>Loading post...</p>
        </div>;
    }

    if (!post) {
        return <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <h1>Post not found</h1>
            <Link to="/blog" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Back to Blog</Link>
        </div>;
    }

    return (
        <div style={{ background: 'white', paddingBottom: '6rem' }}>
            <SEO
                title={`${post.title} | Frayze Blog`}
                description={post.excerpt}
                canonical={`/blog/${post.id}`}
                image={post.image}
                type="article"
            />

            {/* Header Image */}
            <div style={{ height: '60vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="container" style={{ position: 'absolute', bottom: '4rem', left: '0', right: '0', color: 'white' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/blog" style={{ color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', opacity: 0.8, textDecoration: 'none' }}>
                            <ArrowLeft size={18} /> Back to Blog
                        </Link>
                        <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1rem' }}>{post.title}</h1>
                        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem', opacity: 0.9 }}>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.category}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container" style={{ maxWidth: '800px', marginTop: '4rem' }}>
                <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-text-main)' }}
                />
            </div>

            {/* CTA */}
            <div style={{ background: '#F8FAFC', padding: '4rem 0', marginTop: '6rem', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to implement this?</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', marginBottom: '2rem' }}>
                        Join local contractors using Frayze to automate their growth.
                    </p>
                    <Link to="/#demo" className="btn-primary" style={{ padding: '0.75rem 2rem', textDecoration: 'none', color: 'white', borderRadius: '6px' }}>
                        Start Free Trial
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
