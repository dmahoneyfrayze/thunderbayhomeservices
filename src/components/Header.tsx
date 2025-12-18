import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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
                <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Thunder Bay Home Services" style={{ height: '48px', width: 'auto' }} />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/#services" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Find a Pro</Link>
                    <Link to="/blog" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Expert Guides</Link>
                    <Link to="/#how-it-works" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>How it Works</Link>
                    <Link to="/for-contractors" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>For Contractors</Link>
                </nav>

                <div className="hidden-mobile">
                    <Link to="/snow-removal" className="btn-solid" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                        Get Quotes
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="hidden-desktop"
                    onClick={toggleMenu}
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
                            <Link to="/#services" onClick={closeMenu}>Find a Pro</Link>
                            <Link to="/blog" onClick={closeMenu}>Expert Guides</Link>
                            <Link to="/#how-it-works" onClick={closeMenu}>How it Works</Link>
                            <Link to="/for-contractors" onClick={closeMenu}>For Contractors</Link>
                            <hr style={{ borderColor: '#E2E8F0', margin: '0.5rem 0' }} />
                            <Link to="/snow-removal" onClick={closeMenu} className="btn-solid" style={{ width: '100%' }}>
                                Get Quotes
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
