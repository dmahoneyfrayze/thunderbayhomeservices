import SEO from '../components/SEO';

const Privacy: React.FC = () => {
    return (
        <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <SEO title="Privacy Policy | Thunder Bay Home Services" description="Our privacy practices regarding your data." />
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
            <div style={{ color: 'var(--color-text-dim)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1rem' }}>Last Updated: December 2024</p>
                <p style={{ marginBottom: '1.5rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Thunder Bay Home Services is a local service comparison platform operated by <strong>Frayze Technologies Inc.</strong>, based in Ontario, Canada. This policy explains how we collect and use your information when you use our website to request service quotes.
                    </p>
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>1. Information We Collect</h2>
                <p style={{ marginBottom: '1rem' }}>
                    When you submit a quote request, we collect personal information such as your name, phone number, address, and project details. This is necessary to facilitate the service connection.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>2. How We Use Your Data</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We use your data solely to:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>Connect you with up to 3 local service providers.</li>
                    <li>Follow up on your service experience.</li>
                    <li>Improve our platform functionality.</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>3. Data Sharing</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We share your contact and project details <strong>only</strong> with the specific service providers matched to your request. We do not sell your data to unrelated third-party marketing lists.
                </p>
            </div>
        </div>
    );
};

export default Privacy;
