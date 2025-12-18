import React from 'react';
import { Snowflake, Droplets, Thermometer, Trash2, Truck, Leaf, Zap, Paintbrush, Home, Sparkles } from 'lucide-react';
// Import hero images
import snowHero from '../assets/snow_hero.png';
import plumbingHero from '../assets/plumbing_hero.png';
import hvacHero from '../assets/hvac_hero.png';
import electricalHero from '../assets/electrical_hero.png';

// Fallback for missing images
const defaultHero = snowHero;

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServiceTypeData {
    title: string;
    description: string;
}

export interface SectionData {
    title: string;
    description: string;
    bullets?: string[];
}

export interface ServiceConfig {
    id: string;
    slug: string;
    name: string;
    icon: React.ReactNode;
    heroImage: string;
    headline: string;
    subheadline: string;
    intro: string;
    subServices: string[]; // Keeping for legacy/related logic or can deprecate
    typesData: ServiceTypeData[]; // New Section 2
    whenToRequest: SectionData; // New Section 3
    whyCompare: string[]; // New Section 5 bullets
    neighborhoods: string[];
    relatedSlugs: string[];
    relatedIntro?: string; // New Contextual Intro
    faqs: FAQ[];
    painTitle: string;
    painText: string;
    leadValue: number;
    active: boolean;
    serviceTypes: string[]; // For Form
    urgencyOptions: string[]; // For Form
}

