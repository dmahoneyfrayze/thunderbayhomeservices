import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
    return (
        <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <h1 style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--color-text-dim)', opacity: 0.3 }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-dim)' }}>
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link to="/" className="btn-solid">
                Return to Home
            </Link>
        </div>
    );
};

export default NotFound;
