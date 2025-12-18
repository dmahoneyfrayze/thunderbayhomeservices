export const pushToDataLayer = (event: string, data: Record<string, any>) => {
    if (typeof window !== 'undefined') {
        const dataLayer = (window as any).dataLayer || [];
        dataLayer.push({
            event,
            ...data
        });
        (window as any).dataLayer = dataLayer;
    }
}


export const getUTMParams = () => {
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'];

    const utmData: Record<string, string> = {};
    utmFields.forEach(field => {
        const value = params.get(field);
        if (value) {
            utmData[field] = value;
        }
    });

    return utmData;
};

export const trackLead = (serviceCategory: string, serviceType: string, source: string) => {
    pushToDataLayer('generate_lead', {
        service_category: serviceCategory,
        service_type: serviceType,
        source: source
    });
};

export const trackApplication = (businessName: string, service: string) => {
    pushToDataLayer('submit_application', {
        business_name: businessName,
        service: service
    });
};