export const servicesConfig: ServiceConfig[] = [
    {
        id: 'snow',
        slug: 'snow-removal',
        name: 'Snow Removal',
        icon: <Snowflake size={24} />,
        heroImage: snowHero,
        headline: 'Snow Removal Services in Thunder Bay',
        subheadline: 'Compare local providers. Get up to 3 quotes. Professional property clearing.',
        intro: 'Snow removal is an essential home service for many Thunder Bay homeowners. Whether you’re dealing with emergency situations, routine maintenance, or seasonal needs, working with a qualified local provider helps ensure the job is handled safely and efficiently. Thunder Bay Home Services allows homeowners to explore service options, understand what’s involved, and compare available local providers in one place.',
        subServices: ['Residential Snow Removal', 'Commercial Snow Removal', 'Emergency Snow Plowing', 'Seasonal Snow Clearing'],
        typesData: [
            {
                title: 'Residential Snow Removal',
                description: 'Professional clearing for driveways and walkways. Includes shoveling of stairs and entry points to ensure safe access to your home during winter months.'
            },
            {
                title: 'Commercial Snow Removal',
                description: 'Large-scale plowing contracting for parking lots and business fronts. Ensures liability compliance and 24/7 access for customers and staff.'
            },
            {
                title: 'Emergency Snow Plowing',
                description: 'On-demand service for heavy storm events. Ideal for homeowners without a seasonal contract who need immediate driveway access after a major snowfall.'
            },
            {
                title: 'Seasonal Snow Clearing Contracts',
                description: 'Flat-rate seasonal agreements that guarantee service after every snowfall over 5cm. This is the most popular option for worry-free winter maintenance.'
            }
        ],
        whenToRequest: {
            title: 'When Homeowners Typically Request Snow Removal',
            description: 'Homeowners in Thunder Bay typically request snow removal when facing urgent issues, preparing for seasonal changes, or maintaining property safety and compliance.',
            bullets: [
                'Sudden failures or emergencies',
                'Seasonal weather conditions',
                'Property sales or move-ins',
                'Ongoing maintenance needs'
            ]
        },
        whyCompare: [
            'Availability varies by season and demand',
            'Pricing differs based on scope and timing',
            'Not all providers specialize in the same service types',
            'Comparing options helps homeowners make informed decisions'
        ],
        neighborhoods: ['Port Arthur', 'Fort William', 'Westfort', 'Current River', 'Intercity'],
        relatedSlugs: ['landscaping', 'junk-removal', 'moving'],
        relatedIntro: 'Homeowners often schedule snow removal alongside landscaping services and junk removal during seasonal transitions.',
        faqs: [
            { question: 'How much does seasonal snow removal cost in Thunder Bay?', answer: 'Seasonal contracts in Thunder Bay typically range from $400 to $900 depending on driveway size and service frequency. Most providers offer unlimited clearing for snowfalls over 5cm.' },
            { question: 'Do pros offer emergency snow plowing?', answer: 'Yes, many local contractors provide "ASAP" or emergency one-time plowing, especially during heavy Northern Ontario storm events.' },
            { question: 'Are contractors in your network insured?', answer: 'We prioritize connecting you with providers who carry full liability insurance to protect your property during clearing operations.' }
        ],
        painTitle: 'Snow piling up? Driveway blocked?',
        painText: 'We connect you with available snow removal providers in Thunder Bay so you can get service fast—without calling around.',
        leadValue: 25,
        active: true,
        serviceTypes: ['One-time', 'Seasonal', 'Commercial'],
        urgencyOptions: ['ASAP', 'Within 24 hours', 'This week']
    },
    {
        id: 'plumbing',
        slug: 'plumbing',
        name: 'Plumbing',
        icon: <Droplets size={24} />,
        heroImage: plumbingHero,
        headline: 'Plumbing Services in Thunder Bay',
        subheadline: 'Certified local plumbers. Emergency repairs and scheduled maintenance.',
        intro: 'Reliable plumbing is a cornerstone of home maintenance in Northern Ontario. From pipe repairs to full fixture installations, we connect you with licensed Thunder Bay plumbers for any residential or commercial job.',
        subServices: ['Emergency Leak Repair', 'Drain Cleaning', 'Fixture Installation', 'Sump Pump Service'],
        neighborhoods: ['Northwood', 'McKellar Park', 'Sherwood Estates', 'River Terrace'],
        relatedSlugs: ['electrical', 'cleaning', 'roofing'],
        typesData: [
            { title: 'Emergency Plumbing', description: '24/7 response for bursts, leaks, and critical failures.' },
            { title: 'Residential Repair', description: 'Standard maintenance for faucets, toilets, and drains.' }
        ],
        whenToRequest: {
            title: 'When to Call a Plumber',
            description: 'Typically needed for emergency leaks or planned renovations.',
            bullets: ['Leaking pipes', 'Clogged drains', 'New installations']
        },
        whyCompare: ['Verify license status', 'Compare hourly rates', 'Check availability'],
        faqs: [
            { question: 'Who is the best plumber for emergencies in Thunder Bay?', answer: 'Emergency availability changes daily. Our platform matches you instantly with plumbers who are currently on-call and ready to respond to leaks or bursts in the T-Bay area.' },
            { question: 'Do I need a licensed plumber for fixture installation?', answer: 'Yes, hiring a licensed professional ensures your work meets Ontario Building Code standards and protects your home insurance validity.' },
            { question: 'What is the standard hourly rate for plumbers in T-Bay?', answer: 'Standard rates typically fall between $80 and $130 per hour, though emergency after-hours calls may incur a premium.' }
        ],
        painTitle: 'Leaking pipe or clogged drain?',
        painText: 'Don\'t wait for water damage. Connect with available Thunder Bay plumbers who can fix the problem fast.',
        leadValue: 50,
        active: true,
        serviceTypes: ['Emergency Repair', 'Standard Maintenance', 'Installation'],
        urgencyOptions: ['ASAP', 'Within 24 hours', 'Next few days']
    },
    {
        id: 'hvac',
        slug: 'hvac',
        name: 'HVAC / Heating',
        icon: <Thermometer size={24} />,
        heroImage: hvacHero,
        headline: 'Heating & Cooling Services in Thunder Bay',
        subheadline: 'Furnace repairs, AC service, and climate control engineering.',
        intro: 'With Thunder Bay\'s extreme temperature swings, a functional HVAC system is critical. Our network includes specialized heating and cooling technicians who ensure your home stays comfortable year-round.',
        subServices: ['Furnace Repair & Install', 'Air Conditioning Service', 'Smart Thermostat Setup', 'Ventilation Cleaning'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Heating' }, whyCompare: [],
        neighborhoods: ['Hillcrest', 'Grandview', 'Mariday Park', 'Westfort Village'],
        relatedSlugs: ['electrical', 'plumbing', 'roofing'],
        faqs: [
            { question: 'My furnace stopped working in the middle of a cold snap. What should I do?', answer: 'Request an emergency HVAC quote immediately. We prioritize "No Heat" calls by matching you with technicians who offer 24/7 furnace repair in Thunder Bay.' },
            { question: 'How often should I service my AC in Thunder Bay?', answer: 'We recommend an annual tune-up in early spring to ensure your system handles the summer humidity efficiently.' },
            { question: 'Are there rebates for new high-efficiency furnaces in Ontario?', answer: 'Many local HVAC installers can help you navigate provincial and federal energy efficiency rebates for new equipment.' }
        ],
        painTitle: 'Furnace failing in the cold?',
        painText: 'Keep your home safe and warm. We match you with available heating experts in Thunder Bay immediately.',
        leadValue: 75,
        active: true,
        serviceTypes: ['Furnace Repair', 'AC Service', 'Full Installation'],
        urgencyOptions: ['Emergency (No Heat)', 'Within 24 hours', 'Scheduling Quote']
    },
    {
        id: 'junk',
        slug: 'junk-removal',
        name: 'Junk Removal',
        icon: <Trash2 size={24} />,
        heroImage: defaultHero,
        headline: 'Junk Removal & Hauling in Thunder Bay',
        subheadline: 'Professional property clearing. Efficient, local, and reliable.',
        intro: 'Managing property clutter and debris is much easier with professional help. Thunder Bay junk removal services handle everything from residential cleanouts to commercial construction debris hauling.',
        subServices: ['Residential Cleanouts', 'Construction Debris', 'Appliance Disposal', 'Estate Clearing'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Hauling' }, whyCompare: [],
        neighborhoods: ['Lakeside', 'Bay & Algoma', 'Downtown Port Arthur', 'Rosslyn'],
        relatedSlugs: ['moving', 'cleaning', 'landscaping'],
        faqs: [
            { question: 'Do junk removal pros in T-Bay take hazardous materials?', answer: 'Most standard haulers cannot take chemicals, paint, or batteries. We recommend checking with individual providers at the time of your quote.' },
            { question: 'How much does it cost to haul a single appliance?', answer: 'One-item pickups in Thunder Bay typically range from $60 to $120 depending on weight and accessibility.' },
            { question: 'Will haulers do all the heavy lifting?', answer: 'Yes, professional junk removal services include labor—they will take items from wherever they are located on your property.' }
        ],
        painTitle: 'Too much clutter?',
        painText: 'From old furniture to construction debris, get it hauled away by local pros who do the heavy lifting.',
        leadValue: 30,
        active: true,
        serviceTypes: ['Residential Haul', 'Commercial Cleanout', 'Appliance Removal'],
        urgencyOptions: ['ASAP', 'This week', 'Planning ahead']
    },
    {
        id: 'moving',
        slug: 'moving',
        name: 'Moving Services',
        icon: <Truck size={24} />,
        heroImage: defaultHero,
        headline: 'Moving & Transport Services in Thunder Bay',
        subheadline: 'Local and long-distance moving. Specialized transport experts.',
        intro: 'A successful move requires careful planning and reliable hands. We connect you with vetted moving companies in Thunder Bay who understand the logistics of Northern Ontario relocation.',
        subServices: ['Residential Local Moves', 'Long-Distance Transport', 'Packing & Unpacking', 'Piano & Specialty Moving'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Moving' }, whyCompare: [],
        neighborhoods: ['Kakabeka Falls', 'Oliver Paipoonge', 'Shuniah', 'Neebing'],
        relatedSlugs: ['junk-removal', 'cleaning', 'painting'],
        faqs: [
            { question: 'Are moving companies in Thunder Bay licensed and bonded?', answer: 'We feature reputable moving services that carry the necessary cargo and liability insurance for professional transport.' },
            { question: 'How early should I book a mover in T-Bay?', answer: 'For summer moves, we recommend booking at least 4-6 weeks in advance. For mid-winter moves, 2 weeks is often sufficient.' },
            { question: 'Do local movers provide packing supplies?', answer: 'Most providers offer optional packing services and can supply boxes, tape, and padding for an additional fee.' }
        ],
        painTitle: 'Moving soon?',
        painText: 'Get the help you need for a stress-free move. Connect with vetted movers who respect your belongings.',
        leadValue: 50,
        active: true,
        serviceTypes: ['Local Move', 'Long Distance', 'Packing Services'],
        urgencyOptions: ['Specific Date', 'Flexible within 14 days', 'Planning (1 month+)']
    },
    {
        id: 'landscaping',
        slug: 'landscaping',
        name: 'Landscaping',
        icon: <Leaf size={24} />,
        heroImage: defaultHero,
        headline: 'Landscaping Services in Thunder Bay',
        subheadline: 'Estate maintenance, garden design, and lawn care authority.',
        intro: 'Your property\'s exterior is the first thing people see. Thunder Bay\'s landscaping experts provide seasonal care, structural design, and routine maintenance to keep your property beautiful.',
        subServices: ['Lawn Care & Maintenance', 'Garden & Bed Design', 'Interlock & Hardscaping', 'Fall & Spring Cleanup'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Landscaping' }, whyCompare: [],
        neighborhoods: ['River Terrace', 'Mount Forest', 'Parkdale', 'Northwood'],
        relatedSlugs: ['snow-removal', 'roofing', 'junk-removal'],
        faqs: [
            { question: 'When should I start spring lawn cleanup in Thunder Bay?', answer: 'Typically late April to early May, once the ground has thawed and dried sufficiently to avoid soil compaction.' },
            { question: 'Do landscapers offer weekly lawn mowing packages?', answer: 'Yes, most local providers offer seasonal maintenance contracts that include weekly or bi-weekly mowing and trimming.' },
            { question: 'Can you match me with hardscaping specialists for a patio?', answer: 'Yes, we have specialists in our network who focus on interlock, retaining walls, and structural landscape design.' }
        ],
        painTitle: 'Property need an upgrade?',
        painText: 'Ensure your yard looks its best. From weekly mowing to full landscape design, find your pro here.',
        leadValue: 30,
        active: true,
        serviceTypes: ['Lawn Maintenance', 'Landscape Design', 'Sod/Soil/Mulch'],
        urgencyOptions: ['This week', 'This month', 'Getting a Quote']
    },
    {
        id: 'electrical',
        slug: 'electrical',
        name: 'Electrical',
        icon: <Zap size={24} />,
        heroImage: electricalHero,
        headline: 'Electrical Services in Thunder Bay',
        subheadline: 'Certified licensed electricians. Repairs, upgrades, and inspections.',
        intro: 'Safety is the top priority for electrical work. Our directory connects you with fully licensed Thunder Bay electricians who ensure your home or business meets all local safety codes.',
        subServices: ['Residential Wiring', 'Panel Upgrades', 'Commercial Electrical', 'Emergency Repairs'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Wiring' }, whyCompare: [],
        neighborhoods: ['Fort William First Nation', 'Westfort', 'Current River', 'Sherwood Estates'],
        relatedSlugs: ['plumbing', 'hvac', 'painting'],
        faqs: [
            { question: 'Do I need a permit for electrical panel upgrades in Ontario?', answer: 'Yes, all panel upgrades require an ESA permit and inspection. Licensed electricians in our network manage this process for you.' },
            { question: 'What are the signs of faulty electrical wiring in an older T-Bay home?', answer: 'Flickering lights, tripping breakers, and warm outlet plates are critical warning signs that require professional inspection immediately.' },
            { question: 'Can an electrician help with a smart home car charger installation?', answer: 'Yes, we feature licensed professionals who specialize in EV charger installs and smart home integration.' }
        ],
        painTitle: 'Electrical issues or new install?',
        painText: 'Don\'t risk DIY with electricity. Connect with licensed local electricians for a safe, professional job.',
        leadValue: 60,
        active: true,
        serviceTypes: ['Repair/Troubleshooting', 'Panel Upgrade', 'Lighting/Installs'],
        urgencyOptions: ['Emergency/Sparking', 'Within 24 hours', 'Standard Quote']
    },
    {
        id: 'painting',
        slug: 'painting',
        name: 'Painting',
        icon: <Paintbrush size={24} />,
        heroImage: defaultHero,
        headline: 'Professional Painting in Thunder Bay',
        subheadline: 'Interior and exterior specialists. Quality finishes for home and office.',
        intro: 'A fresh coat of paint can transform any space. Working with professional painters in Thunder Bay ensures a clean finish, proper surface prep, and long-lasting durability.',
        subServices: ['Interior House Painting', 'Exterior Siding Painting', 'Cabinet Refinishing', 'Commercial Painting'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Painting' }, whyCompare: [],
        neighborhoods: ['Mariday Park', 'Hillcrest', 'Grandview', 'Victoriaville'],
        relatedSlugs: ['cleaning', 'moving', 'electrical'],
        faqs: [
            { question: 'What is the best time of year for exterior painting in Northern Ontario?', answer: 'Late May through September is the ideal window, when temperatures stay consistently above 10°C overnight for proper drying.' },
            { question: 'Do I need to buy the paint myself?', answer: 'Most pros offer "turnkey" quotes that include high-quality commercial paint. You can also specify a brand if you have a preference.' },
            { question: 'How long does it take to paint a standard 3-bedroom house?', answer: 'A professional crew typically completes a full interior painting project in 3-5 days, depending on trim and ceiling work.' }
        ],
        painTitle: 'Ready for a fresh look?',
        painText: 'Transform your home with a professional paint job. Done fast, done right, with local quality.',
        leadValue: 40,
        active: true,
        serviceTypes: ['Interior Painting', 'Exterior Painting', 'Cabinet/Trim'],
        urgencyOptions: ['Ready to start', 'Within 2 weeks', 'Getting a Quote']
    },
    {
        id: 'roofing',
        slug: 'roofing',
        name: 'Roofing',
        icon: <Home size={24} />,
        heroImage: defaultHero,
        headline: 'Roofing & Shingles in Thunder Bay',
        subheadline: 'Expert roofing repairs and full replacements. Storm damage authority.',
        intro: 'Northern Ontario weather is tough on roofs. Whether you need a quick patch or a full shingle replacement, we connect you with specialized roofing contractors who know the local climate.',
        subServices: ['Shingle Replacement', 'Flat Roof Repairs', 'Gutter & Soffit Work', 'Ice Dam Prevention'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Roofing' }, whyCompare: [],
        neighborhoods: ['Current River', 'Port Arthur', 'Rosslyn', 'Kakabeka'],
        relatedSlugs: ['plumbing', 'hvac', 'landscaping'],
        faqs: [
            { question: 'How do I know if I need a new roof or just a repair?', answer: 'Missing shingles or active ceiling leaks are major red flags. A professional inspection can determine if a localized repair or a full replacement is safer.' },
            { question: 'Can roofing be done in the winter in Thunder Bay?', answer: 'While possible for emergencies, most contractors prefer to wait for temperatures above freezing to ensure proper shingle sealing.' },
            { question: 'Does a new roof increase home value in T-Bay?', answer: 'Yes, a new roof is one of the highest-ROI home improvements, especially for resale in our northern climate.' }
        ],
        painTitle: 'Roof leaking or old shingles?',
        painText: 'Protect your biggest investment. Get your roof inspected and quoted by Thunder Bay\'s best.',
        leadValue: 90,
        active: true,
        serviceTypes: ['Leak Repair', 'New Roof/Reshingle', 'Gutter/Soffit'],
        urgencyOptions: ['Active Leak', 'This Season', 'Planning Quote']
    },
    {
        id: 'cleaning',
        slug: 'cleaning',
        name: 'Cleaning',
        icon: <Sparkles size={24} />,
        heroImage: defaultHero,
        headline: 'Deep Cleaning Services in Thunder Bay',
        subheadline: 'Professional house cleaners. Deep scrubs and move-out specialists.',
        intro: 'Maintaining a pristine home doesn\'t have to be a chore. We connect you with available cleaning professionals in Thunder Bay who manage everything from routine visits to deep move-out cleans.',
        subServices: ['Deep House Cleaning', 'Move-out/In Cleans', 'Recurring Service', 'Commercial Janitorial'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Clean' }, whyCompare: [],
        neighborhoods: ['Sherwood Estates', 'River Terrace', 'McKellar Park', 'Sherbrooke'],
        relatedSlugs: ['moving', 'junk-removal', 'painting'],
        faqs: [
            { question: 'Do local cleaners bring their own supplies?', answer: 'Most professional services are fully equipped with their own vacuums and eco-friendly cleaning solutions.' },
            { question: 'How much does a deep move-out clean cost in Thunder Bay?', answer: 'Prices generally range from $200 to $500 depending on home size and the level of "detailing" required.' },
            { question: 'Can I book a recurring weekly cleaning service?', answer: 'Yes, we match you with reliable cleaners who specialize in scheduled maintenance to keep your home consistently clean.' }
        ],
        painTitle: 'Need a professional deep clean?',
        painText: 'Save time and get a sparkling home. We match you with reliable cleaners who do the hard work.',
        leadValue: 20,
        active: true,
        serviceTypes: ['Deep Clean', 'Move-out Clean', 'Recurring Service'],
        urgencyOptions: ['ASAP', 'Specific Date', 'Flexible']
    }
];
