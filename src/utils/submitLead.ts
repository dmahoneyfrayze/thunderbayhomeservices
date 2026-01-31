
export const submitLead = async (data: any) => {
    try {
        const res = await fetch('/.netlify/functions/submit-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Submission failed: ${res.status} ${res.statusText}`, errorText);
            try {
                const errorJson = JSON.parse(errorText);
                // Try to extract useful error message
                throw new Error(errorJson.error || `Server Error: ${res.status}`);
            } catch (e: any) {
                // If JSON parse fails or it was just thrown above
                throw new Error(e.message || `Submission failed: ${res.status}`);
            }
        }
        return true;
    } catch (e: any) {
        console.error('SubmitLead Error:', e);
        // Alert the actual error so the user can tell us what it is
        alert(`Request Failed: ${e.message}`);
        return false;
    }
};
