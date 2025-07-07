import React from 'react';
import allegro1 from '../../../assets/pictures/projects/interiors/allegro/allegro1.png';
import allegro2 from '../../../assets/pictures/projects/interiors/allegro/allegro2.png';
import allegro3 from '../../../assets/pictures/projects/interiors/allegro/allegro3.png';
import allegro4 from '../../../assets/pictures/projects/interiors/allegro/allegro4.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface AllegroProjectProps {
    onBackClick: () => void;
}

const AllegroProject: React.FC<AllegroProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Allegro</h1>
            <h3>Commercial Interior Design</h3>
            <br />
            
            <div className="text-block">
                <p>
                    The Allegro project represents a sophisticated approach to commercial interior design, blending modern aesthetics with functional workspace requirements. This project focused on creating an environment that promotes productivity while maintaining visual appeal and comfort.
                </p>
                <br />
                <p>
                    Every element was carefully considered to support the daily operations of a dynamic business environment, from the reception area to private meeting spaces.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={allegro1} alt="Allegro reception area with modern design elements" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Reception area showcasing clean lines and professional aesthetics</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    The design philosophy centered around creating spaces that feel both professional and welcoming. Natural light was maximized throughout, while carefully selected materials and colors contribute to an atmosphere of understated elegance.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={allegro2} alt="Allegro workspace design with natural lighting" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 2:</b> <em>Open workspace design maximizing natural light and flow</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Meeting spaces were designed to facilitate both formal presentations and collaborative work sessions. The furniture selection balances comfort with functionality, creating environments where ideas can flourish.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={allegro3} alt="Allegro meeting room with collaborative design features" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 3:</b> <em>Meeting space designed for both formal and collaborative sessions</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    The final result is a cohesive workspace that reflects the company's values while providing the flexibility needed for modern business operations. Each area serves its purpose while contributing to the overall harmony of the design.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={allegro4} alt="Final view of the completed Allegro office design" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 4:</b> <em>The completed workspace - professional, functional, and inspiring</em>
                </p>
            </div>

            {/* Back button */}
            <button
                onClick={onBackClick}
                style={styles.backButton}
                className="back-button"
            >
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

export default AllegroProject;