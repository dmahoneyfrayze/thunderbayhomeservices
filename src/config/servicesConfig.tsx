import React from 'react';
import { Snowflake, Droplets, Thermometer, Trash2, Truck, Leaf, Zap, Paintbrush, Home, Sparkles } from 'lucide-react';
// Import hero images
import snowHero from '../assets/images/Snow_Removal_Page_Header.jpg';

import plumbingHero from '../assets/images/Plumbing_Page_Header.jpg';
import hvacHero from '../assets/images/HVAC_Heating_Page_Header.jpg';
import electricalHero from '../assets/images/Electrical_Page_Header.jpg';
import cleaningHero from '../assets/images/Cleaning_Page_Header.jpg';
import junkHero from '../assets/images/Junk_Removal_Page_Header.jpg';
import landscapingHero from '../assets/images/Landscaping_Page_Header.jpg';
import movingHero from '../assets/images/Moving_Services_Page_Header.jpg';
import paintingHero from '../assets/images/Painting_Page_Header.jpg';
import roofingHero from '../assets/images/Roofing_Page_Header.jpg';

// Fallback for missing images removed as all services have specific images

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

export interface CostInfo {
    averageCost: string;
    factors: string[];
    priceTable: { label: string; price: string }[];
    disclaimer: string;
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
    subServices: string[];
    typesData: ServiceTypeData[];
    whenToRequest: SectionData;
    whyCompare: string[];
    neighborhoods: string[];
    relatedSlugs: string[];
    relatedIntro?: string;
    faqs: FAQ[];
    painTitle: string;
    painText: string;
    leadValue: number;
    active: boolean;
    serviceTypes: string[];
    urgencyOptions: string[];
    costInfo: CostInfo;
}

