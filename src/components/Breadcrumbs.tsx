import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
    items: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    // Generate BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://thunderbayhomeservices.com/"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `https://thunderbayhomeservices.com${item.path}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                <li>
                    <Link to="/" style={{ color: 'var(--color-text-dim)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-dim)'}>
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.path} style={{ display: 'flex', alignItems: 'center' }}>
                        <ChevronRight size={14} style={{ margin: '0 0.5rem', opacity: 0.5 }} />
                        {index === items.length - 1 ? (
                            <span aria-current="page" style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                                {item.label}
                            </span>
                        ) : (
                            <Link to={item.path} style={{ color: 'var(--color-text-dim)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-dim)'}>
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
