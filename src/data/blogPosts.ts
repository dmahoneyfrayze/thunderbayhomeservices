export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'speed-to-lead-thunder-bay',
        title: 'Why Speed-to-Lead is Critical for Thunder Bay Contractors',
        excerpt: 'In a smaller market, reputation is everything. Discover how missing a call by 5 minutes can cost you the job.',
        category: 'Growth Strategy',
        date: 'Oct 12, 2025',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        content: `
            <p>We've all been there. You're on a job site, under a sink, or on a roof, and your phone buzzes. It's a potential new customer. You ignore it to finish the task at hand, planning to call back in an hour.</p>
            <p><strong>By the time you call back, they've already booked your competitor.</strong></p>
            <h2>The 5-Minute Rule</h2>
            <p>Data shows that leads are <strong>9x more likely to convert</strong> if you respond within 5 minutes. In Thunder Bay, where word-of-mouth travels fast, being the responsive contractor automatically positions you as the professional choice.</p>
            <p>This is where AI comes in. You physically cannot answer every call instantly 24/7. But Frayze can.</p>
            <h2>How Automation Wins Jobs</h2>
            <ul>
                <li><strong>Instant Acknowledgment:</strong> The customer feels heard immediately.</li>
                <li><strong>Pre-Qualification:</strong> You know if it's a tire-kicker or a massive renovation before you even dial.</li>
                <li><strong>Professionalism:</strong> An automated, branded response looks far better than a generic voicemail full mailbox.</li>
            </ul>
        `
    },
    {
        id: 'ai-changing-hvac-2026',
        title: 'How AI is Changing the HVAC Industry in 2026',
        excerpt: 'From predictive maintenance scheduling to automated seasonal booking, see how top HVAC firms are scaling.',
        category: 'Industry Trends',
        date: 'Jan 15, 2026',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        content: `
            <p>The HVAC industry is undergoing a massive shift. It's no longer just about who can fix a furnace the fastest; it's about who provides the best customer experience.</p>
            <h2>Seasonal Automation</h2>
            <p>Imagine if every one of your past customers received a personalized text in September reminding them to book their furnace tune-up, with a link to your calendar.</p>
            <p>With Frayze, this isn't a fantasy—it's a standard feature. You can fill your shoulder seasons automatically without lifting a finger.</p>
            <h2>24/7 Emergency Triage</h2>
            <p>When a furnace dies at 2 AM in -30C weather, that customer is panicking. Your AI bot can calm them down, confirm you received the message, and flag it as "Urgent" so you wake up to a prioritized job, not just a missed call.</p>
        `
    },
    {
        id: 'missing-opportunities-website',
        title: '5 Signs You\'re Missing Opportunities on Your Website',
        excerpt: 'Is your website a brochure or a sales machine? Check these 5 red flags.',
        category: 'Marketing',
        date: 'Feb 02, 2026',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        content: `
            <p>Most contractor websites in Thunder Bay are digital business cards. They list services and a phone number. That worked in 2015. It doesn't work today.</p>
            <h2>1. No Clear Call-to-Action (CTA)</h2>
            <p>If you don't tell visitors exactly what to do ("Get a Quote", "Book Now"), they will leave.</p>
            <h2>2. Slow Load Speeds</h2>
            <p>If your site takes more than 3 seconds to load on mobile, you've lost 40% of your traffic.</p>
            <h2>3. No Lead Capture</h2>
            <p>A contact form is the bare minimum. You need active engagement tools like chatbots or instant estimators.</p>
        `
    }
];
