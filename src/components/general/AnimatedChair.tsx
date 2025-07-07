import React from 'react';

interface AnimatedChairProps {
    style?: React.CSSProperties;
}

const AnimatedChair: React.FC<AnimatedChairProps> = ({ style }) => {
    return (
        <div className="animated-chair" style={style}>
            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                {/* Chair seat */}
                <rect x="12" y="24" width="24" height="4" fill="#8B4513" className="chair-part seat"/>
                
                {/* Chair back */}
                <rect x="12" y="8" width="24" height="4" fill="#8B4513" className="chair-part back"/>
                <rect x="12" y="8" width="4" height="20" fill="#8B4513" className="chair-part support-left"/>
                <rect x="32" y="8" width="4" height="20" fill="#8B4513" className="chair-part support-right"/>
                
                {/* Chair legs */}
                <rect x="12" y="28" width="4" height="12" fill="#8B4513" className="chair-part leg-1"/>
                <rect x="32" y="28" width="4" height="12" fill="#8B4513" className="chair-part leg-2"/>
                
                {/* Decorative elements with animation */}
                <circle cx="18" cy="10" r="1" fill="#FFD700" className="decoration deco-1"/>
                <circle cx="24" cy="10" r="1" fill="#FFD700" className="decoration deco-2"/>
                <circle cx="30" cy="10" r="1" fill="#FFD700" className="decoration deco-3"/>
                
                {/* Cushion details */}
                <rect x="14" y="25" width="20" height="2" fill="#A0522D" className="cushion-detail detail-1"/>
                <rect x="16" y="26" width="16" height="1" fill="#CD853F" className="cushion-detail detail-2"/>
            </svg>
            
            <style>{`
                .animated-chair .decoration {
                    animation: chair-sparkle 2.5s infinite;
                }
                
                .animated-chair .deco-1 { animation-delay: 0s; }
                .animated-chair .deco-2 { animation-delay: 0.8s; }
                .animated-chair .deco-3 { animation-delay: 1.6s; }
                
                .animated-chair .chair-part {
                    animation: chair-glow 3s infinite;
                }
                
                .animated-chair .seat { animation-delay: 0.2s; }
                .animated-chair .back { animation-delay: 0.4s; }
                .animated-chair .support-left { animation-delay: 0.6s; }
                .animated-chair .support-right { animation-delay: 0.8s; }
                
                @keyframes chair-sparkle {
                    0%, 80% { fill: #8B4513; opacity: 0.3; }
                    10%, 30% { fill: #FFD700; opacity: 1; }
                }
                
                @keyframes chair-glow {
                    0%, 90% { fill: #8B4513; }
                    5%, 15% { fill: #A0522D; }
                }
                
                .animated-chair:hover .decoration {
                    animation-duration: 1s;
                }
                
                .animated-chair:hover .chair-part {
                    animation-duration: 1.5s;
                }
            `}</style>
        </div>
    );
};

export default AnimatedChair;
