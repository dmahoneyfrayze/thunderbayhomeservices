export const pushToDataLayer = (event: string, data: Record<string, any>) => {
    if (typeof window !== 'undefined') {
        const dataLayer = (window as any).dataLayer || [];
        dataLayer.push({
            event,
            ...data
        });
        (window as any).dataLayer = dataLayer;
    }
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
