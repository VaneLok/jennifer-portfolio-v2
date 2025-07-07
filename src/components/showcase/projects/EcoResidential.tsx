import React from 'react';
import eco1 from '../../../assets/pictures/projects/interiors/ecoresidentials/eco1.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface EcoResidentialProjectProps {
    onBackClick: () => void;
}

const EcoResidentialProject: React.FC<EcoResidentialProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Eco Residential</h1>
            <h3>Sustainable Home Design</h3>
            <br />
            
            <div className="text-block">
                <p>
                    This was one of those projects where everything just clicked. A growing family. An open plot of land. And a big dream for a home that could be functional, beautiful, and gentle on the planet.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={eco1} alt="Eco residential design" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Sustainable home design with renewable materials</em>
                </p>
            </div>

            <button onClick={onBackClick} style={styles.backButton} className="back-button">
                ← Back to Projects
            </button>
        </div>
    );
};

const styles: StyleSheetCSS = {
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px 0',
        width: '100%',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '2px',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
    },
    caption: {
        fontSize: '14px',
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic',
        maxWidth: '600px',
        lineHeight: '1.4',
        margin: '0',
    },
    backButton: {
        cursor: 'pointer',
        padding: '20px 0px',
        marginTop: '30px',
        backgroundColor: 'transparent',
        border: 'none',
        fontFamily: 'MSSerif, Times, serif',
        fontSize: '16px',
        color: '#0000EE',
        textDecoration: 'underline',
        display: 'block',
        userSelect: 'none',
        position: 'relative',
        textAlign: 'left',
        width: 'auto',
        clear: 'both',
    },
};

export default EcoResidentialProject;
