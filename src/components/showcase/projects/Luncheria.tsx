import React from 'react';
import lunch1 from '../../../assets/pictures/projects/interiors/luncheria/lunch1.png';
import lunch2 from '../../../assets/pictures/projects/interiors/luncheria/lunch2.png';
import lunch3 from '../../../assets/pictures/projects/interiors/luncheria/lunch3.png';
import lunch4 from '../../../assets/pictures/projects/interiors/luncheria/lunch4.png';
import lunch4Alt from '../../../assets/pictures/projects/interiors/luncheria/lunch 4 .png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface LuncheriaProjectProps {
    onBackClick: () => void;
}

const LuncheriaProject: React.FC<LuncheriaProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Capt. Beedó</h1>
            <h3>Local Luncheria</h3>
            <h4>Museum of London, ON</h4>
            <br />
            
            <div className="text-block">
                <p>
                    Capt. Beedó Local Luncheria was one of the most personal projects I've ever worked on. Tasked with designing a new restaurant for the Museum of London, I saw an opportunity to share a story close to my roots. Inspired by the vibrant beach culture of Latin America, the goal was to create a space that felt alive with movement, joy, and warmth, just like a day by the ocean.
                </p>
                <br />
                <p>
                    From the beginning, I wanted the design to feel immersive. A refurbished wooden boat was transformed into a central bar, anchoring the space both visually and thematically.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={lunch1} alt="Capt. Beedó central bar made from refurbished wooden boat" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>The central bar crafted from a refurbished wooden boat, anchoring the space thematically</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    The ceiling and main feature wall were shaped with custom parametric forms that mimic ocean waves, flowing above and around diners. Booth seating curved organically along the sides, offering a sense of rhythm and softness throughout the layout.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={lunch2} alt="Parametric wave forms on ceiling and curved booth seating" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 2:</b> <em>Custom parametric wave forms flowing across the ceiling with organic curved booth seating</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    The color palette took cues from the sea and from Latin American coastal traditions: deep blues, rich reds, sun-washed wood tones, and bright accents inspired by ceviche and painted fishing boats. We added greenery and subtle nautical details, like ropes and net textures, to ground the design in place and memory.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={lunch3} alt="Latin American coastal color palette with nautical details" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 3:</b> <em>Rich coastal colors and nautical textures inspired by Latin American beach culture</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Every corner of Capt. Beedó was crafted with cultural storytelling in mind. From hammock-inspired chairs to an in-wall aquarium and natural light fixtures, the space invites guests to slow down, share a meal, and feel transported.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={lunch4} alt="Cultural details including hammock-inspired chairs and aquarium features" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 4:</b> <em>Cultural storytelling details: hammock-inspired seating and immersive aquarium features</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    More than just a restaurant, it became a little tribute to the carefree energy of beachside lunch spots, reimagined inside the heart of a major city. Capt. Beedó isn't just a place to eat. It's a space that carries the spirit of Latin American beaches, where every detail says: come in, take a breath, and stay awhile.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={lunch4Alt} alt="Final view of Capt. Beedó capturing the complete beachside atmosphere" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 5:</b> <em>The completed luncheria - a tribute to Latin American beach culture in the heart of London</em>
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

export default LuncheriaProject;