import React from 'react';
import { Download, ChevronRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeadMagnetProps {
    title: string;
    description: string;
    type: 'checklist' | 'report';
    buttonText: string;
    icon?: React.ReactNode;
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ title, description, type, buttonText }) => {
    const isChecklist = type === 'checklist';
    const bgGradient = isChecklist
        ? 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' // Blue variation
        : 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'; // Green variation

    const accentColor = isChecklist ? '#2563eb' : '#16a34a';

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="lead-magnet-card"
            style={{
                background: bgGradient,
                borderRadius: '16px',
                padding: '2rem',
                border: `1px solid ${isChecklist ? '#bfdbfe' : '#bbf7d0'}`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                maxWidth: '800px',
                margin: '3rem auto',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Visual Icon */}
            <div style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                color: accentColor,
                flexShrink: 0
            }}>
                {isChecklist ? <FileText size={32} /> : <Download size={32} />}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: accentColor,
                    marginBottom: '0.25rem'
                }}>
                    Free Resource
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
                    {title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {description}
                </p>
            </div>

            {/* Action */}
            <div className="hidden-mobile">
                <button
                    className="btn-solid"
                    style={{
                        background: accentColor,
                        border: 'none',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    {buttonText} <ChevronRight size={16} />
                </button>
            </div>

            {/* Mobile Action (Overlay Link) */}
            <a href="#" style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
                <span className="sr-only">{buttonText}</span>
            </a>
        </motion.div>
    );
};

export default LeadMagnet;