export const servicesConfig: ServiceConfig[] = [
    {
        id: 'snow',
        slug: 'snow-removal',
        name: 'Snow Removal',
        icon: <Snowflake size={24} />,
        heroImage: snowHero,
        headline: 'Snow Removal Services in Thunder Bay',
        subheadline: 'Compare local providers. Request up to 3 quotes for residential or commercial snow removal.',
        intro: 'Snow removal is an essential home service for many Thunder Bay homeowners. In a city with frequent snowfall like Thunder Bay, timely snow removal helps maintain safe access to homes, driveways, and walkways throughout the winter season. Whether you’re dealing with emergency situations, routine maintenance, or seasonal needs, working with a qualified local provider helps ensure the job is handled safely and efficiently. Thunder Bay Home Services allows homeowners to explore service options, understand what’s involved, and compare available local providers in one place.',
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
                description: 'Flat-rate seasonal agreements that guarantee service after each qualifying snowfall based on the provider’s service agreement. This is the most popular option for worry-free winter maintenance.'
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
            { question: 'How much does snow removal cost in Thunder Bay?', answer: 'Snow removal costs vary based on property size, service type, and frequency. One-time services, emergency plowing, and seasonal contracts are typically priced differently. Comparing local providers helps clarify available options.' },
            { question: 'Is emergency snow removal available in Thunder Bay?', answer: 'Many providers offer emergency or same-day snow removal during heavy snowfall, though availability may be limited during peak weather events.' },
            { question: 'What types of snow removal services are offered?', answer: 'Snow removal services may include driveway clearing, walkway shoveling, parking lot plowing, and seasonal snow management contracts.' },
            { question: 'What information should I provide when requesting snow removal?', answer: 'Homeowners are typically asked to provide their address, property type, service urgency, and whether the request is one-time or seasonal.' },
            { question: 'How quickly can snow removal be scheduled during heavy snowfall?', answer: 'Response times depend on weather conditions and provider availability. During major storms, providers may prioritize contracted clients, but emergency or same-day service may still be available depending on demand.' }
        ],
        painTitle: 'Snow piling up? Driveway blocked?',
        painText: 'We connect you with available snow removal providers in Thunder Bay so you can get service fast—without calling around.',
        leadValue: 25,
        active: true,
        serviceTypes: ['One-time', 'Seasonal', 'Commercial'],
        urgencyOptions: ['ASAP', 'Within 24 hours', 'This week'],
        costInfo: {
            averageCost: "$40 – $75 per visit",
            factors: ["Driveway Size (Single vs Double)", "Snowfall Accumulation", "Frequency of Service", "Salting/Sanding Requirements"],
            priceTable: [
                { label: "Single Visit (Standard Driveway)", price: "$40 - $75" },
                { label: "Seasonal Contract (Nov-Apr)", price: "$600 - $1,200" },
                { label: "Emergency / Holiday Service", price: "$100 - $150+" },
                { label: "Walkway Shoveling Add-on", price: "$15 - $30" }
            ],
            disclaimer: "Prices vary based on accumulated snow depth and specific property conditions. Seasonal contracts typically cover unlimited snowfall up to a daily limit."
        }
    },
    {
        id: 'plumbing',
        slug: 'plumbing',
        name: 'Plumbing',
        icon: <Droplets size={24} />,
        heroImage: plumbingHero,
        headline: 'Plumbing Services in Thunder Bay',
        subheadline: 'Compare local plumbers. Request up to 3 quotes for repairs, installations, or emergency service.',
        intro: 'Reliable plumbing is a cornerstone of home maintenance in Northern Ontario. Timely plumbing repairs prevent water damage and ensure your home systems run efficiently year-round. From pipe repairs to full fixture installations, we connect you with licensed Thunder Bay plumbers for any residential or commercial job.',
        subServices: ['Emergency Leak Repair', 'Drain Cleaning', 'Fixture Installation', 'Sump Pump Service'],
        neighborhoods: ['Northwood', 'McKellar Park', 'Sherwood Estates', 'River Terrace', 'Westfort', 'Current River'],
        relatedSlugs: ['electrical', 'cleaning', 'roofing'],
        relatedIntro: 'Plumbing projects often require coordination with other trades. Homeowners frequently request electrician services for water heater installs or cleaning services after major repairs.',
        typesData: [
            { title: 'Emergency Plumbing', description: 'Immediate response for active leaks, burst pipes, and sewer backups.' },
            { title: 'Fixture Installation', description: 'Professional installation of toilets, sinks, faucets, and showers.' }
        ],
        whenToRequest: {
            title: 'Common Plumbing Requests',
            description: 'Professional assistance is recommended for both urgent failures and planned upgrades.',
            bullets: ['Active water leaks', 'Clogged or slow drains', 'Bathroom renovations', 'Appliance hookups']
        },
        whyCompare: ['Verify licensing and insurance', 'Compare hourly labour rates', 'Check emergency availability'],
        faqs: [
            { question: 'How are plumbing costs determined in Thunder Bay?', answer: 'Plumbing costs typically depend on the complexity of the job, materials required, and timing. Emergency after-hours calls often incur a premium compared to scheduled Maintenance.' },
            { question: 'Is emergency plumbing available in Thunder Bay?', answer: 'Yes, many local plumbers offer 24/7 response for critical issues like burst pipes or sewage backups that threaten property safety.' },
            { question: 'What are common plumbing services offered?', answer: 'Services range from leak detection and drain cleaning to full bathroom renovations and water heater installations.' },
            { question: 'What details should I provide to get a plumbing quote?', answer: 'It is helpful to provide a description of the issue, photos if possible, the age of your plumbing system, and your preferred timeline.' },
            { question: 'How quickly can a plumber respond to an emergency?', answer: 'Response times vary by provider and demand. For active leaks or flooding, many providers strive for same-day or immediate service to mitigate damage.' }
        ],
        painTitle: 'Leaking pipe or clogged drain?',
        painText: 'Don\'t wait for water damage. Connect with available Thunder Bay plumbers who can fix the problem fast.',
        leadValue: 50,
        active: true,
        serviceTypes: ['Emergency Repair', 'Standard Maintenance', 'Installation'],
        urgencyOptions: ['ASAP', 'Within 24 hours', 'Next few days'],
        costInfo: {
            averageCost: "$100 – $200 Service Call",
            factors: ["Time of Day (Emergency vs Standard)", "Material Costs", "Access Difficulty", "Complexity of Diagnostics"],
            priceTable: [
                { label: "Standard Service Call / Diagnosis", price: "$100 - $180" },
                { label: "Drain Cleaning (Snaking)", price: "$150 - $300" },
                { label: "Faucet Replacement (Labor)", price: "$120 - $250" },
                { label: "Toilet Installation", price: "$150 - $350" }
            ],
            disclaimer: "Final pricing depends on parts required and extent of damage found during diagnosis. Emergency after-hours calls typically incur a premium."
        }
    },
    {
        id: 'hvac',
        slug: 'hvac',
        name: 'HVAC / Heating',
        icon: <Thermometer size={24} />,
        heroImage: hvacHero,
        headline: 'Heating & Cooling Services in Thunder Bay',
        subheadline: 'Compare local HVAC technicians. Request up to 3 quotes for furnace repairs, AC service, or installations.',
        intro: 'With Thunder Bay\'s extreme temperature swings, a functional HVAC system is critical. Routine maintenance and timely repairs ensure your home stays safe and comfortable through the harshest winters and humid summers. Our network includes specialized heating and cooling technicians who ensure your home stays comfortable year-round.',
        subServices: ['Furnace Repair & Install', 'Air Conditioning Service', 'Smart Thermostat Setup', 'Ventilation Cleaning'],
        typesData: [],
        whenToRequest: { title: 'Needs', description: 'Heating' },
        whyCompare: [],
        neighborhoods: ['Hillcrest', 'Grandview', 'Mariday Park', 'Westfort Village', 'Port Arthur', 'Rosslyn'],
        relatedSlugs: ['electrical', 'plumbing', 'roofing'],
        relatedIntro: 'HVAC systems involve complex electrical components. Homeowners often inquire about electrical services alongside furnace or AC installations.',
        faqs: [
            { question: 'What is the difference between HVAC repair and maintenance?', answer: 'Repair focuses on fixing a broken system, while maintenance involves routine inspections and cleaning to prevent future breakdowns.' },
            { question: 'Are emergency heating services available in winter?', answer: 'Yes, during cold snaps, many Thunder Bay HVAC providers prioritize "no heat" calls to ensure homeowner safety.' },
            { question: 'When is the best time to schedule HVAC service?', answer: 'It is best to schedule furnace maintenance in early fall and AC maintenance in spring to beat the seasonal rush.' },
            { question: 'What information is needed for an HVAC quote?', answer: 'Providers typically need to know the age of your system, the fuel type (gas/electric), and a description of the problem.' },
            { question: 'How quickly can I get furnace repair in an emergency?', answer: 'During extreme cold, providers often prioritize "no-heat" situations. Response times depend on current demand and weather conditions.' }
        ],
        painTitle: 'Furnace failing in the cold?',
        painText: 'Keep your home safe and warm. We match you with available heating experts in Thunder Bay immediately.',
        leadValue: 75,
        active: true,
        serviceTypes: ['Furnace Repair', 'AC Service', 'Full Installation'],
        urgencyOptions: ['Emergency (No Heat)', 'Within 24 hours', 'Scheduling Quote'],
        costInfo: {
            averageCost: "$120 – $250 Maintenance",
            factors: ["System Age & Type", "Parts Required (Motors, Boards)", "Warranty Status", "Accessibility"],
            priceTable: [
                { label: "Furnace Maintenance / Tune-up", price: "$120 - $180" },
                { label: "Diagnostic Visit", price: "$100 - $160" },
                { label: "Thermostat Installation", price: "$100 - $200" },
                { label: "Emergency No-Heat Call", price: "$200 - $350" }
            ],
            disclaimer: "Diagnostic fees are often waived if major repairs are authorized. Costs for parts vary significantly by brand and model."
        }
    },
    {
        id: 'junk',
        slug: 'junk-removal',
        name: 'Junk Removal',
        icon: <Trash2 size={24} />,
        heroImage: junkHero,
        headline: 'Junk Removal & Hauling in Thunder Bay',
        subheadline: 'Compare local junk removal services. Request up to 3 quotes for residential or commercial hauling.',
        intro: 'Managing property clutter and debris is much easier with professional help. Clearing out unwanted items helps reclaim space and can improve property safety and value. Thunder Bay junk removal services handle everything from residential cleanouts to commercial construction debris hauling.',
        subServices: ['Residential Cleanouts', 'Construction Debris', 'Appliance Disposal', 'Estate Clearing'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Hauling' }, whyCompare: [],
        neighborhoods: ['Lakeside', 'Bay & Algoma', 'Downtown Port Arthur', 'Rosslyn', 'Westfort'],
        relatedSlugs: ['moving', 'cleaning', 'landscaping'],
        relatedIntro: 'Junk removal is frequently paired with moving services or deep cleaning when preparing a home for sale or clearing out a rental unit.',
        faqs: [
            { question: 'How is junk removal pricing calculated?', answer: 'Pricing is generally based on the volume of space your items take up in the truck, as well as the time and labor required to load them.' },
            { question: 'What items can be taken by junk removal services?', answer: 'Most providers accept furniture, appliances, yard waste, and general household debris. Hazardous materials typically require special handling.' },
            { question: 'Is same-day junk removal available?', answer: 'Availability varies, but many local providers strive to accommodate same-day or next-day requests for urgent cleanouts.' },
            { question: 'What should I do to prepare for junk removal?', answer: 'Consolidating items into one area can speed up the process, but professional crews can also remove items from where they sit in your home.' },
            { question: 'Can junk removal services handle large heavy items?', answer: 'Yes, most services are equipped to handle appliances, furniture, and other heavy items, provided they can be safely moved.' }
        ],
        painTitle: 'Too much clutter?',
        painText: 'From old furniture to construction debris, get it hauled away by local pros who do the heavy lifting.',
        leadValue: 30,
        active: true,
        serviceTypes: ['Residential Haul', 'Commercial Cleanout', 'Appliance Removal'],
        urgencyOptions: ['ASAP', 'This week', 'Planning ahead'],
        costInfo: {
            averageCost: "$100 – $600 per load",
            factors: ["Volume (Truck Space Used)", "Weight of Debris", "Type of Items (Hazardous/Electronics)", "Location & Access"],
            priceTable: [
                { label: "Minimum Charge (Single Item)", price: "$80 - $120" },
                { label: "1/4 Truck Load", price: "$150 - $250" },
                { label: "1/2 Truck Load", price: "$300 - $450" },
                { label: "Full Truck Load", price: "$500 - $800" }
            ],
            disclaimer: "Heavy materials like concrete or shingles may have surcharges due to weight limits. Hazardous waste handling requires special quoting."
        }
    },
    {
        id: 'moving',
        slug: 'moving',
        name: 'Moving Services',
        icon: <Truck size={24} />,
        heroImage: movingHero,
        headline: 'Moving & Transport Services in Thunder Bay',
        subheadline: 'Compare local movers. Request up to 3 quotes for local or long-distance moves.',
        intro: 'A successful move requires careful planning and reliable hands. Professional movers ensure your belongings are transported safely, reducing stress and the risk of damage. We connect you with vetted moving companies in Thunder Bay who understand the logistics of Northern Ontario relocation.',
        subServices: ['Residential Local Moves', 'Long-Distance Transport', 'Packing & Unpacking', 'Piano & Specialty Moving'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Moving' }, whyCompare: [],
        neighborhoods: ['Kakabeka Falls', 'Oliver Paipoonge', 'Shuniah', 'Neebing', 'Port Arthur', 'Fort William'],
        relatedSlugs: ['junk-removal', 'cleaning', 'painting'],
        relatedIntro: 'Moving usually triggers other home services. Residents often schedule junk removal before a move and cleaning or painting services before moving into a new space.',
        faqs: [
            { question: 'What factors affect the cost of moving services?', answer: 'Costs are influenced by the distance of the move, the weight/volume of items, and additional services like packing or assembly.' },
            { question: 'How far in advance should I book a mover in Thunder Bay?', answer: 'Ideally, booking 4-6 weeks in advance ensures availability, especially during the busy summer moving season.' },
            { question: 'Do movers offer packing services?', answer: 'Yes, many moving companies offer full or partial packing services to ensure your belongings are professionally secured.' },
            { question: 'What information do movers need for an accurate quote?', answer: 'You should provide a detailed inventory list, access details (stairs/elevators), and both pick-up and drop-off addresses.' }
        ],
        painTitle: 'Moving soon?',
        painText: 'Get the help you need for a stress-free move. Connect with vetted movers who respect your belongings.',
        leadValue: 50,
        active: true,
        serviceTypes: ['Local Move', 'Long Distance', 'Packing Services'],
        urgencyOptions: ['Specific Date', 'Flexible within 14 days', 'Planning (1 month+)'],
        costInfo: {
            averageCost: "$130 – $180 per hour",
            factors: ["Number of Movers (2 vs 3)", "Distance of Move", "Stairs/Elevators", "Packing Services Info"],
            priceTable: [
                { label: "2 Movers + Truck (Hourly)", price: "$130 - $160/hr" },
                { label: "3 Movers + Truck (Hourly)", price: "$180 - $220/hr" },
                { label: "Travel Time Fee", price: "+1 Hour Labor" },
                { label: "Piano Moving Surcharge", price: "$200 - $500" }
            ],
            disclaimer: "Most local moves have a minimum charge (e.g., 3-4 hours). Packing materials are typically billed separately."
        }
    },
    {
        id: 'landscaping',
        slug: 'landscaping',
        name: 'Landscaping',
        icon: <Leaf size={24} />,
        heroImage: landscapingHero,
        headline: 'Landscaping Services in Thunder Bay',
        subheadline: 'Compare local landscaping pros. Request up to 3 quotes for maintenance, design, or seasonal cleanup.',
        intro: 'Your property\'s exterior is the first thing people see. Consistent landscaping care not only improves curb appeal but also protects your property from seasonal wear. Thunder Bay\'s landscaping experts provide seasonal care, structural design, and routine maintenance to keep your property beautiful.',
        subServices: ['Lawn Care & Maintenance', 'Garden & Bed Design', 'Interlock & Hardscaping', 'Fall & Spring Cleanup'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Landscaping' }, whyCompare: [],
        neighborhoods: ['River Terrace', 'Mount Forest', 'Parkdale', 'Northwood', 'Current River', 'Westfort'],
        relatedSlugs: ['snow-removal', 'roofing', 'junk-removal'],
        relatedIntro: 'Landscaping providers often offer year-round property care. Many homeowners bundle summer lawn care with winter snow removal contracts for consistency.',
        faqs: [
            { question: 'When is landscaping service typically available in Thunder Bay?', answer: 'The landscaping season generally runs from May to October, weather permitting. Spring cleanup starts once the ground thaws.' },
            { question: 'Do I need a contract for lawn maintenance?', answer: 'While one-time cuts are available, most providers prioritize seasonal contracts that guarantee weekly or bi-weekly visits.' },
            { question: 'How does weather affect landscaping schedules?', answer: 'Rain or severe weather can delay service. Providers typically reschedule for the next dry day to ensure quality results.' },
            { question: 'What details help with a landscaping request?', answer: 'Providing your lot size, specific service needs (mowing vs design), and any access restrictions helps providers quote accurately.' }
        ],
        painTitle: 'Property need an upgrade?',
        painText: 'Ensure your yard looks its best. From weekly mowing to full landscape design, find your pro here.',
        leadValue: 30,
        active: true,
        serviceTypes: ['Lawn Maintenance', 'Landscape Design', 'Sod/Soil/Mulch'],
        urgencyOptions: ['This week', 'This month', 'Getting a Quote'],
        costInfo: {
            averageCost: "$50 – $100 per visit",
            factors: ["Lot Size", "Frequency (Weekly vs Bi-Weekly)", "Detailing Required (Trimming/Edging)", "Waste Removal"],
            priceTable: [
                { label: "Weekly Lawn Mowing (Std. Lot)", price: "$50 - $80" },
                { label: "Spring/Fall Cleanup", price: "$250 - $500" },
                { label: "Garden Bed Weeding (Hourly)", price: "$50 - $80/hr" },
                { label: "Sod Installation (per sqft)", price: "$1.50 - $3.00" }
            ],
            disclaimer: "Landscaping quotes are highly dependent on the specific terrain and current condition of the property. Contracts often offer discounted per-visit rates."
        }
    },
    {
        id: 'electrical',
        slug: 'electrical',
        name: 'Electrical',
        icon: <Zap size={24} />,
        heroImage: electricalHero,
        headline: 'Electrical Services in Thunder Bay',
        subheadline: 'Compare local electricians. Request up to 3 quotes for repairs, upgrades, or new installations.',
        intro: 'Safety is the top priority for electrical work. Proper installation and maintenance prevent hazards and ensure consistent power for your home or business. Our directory connects you with fully licensed Thunder Bay electricians who ensure your home or business meets all local safety codes.',
        subServices: ['Residential Wiring', 'Panel Upgrades', 'Commercial Electrical', 'Emergency Repairs'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Wiring' }, whyCompare: [],
        neighborhoods: ['Fort William First Nation', 'Westfort', 'Current River', 'Sherwood Estates', 'Port Arthur'],
        relatedSlugs: ['plumbing', 'hvac', 'painting'],
        relatedIntro: 'Electrical work is fundamental to many renovations. It is common to coordinate electricians with plumbers for bathroom renos or painters for post-wiring drywall repairs.',
        faqs: [
            { question: 'Do I need a permit for electrical work in Thunder Bay?', answer: 'Most electrical alterations require an ESA permit. Licensed electricians will handle the permitting and inspection process for you.' },
            { question: 'what qualifies as an electrical emergency?', answer: 'Sparks, burning smells, smoking outlets, or complete power loss are emergencies that require immediate professional attention.' },
            { question: 'Can electricians help with smart home installations?', answer: 'Yes, many electricians specialize in installing smart thermostats, video doorbells, and EV charging stations.' },
            { question: 'What should I verify before hiring an electrician?', answer: 'Always verify that the electrician is ECRA/ESA licensed to ensure the work is safe, legal, and insurable.' },
            { question: 'How do I handle an urgent electrical issue?', answer: 'If there is a risk of fire or immediate danger, call emergency services. For other urgent issues like power loss, contact a licensed emergency electrician immediately.' }
        ],
        painTitle: 'Electrical issues or new install?',
        painText: 'Don\'t risk DIY with electricity. Connect with licensed local electricians for a safe, professional job.',
        leadValue: 60,
        active: true,
        serviceTypes: ['Repair/Troubleshooting', 'Panel Upgrade', 'Lighting/Installs'],
        urgencyOptions: ['Emergency/Sparking', 'Within 24 hours', 'Standard Quote'],
        costInfo: {
            averageCost: "$110 – $180 per hour",
            factors: ["Complexity of Diagnostics", "ESA Permit Fees", "Material Costs (Wire/Breakers)", "Emergency Timing"],
            priceTable: [
                { label: "Service Call / Troubleshooting", price: "$120 - $200" },
                { label: "Outlet / Switch Install", price: "$150 - $250" },
                { label: "Panel Upgrade (100 to 200A)", price: "$2,500 - $4,000" },
                { label: "EV Charger Installation", price: "$800 - $1,500" }
            ],
            disclaimer: "All electrical work includes safety inspections. ESA permits (if required) are an additional cost handled by the contractor."
        }
    },
    {
        id: 'painting',
        slug: 'painting',
        name: 'Painting',
        icon: <Paintbrush size={24} />,
        heroImage: paintingHero,
        headline: 'Professional Painting in Thunder Bay',
        subheadline: 'Compare local painters. Request up to 3 quotes for interior or exterior painting projects.',
        intro: 'A fresh coat of paint can transform any space. Professional painting not only enhances aesthetics but also protects surfaces from ear and tear. Working with professional painters in Thunder Bay ensures a clean finish, proper surface prep, and long-lasting durability.',
        subServices: ['Interior House Painting', 'Exterior Siding Painting', 'Cabinet Refinishing', 'Commercial Painting'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Painting' }, whyCompare: [],
        neighborhoods: ['Mariday Park', 'Hillcrest', 'Grandview', 'Victoriaville', 'Current River', 'Westfort'],
        relatedSlugs: ['cleaning', 'moving', 'electrical'],
        relatedIntro: 'Painting is the finishing touch on many projects. Homeowners often schedule painters after electrical upgrades or prior to moving in.',
        faqs: [
            { question: 'When is the best time for exterior painting in Thunder Bay?', answer: 'Exterior painting is best done between late spring and early fall when temperatures and humidity levels ensure proper curing.' },
            { question: 'Do painters provide the paint?', answer: 'Many professional painters include high-quality paint in their quote, but you can often supply your own specific brand if preferred.' },
            { question: 'How much prep work is required only my end?', answer: 'Painters usually handle masking and drop cloths, but you may need to move small breakables and clear wall hangings.' },
            { question: 'How is painting cost estimated?', answer: 'Costs are typically based on the square footage of wall/ceiling surface, ceiling height, and the amount of trim or detail work.' }
        ],
        painTitle: 'Ready for a fresh look?',
        painText: 'Transform your home with a professional paint job. Done fast, done right, with local quality.',
        leadValue: 40,
        active: true,
        serviceTypes: ['Interior Painting', 'Exterior Painting', 'Cabinet/Trim'],
        urgencyOptions: ['Ready to start', 'Within 2 weeks', 'Getting a Quote'],
        costInfo: {
            averageCost: "$1.50 – $3.50 per sqft",
            factors: ["Surface Condition (Prep needed)", "Ceiling Height", "Number of Colors", "Paint Grade Selection"],
            priceTable: [
                { label: "Average Bedroom (Walls)", price: "$300 - $500" },
                { label: "Interior Trim / Doors (per opening)", price: "$50 - $100" },
                { label: "Kitchen Cabinet Refinishing", price: "$2,500 - $5,000" },
                { label: "Whole Home Interior (2000 sqft)", price: "$4,000 - $8,000" }
            ],
            disclaimer: "Prices assume standard prep. Extensive drywall repair or wallpaper removal will increase labor hours significantly."
        }
    },
    {
        id: 'roofing',
        slug: 'roofing',
        name: 'Roofing',
        icon: <Home size={24} />,
        heroImage: roofingHero,
        headline: 'Roofing & Shingles in Thunder Bay',
        subheadline: 'Compare local roofing contractors. Request up to 3 quotes for repairs, replacements, or inspections.',
        intro: 'Northern Ontario weather is tough on roofs. A well-maintained roof is your home\'s first line of defense against snow, rain, and ice. Whether you need a quick patch or a full shingle replacement, we connect you with specialized roofing contractors who know the local climate.',
        subServices: ['Shingle Replacement', 'Flat Roof Repairs', 'Gutter & Soffit Work', 'Ice Dam Prevention'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Roofing' }, whyCompare: [],
        neighborhoods: ['Current River', 'Port Arthur', 'Rosslyn', 'Kakabeka', 'Northwood', 'Westfort'],
        relatedSlugs: ['plumbing', 'hvac', 'landscaping'],
        relatedIntro: 'Roofing protects everything below it. Leaks often require follow-up work from plumbers (vents/stacks) or HVAC technicians.',
        faqs: [
            { question: 'How do I know if I need a repair or a full replacement?', answer: 'A widespread loss of granules, curling shingles, or multiple leaks usually indicate replacement is needed, while isolated damage may only need repair.' },
            { question: 'Can roofing work be done in the winter?', answer: 'Emergency repairs are possible, but full replacements are best scheduled for warmer months to ensure shingles seal properly.' },
            { question: 'How long does a roofing project take?', answer: 'Most residential roof replacements in Thunder Bay are completed within 1-2 days, weather permitting.' },
            { question: 'What signs indicate I need a roof inspection?', answer: 'Missing shingles, daylight in the attic, or water stains on your ceiling are clear signs you should request a professional inspection.' },
            { question: 'Do roofers handle emergency leaks?', answer: 'Yes, many roofing companies offer tarping and emergency repair services to stop water intrusion until permanent repairs can be made.' }
        ],
        painTitle: 'Roof leaking or old shingles?',
        painText: 'Protect your biggest investment. Get your roof inspected and quoted by Thunder Bay\'s best.',
        leadValue: 90,
        active: true,
        serviceTypes: ['Leak Repair', 'New Roof/Reshingle', 'Gutter/Soffit'],
        urgencyOptions: ['Active Leak', 'This Season', 'Planning Quote'],
        costInfo: {
            averageCost: "$5,000 – $12,000 (New Roof)",
            factors: ["Roof Pitch & Complexity", "Layers to Remove", "Shingle Quality (3-tab vs Architectural)", "Venting Upgrades"],
            priceTable: [
                { label: "Minor Leak Repair", price: "$300 - $600" },
                { label: "Asphalt Shingle Replacement (per sqft)", price: "$4.50 - $7.00" },
                { label: "Roof Vent / Flashing Repair", price: "$250 - $500" },
                { label: "Average Bungalow Re-roof", price: "$5,000 - $8,000" }
            ],
            disclaimer: "Roofing estimates require an on-site inspection to determine the number of layers and structural integrity of decking."
        }
    },
    {
        id: 'cleaning',
        slug: 'cleaning',
        name: 'Cleaning',
        icon: <Sparkles size={24} />,
        heroImage: cleaningHero,
        headline: 'Deep Cleaning Services in Thunder Bay',
        subheadline: 'Compare local cleaning services. Request up to 3 quotes for deep cleans, move-outs, or recurring scheduled.',
        intro: 'Maintaining a pristine home doesn\'t have to be a chore. Regular professional cleaning contributes to a healthier living environment and frees up your time. We connect you with available cleaning professionals in Thunder Bay who manage everything from routine visits to deep move-out cleans.',
        subServices: ['Deep House Cleaning', 'Move-out/In Cleans', 'Recurring Service', 'Commercial Janitorial'],
        typesData: [], whenToRequest: { title: 'Needs', description: 'Clean' }, whyCompare: [],
        neighborhoods: ['Sherwood Estates', 'River Terrace', 'McKellar Park', 'Sherbrooke', 'Port Arthur', 'Westfort'],
        relatedSlugs: ['moving', 'junk-removal', 'painting'],
        relatedIntro: 'Cleaning often signals a transition. It is the final step in moving or renovations, often following junk removal or painting.',
        faqs: [
            { question: 'What is included in a deep clean?', answer: 'Deep cleaning goes beyond surface wipe-downs, often including baseboards, inside appliances, and hard-to-reach areas.' },
            { question: 'How long does a standard house cleaning take?', answer: 'Timing depends on the size of your home and its condition, but a standard visit often takes 2-4 hours.' },
            { question: 'Do I need to be home during the cleaning?', answer: 'No, many homeowners arrange entry via key or lockbox. Professionals are insured and vetted for your peace of mind.' },
            { question: 'What information helps provide an accurate cleaning quote?', answer: 'The number of bedrooms/bathrooms, total square footage, and specific focus areas determine the scope and cost.' }
        ],
        painTitle: 'Need a professional deep clean?',
        painText: 'Save time and get a sparkling home. We match you with reliable cleaners who do the hard work.',
        leadValue: 20,
        active: true,
        serviceTypes: ['Deep Clean', 'Move-out Clean', 'Recurring Service'],
        urgencyOptions: ['ASAP', 'Specific Date', 'Flexible'],
        costInfo: {
            averageCost: "$45 – $65 per hour",
            factors: ["Home Size (Labor Hours)", "Pets / Soil Level", "Deep Clean vs Maintenance", "Supplies Provided"],
            priceTable: [
                { label: "Standard Cleaning (3 Bed, 2 Bath)", price: "$140 - $200" },
                { label: "Deep / Move-out Clean", price: "$300 - $500" },
                { label: "Carpet Steam Cleaning (per room)", price: "$40 - $70" },
                { label: "Bi-Weekly Maintenance", price: "$120 - $160" }
            ],
            disclaimer: "First-time cleans are often billed as a deep clean to establish a baseline. Recurring services are typically flat-rated after the initial visit."
        }
    }
];
