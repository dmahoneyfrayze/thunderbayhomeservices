
export const submitLead = async (data: any) => {
    try {
        const res = await fetch('/.netlify/functions/submit-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Submission failed');
        return true;
    } catch (e) {
        console.error(e);
        // Optional: show a toast or alert here, or let the component handle it.
        // For consistency with existing code, we'll alert here or return false.
        // But better to return false and let component handle UI.
        return false;
    }
};
