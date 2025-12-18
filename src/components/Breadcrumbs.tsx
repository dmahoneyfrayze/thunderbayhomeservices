import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Don't show on home page
    if (pathnames.length === 0) return null;

    return (
        <nav aria-label="breadcrumb" style={{ padding: '1rem 0', color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>
            <div className="container" style={{ padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.2s', color: 'var(--color-text-dim)' }} className="hover:text-brand">
                    <Home size={14} />
                    <span style={{ marginLeft: '4px' }}>Home</span>
                </Link>

                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    // Format slug to readable title (e.g. snow-removal -> Snow Removal)
                    const title = name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                    return (
                        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ChevronRight size={14} />
                            {isLast ? (
                                <span style={{ fontWeight: 600, color: 'var(--color-brand-primary)' }}>{title}</span>
                            ) : (
                                <Link to={routeTo} style={{ color: 'var(--color-text-dim)' }}>
                                    {title}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
