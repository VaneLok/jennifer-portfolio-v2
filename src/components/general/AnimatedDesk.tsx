import React from 'react';

interface AnimatedDeskProps {
    style?: React.CSSProperties;
}

const AnimatedDesk: React.FC<AnimatedDeskProps> = ({ style }) => {
    return (
        <div className="animated-desk" style={style}>
            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                {/* Desk surface */}
                <rect x="6" y="20" width="36" height="6" fill="#654321" className="desk-part surface"/>
                
                {/* Desk legs */}
                <rect x="6" y="26" width="4" height="16" fill="#654321" className="desk-part leg-1"/>
                <rect x="38" y="26" width="4" height="16" fill="#654321" className="desk-part leg-2"/>
                
                {/* Drawer */}
                <rect x="10" y="12" width="20" height="8" fill="#8B4513" className="desk-part drawer"/>
                <circle cx="28" cy="16" r="1.5" fill="#444" className="desk-handle"/>
                
                {/* Decorative items on desk with animation */}
                <rect x="32" y="16" width="3" height="4" fill="#FFD700" className="desk-item item-1"/>
                <circle cx="36" cy="18" r="1" fill="#FF6B6B" className="desk-item item-2"/>
                <rect x="8" y="17" width="2" height="3" fill="#4ECDC4" className="desk-item item-3"/>
                
                {/* Wood grain details */}
                <rect x="8" y="21" width="32" height="1" fill="#8B4513" className="grain grain-1"/>
                <rect x="10" y="23" width="28" height="1" fill="#A0522D" className="grain grain-2"/>
                <rect x="12" y="25" width="24" height="1" fill="#8B4513" className="grain grain-3"/>
            </svg>
            
            <style>{`
                .animated-desk .desk-item {
                    animation: desk-sparkle 3s infinite;
                }
                
                .animated-desk .item-1 { animation-delay: 0s; }
                .animated-desk .item-2 { animation-delay: 1s; }
                .animated-desk .item-3 { animation-delay: 2s; }
                
                .animated-desk .desk-part {
                    animation: desk-glow 4s infinite;
                }
                
                .animated-desk .surface { animation-delay: 0.3s; }
                .animated-desk .drawer { animation-delay: 0.6s; }
                .animated-desk .leg-1 { animation-delay: 0.9s; }
                .animated-desk .leg-2 { animation-delay: 1.2s; }
                
                .animated-desk .grain {
                    animation: grain-shimmer 5s infinite;
                }
                
                .animated-desk .grain-1 { animation-delay: 0.5s; }
                .animated-desk .grain-2 { animation-delay: 1.5s; }
                .animated-desk .grain-3 { animation-delay: 2.5s; }
                
                @keyframes desk-sparkle {
                    0%, 85% { opacity: 0.4; transform: scale(1); }
                    10%, 25% { opacity: 1; transform: scale(1.2); }
                }
                
                @keyframes desk-glow {
                    0%, 95% { fill: #654321; }
                    5%, 10% { fill: #8B4513; }
                }
                
                @keyframes grain-shimmer {
                    0%, 90% { fill: #8B4513; opacity: 0.6; }
                    5%, 15% { fill: #CD853F; opacity: 1; }
                }
                
                .animated-desk:hover .desk-item {
                    animation-duration: 1.5s;
                }
                
                .animated-desk:hover .desk-part {
                    animation-duration: 2s;
                }
                
                .animated-desk:hover .grain {
                    animation-duration: 2.5s;
                }
            `}</style>
        </div>
    );
};

export default AnimatedDesk;
