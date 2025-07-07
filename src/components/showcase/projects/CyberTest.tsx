import React from 'react';

export interface CyberTestProps {}

const CyberTest: React.FC<CyberTestProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Cybersecurity Test</h1>
            <p>This is a test component.</p>
        </div>
    );
};

export default CyberTest;
