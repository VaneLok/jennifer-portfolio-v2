import React from 'react';
import pase1 from '../../../assets/pictures/projects/interiors/paseo venecia/pase1.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface PaseoVeneciaProjectProps {
    onBackClick: () => void;
}

const PaseoVeneciaProject: React.FC<PaseoVeneciaProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Paseo Venecia</h1>
            <h3>Soyapango Commercial Center</h3>
            <h4>Soyapango, El Salvador</h4>
            <br />
            
            <div className="text-block">
                <p>
                    This project was all about creating a space that could energize the community while giving local businesses room to grow.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={pase1} alt="Paseo Venecia commercial center" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Overview of the commercial center design</em>
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

export default PaseoVeneciaProject;
