export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    content: string; // Storing as HTML/Markdown string for now
    imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'cost-of-snow-removal-thunder-bay-2024',
        title: 'How Much Does Snow Removal Cost in Thunder Bay? (2024/2025 Guide)',
        excerpt: 'Breaking down the prices for seasonal contracts vs. per-visit plowing in Thunder Bay. Know what to pay before the snow flies.',
        author: 'TB Home Team',
        date: 'Dec 10, 2024',
        category: 'Cost Guides',
        readTime: '5 min read',
        imageUrl: '/assets/images/snow-hero.png', // Reusing existing hero for now
        content: `
            <h2>Understanding Snow Removal Rates in 2025</h2>
            <p>Living in Thunder Bay means dealing with serious snow. But how much should you set aside for professional clearing? Prices have adjusted slightly this season due to fuel and insurance costs.</p>
            
            <h3>Seasonal Contract vs. Per-Visit</h3>
            <p>Most homeowners choose between two models:</p>
            <ul>
                <li><strong>Seasonal Contracts ($500 - $900):</strong> You pay a flat fee upfront. The contractor clears your driveway every time snow accumulation exceeds 5cm. This is the best value for trusted coverage all winter.</li>
                <li><strong>Per-Visit / Emergency ($60 - $120):</strong> You pay for a single clear. This is great if you usually shovel yourself but need help during a massive storm, though availability is harder to find during peak events.</li>
            </ul>

            <h3>Factors That Affect Your Quote</h3>
            <p>Contractors will look at three main things:</p>
            <ol>
                <li><strong>Driveway Size:</strong> A standard double car driveway is the baseline. Long rural driveways cost significantly more.</li>
                <li><strong>Obstacles:</strong> Retaining walls, narrow passages, or steep gradients can increase the price.</li>
                <li><strong>Walkway Shoveling:</strong> Do you need the path to the front door cleared? This is usually an add-on service.</li>
            </ol>

            <h3>Is it Worth It?</h3>
            <p>Considering the heavy, wet snow we get from Lake Superior, preserving your back and ensuring you can get to work on time often makes the professional investment worthwhile. <a href='/snow-removal'>Get 3 free quotes today</a> to compare local rates.</p>
        `
    },
    {
        id: '2',
        slug: 'emergency-plumbing-tips-thunder-bay',
        title: '5 Things to Do Before the Plumber Arrives (Frozen Pipe Edition)',
        excerpt: 'Thunder Bay winters are tough on pipes. Here is what to do immediately if you suspect a frozen or burst pipe to minimize damage.',
        author: 'Sarah Jenkins, Licensed Plumber',
        date: 'Nov 22, 2024',
        category: 'Maintenance',
        readTime: '4 min read',
        content: `
            <h2>Don't Panic: Act Fast</h2>
            <p>When the temperature drops to -30°C, frozen pipes are a common nightmare in Thunder Bay. If you turn on the tap and only a trickle comes out, you might have a freeze.</p>

            <h3>1. Shut Off the Main Water Valve</h3>
            <p>If a pipe bursts, gallons of water can flood your home in minutes. Know where your main shut-off is (usually in the basement near the water meter) and turn it off immediately.</p>

            <h3>2. Open the Faucets</h3>
            <p>Open the faucet connected to the frozen pipe. As you melt the frozen area, water will begin to flow. Running water helps melt ice in the pipe.</p>

            <h3>3. Apply Gentle Heat</h3>
            <p>Use a hair dryer or electric heating pad on the suspected frozen section. <strong>NEVER</strong> use an open flame like a blowtorch—this is a fire hazard and can damage the pipe.</p>

            <h3>4. Check for Other Leaks</h3>
            <p>Water expands when it freezes, which often cracks the pipe. Even if you thaw it, you might have a leak waiting to happen once functionality returns.</p>

            <p>If you can't locate the freeze or if a pipe has already burst, <a href='/plumbing'>call an emergency plumber</a> immediately.</p>
        `
    },
    {
        id: '3',
        slug: 'fall-home-maintenance-checklist-northern-ontario',
        title: 'The Ultimate Fall Maintenance Checklist for Northern Ontario Homes',
        excerpt: 'Prepare your home for the deep freeze. Gutters, furnaces, and draft-proofing tips specifically for our climate.',
        author: 'TB Home Team',
        date: 'Oct 15, 2024',
        category: 'Seasonal Prep',
        readTime: '6 min read',
        content: `
            <h2>Beat the Freeze</h2>
            <p>Winter in Northern Ontario is no joke. A weekend of preventative maintenance in October can save you thousands in repairs come January.</p>

            <h3>Exterior Checklist</h3>
            <ul>
                <li><strong>Gutters:</strong> Clear out leaves. Clogged gutters lead to ice dams, which force water under your shingles and into your ceiling.</li>
                <li><strong>Garden Hoses:</strong> Disconnect and drain them. A hose left attached can cause the pipe inside the wall to freeze and burst.</li>
                <li><strong>Cracks:</strong> Seal gaps around windows and doors with exterior-grade caulking.</li>
            </ul>

            <h3>Interior Systems</h3>
            <p>Your furnace is your lifeline. Change the filter now. If it hasn't been serviced in 2 years, <a href='/hvac'>book a tune-up</a> before the busy season starts.</p>
        `
    }
];
