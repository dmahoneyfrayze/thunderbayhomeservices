import { useEffect } from 'react';

interface Schema {
    '@context': string;
    '@type': string;
    [key: string]: unknown;
}

export const useSchema = (schema: Schema | Schema[]) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [schema]);
};
