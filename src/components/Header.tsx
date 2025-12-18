import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header style={{
            padding: '1rem 0',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #E2E8F0',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{ padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={28} className="text-accent" />
                    <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        color: 'var(--color-brand-primary)'
                    }}>
                        TBAY<span className="text-accent">HOME</span>
                    </span>
                </Link>

                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/#services" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Find a Pro</Link>
                    <Link to="/#how-it-works" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>How it Works</Link>
                    <Link to="/pro" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>For Contractors</Link>
                </nav>

                <div className="hidden-mobile">
                    <Link to="/snow-removal" className="btn-solid" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                        Get Quotes
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
