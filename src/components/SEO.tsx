import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, type = 'website', children }) => {
    return (
        <Helmet>
            {children}
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Social */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
        </Helmet>
    );
};

export default SEO;
