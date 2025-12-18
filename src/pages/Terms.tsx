import SEO from '../components/SEO';

const Terms: React.FC = () => {
    return (
        <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <SEO title="Terms of Service | Thunder Bay Home Services" description="Terms and conditions for using our platform." />
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
            <div style={{ color: 'var(--color-text-dim)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1rem' }}>Last Updated: December 2024</p>
                <p style={{ marginBottom: '1.5rem' }}>
                    By using Thunder Bay Home Services, you agree to these terms. Please read them carefully.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>1. Service Description</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We are a directory and lead generation service. We are not a contractor. We connect you with independent 3rd party service providers. We do not guarantee the work of these providers, though we do our best to vetting them.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>2. Liability</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Thunder Bay Home Services is not liable for any damages, disputes, or quality issues arising from the work performed by providers you connect with through our platform. All agreements are directly between you and the provider.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>3. Honest Usage</h2>
                <p style={{ marginBottom: '1rem' }}>
                    You agree to provide accurate information when requesting quotes. False requests or spamming our network is prohibited.
                </p>
            </div>
        </div>
    );
};

export default Terms;
