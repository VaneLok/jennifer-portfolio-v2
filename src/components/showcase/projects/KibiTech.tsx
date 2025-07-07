import React from 'react';
import kibi1 from '../../../assets/pictures/projects/interiors/Kibitech/kibi1.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface KibiTechProjectProps {
    onBackClick: () => void;
}

const KibiTechProject: React.FC<KibiTechProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>KibiTech Inc.</h1>
            <h3>Inclusive Workplace Design</h3>
            <br />
            
            <div className="text-block">
                <p>
                    This was my thesis project and one of the most meaningful experiences in my design journey. The challenge was to redesign a heritage building into an inclusive, fully accessible workplace for Kibitech Inc., a company with plans to employ a neurodiverse team.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi1} alt="KibiTech office overview" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Overview of the inclusive workspace design</em>
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

export default KibiTechProject;
