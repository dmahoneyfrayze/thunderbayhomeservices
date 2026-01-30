import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: string;
    schemas?: object[]; // Allow passing additional schema objects
    children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    image = '/og-image.png',
    type = 'website',
    schemas = [],
    children
}) => {
    const siteUrl = 'https://thunderbayhomeservices.com';
    const fullUrl = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;

    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Frayze",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "29.00",
            "priceCurrency": "USD"
        },
        "description": description,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "124"
        }
    };

    return (
        <Helmet>
            {/* Basic Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={fullUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Base Schema */}
            <script type="application/ld+json">
                {JSON.stringify(baseSchema)}
            </script>

            {/* Additional Schemas (e.g., FAQ, Breadcrumbs) */}
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}

            {children}
        </Helmet>
    );
};

    );
};

export default SEO;
