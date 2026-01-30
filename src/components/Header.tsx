import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Helper to scroll to hash if on same page, or just link
    const scrollToHash = (hash: string) => {
        closeMenu();
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
            <div className="container" style={{ padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }} aria-label="Go to Home">
                    <img src={logo} alt="Thunder Bay Home Services" width="180" height="64" style={{ height: '64px', width: 'auto' }} />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Home</Link>
                    <a href="#how-it-works" onClick={() => scrollToHash('#how-it-works')} style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)', cursor: 'pointer', textDecoration: 'none' }}>How It Works</a>
                    <a href="#features" onClick={() => scrollToHash('#features')} style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)', cursor: 'pointer', textDecoration: 'none' }}>Platform</a>
                    <Link to="/blog" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Blog</Link>
                    <Link to="/tools" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Free Tools</Link>
                    <a href="#pricing" onClick={() => scrollToHash('#pricing')} style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)', cursor: 'pointer', textDecoration: 'none' }}>Pricing</a>
                </nav>

                <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <a href="https://app.frayze.ca/login" target="_blank" className="btn-outline">Sign In</a>
                    <a href="https://app.frayze.ca/signup" target="_blank" className="btn-solid">Get Started</a>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="hidden-desktop"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-brand-primary)' }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-nav-overlay hidden-desktop"
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center', fontSize: '1.25rem', fontWeight: 600 }}>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                            <a href="#how-it-works" onClick={() => scrollToHash('#how-it-works')} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>How It Works</a>
                            <a href="#features" onClick={() => scrollToHash('#features')} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Platform</a>
                            <Link to="/blog" onClick={closeMenu} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Blog</Link>
                            <Link to="/tools" onClick={closeMenu} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Free Tools</Link>
                            <a href="#pricing" onClick={() => scrollToHash('#pricing')} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Pricing</a>
                            <a href="https://app.frayze.ca/login" target="_blank" style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Sign In</a>
                            <hr style={{ borderColor: '#E2E8F0', margin: '0.5rem 0' }} />
                            <a href="#demo" onClick={() => scrollToHash('#demo')} className="btn-solid" style={{ width: '100%', textDecoration: 'none' }}>
                                Start Free Trial
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
