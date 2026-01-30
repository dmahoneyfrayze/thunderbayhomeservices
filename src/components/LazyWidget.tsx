import React, { useEffect, useRef, useState } from 'react';

interface LazyWidgetProps {
    scriptSrc: string;
    renderContent?: () => React.ReactNode;
    height?: string | number;
    className?: string;
    scriptAttrs?: Record<string, string>;
}

const LazyWidget: React.FC<LazyWidgetProps> = ({
    scriptSrc,
    renderContent,
    height = '400px',
    className = '',
    scriptAttrs = {}
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '200px' } // Load slightly before it comes into view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.type = 'text/javascript';

            // Apply extra attributes if any (like data-widget-id)
            Object.entries(scriptAttrs).forEach(([key, value]) => {
                script.setAttribute(key, value);
            });

            document.body.appendChild(script);

            return () => {
                // Cleanup script if needed? Usually better to leave it once loaded
                // to avoid re-fetching on navigation, but depends on widget behavior.
            };
        }
    }, [isVisible, scriptSrc, scriptAttrs]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ minHeight: isVisible ? 'auto' : height }}
        >
            {isVisible && renderContent && renderContent()}
        </div>
    );
};

export default LazyWidget;
