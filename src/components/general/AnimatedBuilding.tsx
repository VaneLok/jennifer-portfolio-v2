import React from 'react';

interface AnimatedBuildingProps {
    style?: React.CSSProperties;
}

const AnimatedBuilding: React.FC<AnimatedBuildingProps> = ({ style }) => {
    return (
        <div className="animated-building" style={style}>
            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                {/* Building base */}
                <rect x="8" y="12" width="32" height="30" fill="#666" stroke="#333" strokeWidth="1"/>
                
                {/* Windows with animation */}
                <rect x="12" y="16" width="4" height="4" fill="#ffff00" className="window window-1"/>
                <rect x="20" y="16" width="4" height="4" fill="#333" className="window window-2"/>
                <rect x="28" y="16" width="4" height="4" fill="#ffff00" className="window window-3"/>
                
                <rect x="12" y="24" width="4" height="4" fill="#333" className="window window-4"/>
                <rect x="20" y="24" width="4" height="4" fill="#ffff00" className="window window-5"/>
                <rect x="28" y="24" width="4" height="4" fill="#333" className="window window-6"/>
                
                <rect x="12" y="32" width="4" height="4" fill="#ffff00" className="window window-7"/>
                <rect x="20" y="32" width="4" height="4" fill="#333" className="window window-8"/>
                <rect x="28" y="32" width="4" height="4" fill="#ffff00" className="window window-9"/>
                
                {/* Door */}
                <rect x="18" y="36" width="6" height="6" fill="#8B4513"/>
                
                {/* Roof */}
                <polygon points="6,12 24,4 42,12" fill="#800000" stroke="#333" strokeWidth="1"/>
            </svg>
            
            <style>{`
                .animated-building .window {
                    animation: window-blink 3s infinite;
                }
                
                .animated-building .window-1 { animation-delay: 0s; }
                .animated-building .window-2 { animation-delay: 0.3s; }
                .animated-building .window-3 { animation-delay: 0.6s; }
                .animated-building .window-4 { animation-delay: 0.9s; }
                .animated-building .window-5 { animation-delay: 1.2s; }
                .animated-building .window-6 { animation-delay: 1.5s; }
                .animated-building .window-7 { animation-delay: 1.8s; }
                .animated-building .window-8 { animation-delay: 2.1s; }
                .animated-building .window-9 { animation-delay: 2.4s; }
                
                @keyframes window-blink {
                    0%, 70% { fill: #333; }
                    20%, 50% { fill: #ffff00; }
                }
                
                .animated-building:hover .window {
                    animation-duration: 1s;
                }
            `}</style>
        </div>
    );
};

export default AnimatedBuilding;
