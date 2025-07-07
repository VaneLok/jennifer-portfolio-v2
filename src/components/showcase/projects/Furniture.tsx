import React, { useState } from 'react';
import folderIcon from '../../../assets/icons/retro-folder.svg';
import aca1 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/aca1.png';
import aca3 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/aca3.png';
import aca4 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/aca4.png';
import aca7 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/aca7.png';
import aca8 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/aca8.png';
import img5 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/5.png';
import img6 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/6.png';
import inspo2 from '../../../assets/pictures/projects/interiors/furniature/Acapulco table/inspo2.png';
import f1 from '../../../assets/pictures/projects/interiors/furniature/front desk/f1.png';
import f2 from '../../../assets/pictures/projects/interiors/furniature/front desk/f2.png';
import f3 from '../../../assets/pictures/projects/interiors/furniature/front desk/f3.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface FurnitureProjectProps {
    onBackClick: () => void;
}

const FurnitureProject: React.FC<FurnitureProjectProps> = ({ onBackClick }) => {
    const [selectedFurniture, setSelectedFurniture] = useState<string | null>(null);

    const handleFurnitureClick = (furnitureType: string) => {
        console.log(`Opening ${furnitureType} project`);
        if (furnitureType === 'Acapulco Table') {
            setSelectedFurniture('Acapulco Table');
        } else if (furnitureType === 'Front Desk') {
            setSelectedFurniture('Front Desk');
        }
    };

    const handleBackToFurniture = () => {
        setSelectedFurniture(null);
    };

    // If a specific furniture type is selected, show project details
    if (selectedFurniture === 'Acapulco Table') {
        return (
            <div className="site-page-content">
                <h1>Acapulco Side Table</h1>
                <h3>Furniture Design Study</h3>
                <br />
                
                <div className="text-block">
                    <p>
                        This table began as a study in form and texture, but it quickly became something more personal. Inspired by the legendary Acapulco chair, I wanted to reinterpret its spirit in a way that felt modern, tactile, and grounded in memory.
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={aca1} alt="Final completed Acapulco Side Table" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 1:</b> <em>The final product - Acapulco Side Table with geometric texture and floating glass top</em>
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={inspo2} alt="Sketch and inspiration for Acapulco Side Table design" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 2:</b> <em>Initial sketch and inspiration - reinterpreting the spirit of the legendary Acapulco chair</em>
                    </p>
                </div>

                <div className="text-block">
                    <p>
                        The design plays with curves and contrast. I used CNC-machined panels with a geometric texture to bring out depth and movement, while the circular cutouts and cross-structure create a strong silhouette. A glass top floats above it all, offering clarity and balance.
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={aca4} alt="Working on the CNC machine during production" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 3:</b> <em>Hands-on production - working on the CNC machine to create the geometric panels</em>
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={img5} alt="CNC machine construction process" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 4:</b> <em>Construction process on the CNC machine - machining the textured panels</em>
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={img6} alt="Painting process for the table components" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 5:</b> <em>The painting process - applying the coastal-inspired color palette</em>
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={aca7} alt="Assembly process of the table structure" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 6:</b> <em>Assembly process - putting together the cross-structure and circular cutout components</em>
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={aca8} alt="Weaving the Acapulco strings detail" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 7:</b> <em>Weaving the strings - creating the signature Acapulco detail that connects to the chair heritage</em>
                    </p>
                </div>

                <div className="text-block">
                    <p>
                        The colors were a love letter to the coastlines I grew up near. Rich blues, sun-warmed materials, and small accents that remind me of the hand-painted boats and woven textiles of Latin America.
                    </p>
                </div>

                <div className="text-block">
                    <p>
                        For me, it's more than a functional piece. It's a small, sculptural tribute to cultural legacy and personal inspiration.
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={aca3} alt="Beautiful angle of the finished Acapulco Side Table" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 8:</b> <em>A beautiful angle of the finished piece - showcasing the harmony of texture, structure, and cultural inspiration</em>
                    </p>
                </div>

                <button
                    onClick={handleBackToFurniture}
                    style={styles.backButton}
                    className="back-button"
                >
                    ← Back to Furniture
                </button>
            </div>
        );
    }

    if (selectedFurniture === 'Front Desk') {
        return (
            <div className="site-page-content">
                <h1>Kibitech Front Desk</h1>
                <h3>Reception & Corporate Design</h3>
                <br />
                
                <div className="text-block">
                    <p>
                        The front desk at Kibitech was one of the most personal pieces I've ever worked on. I designed it to reflect not just the function of the space but the spirit of the company itself. Inspired by the quiet beauty of spirals, its form invites calm and connection the moment someone walks in.
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={f1} alt="Kibitech front desk with spiral design" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 1:</b> <em>The completed Kibitech front desk showcasing the spiral-inspired form and curved design</em>
                    </p>
                </div>

                <div className="text-block">
                    <p>
                        Each of the five sections represents one of the core values set by the founders. It acts as a visual language for the company's mission of inclusion, education, family, and belonging. Greenery weaves through the curves as a nod to nature's presence, while soft LED lighting brings in a layer of color therapy to support mood and focus.
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={f2} alt="Front desk sections representing company core values" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 2:</b> <em>The five sections representing core values - inclusion, education, family, and belonging through visual language</em>
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={f3} alt="LED lighting and greenery integration details" style={styles.image} />
                    <p style={styles.caption}>
                        <b>Figure 3:</b> <em>Integrated greenery and soft LED lighting for color therapy, supporting mood and focus in the workspace</em>
                    </p>
                </div>

                <div className="text-block">
                    <p>
                        It's a reception desk, yes, but also a sculptural symbol of what this place stands for.
                    </p>
                </div>

                <button
                    onClick={handleBackToFurniture}
                    style={styles.backButton}
                    className="back-button"
                >
                    ← Back to Furniture
                </button>
            </div>
        );
    }

    // Main furniture selection view with folder icons
    return (
        <div className="site-page-content">
            <h1>Custom Furniture</h1>
            <h3>Design Collections</h3>
            <br />
            
            <div className="text-block">
                <p>
                    Each piece of furniture tells a story of craftsmanship and thoughtful design. These collections represent my approach to creating functional art that enhances daily life through exceptional form and purpose.
                </p>
                <br />
                <p>
                    Select a category below to explore detailed project galleries and design process documentation.
                </p>
            </div>

            <div className="text-block">
                <h2>Collections</h2>
                <br />
                <div style={styles.furnitureGrid}>
                    <div 
                        className="folderContainer"
                        style={styles.folderContainer}
                        onClick={() => handleFurnitureClick('Acapulco Table')}
                    >
                        <div style={styles.folder}>
                            <img src={folderIcon} alt="Folder" style={styles.folderIcon} />
                        </div>
                        <div className="folderLabel" style={styles.folderLabel}>
                            <strong>Acapulco Table</strong>
                        </div>
                    </div>

                    <div 
                        className="folderContainer"
                        style={styles.folderContainer}
                        onClick={() => handleFurnitureClick('Front Desk')}
                    >
                        <div style={styles.folder}>
                            <img src={folderIcon} alt="Folder" style={styles.folderIcon} />
                        </div>
                        <div className="folderLabel" style={styles.folderLabel}>
                            <strong>Front Desk</strong>
                        </div>
                    </div>
                </div>
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
    furnitureGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        padding: '20px 0',
    },
    folderContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        padding: '0px',
        background: 'transparent',
    },
    folder: {
        position: 'relative',
        width: '100px',
        height: '100px',
        marginBottom: '10px',
        transition: 'all 0.3s ease',
        background: 'transparent',
    },
    folderIcon: {
        width: '100%',
        height: '100%',
        transition: 'transform 0.2s ease',
    },
    folderLabel: {
        textAlign: 'center',
        fontSize: '16px',
        color: '#000000',
        maxWidth: '140px',
        wordWrap: 'break-word',
        fontFamily: 'MSSerif, Times, serif',
        fontWeight: 'normal',
        lineHeight: '1.3',
        marginTop: '8px',
        letterSpacing: '0px',
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

// Windows 98-style folder hover effects (same as main Interiors page)
const folderStyleSheet = document.createElement('style');
folderStyleSheet.textContent = `
    .folderContainer {
        background: none !important;
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        filter: none !important;
        transition: all 0.2s ease !important;
    }
    
    .folderContainer > div {
        background: none !important;
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
    }
    
    .folderContainer img, .folderContainer svg {
        image-rendering: pixelated !important;
        background: none !important;
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        filter: none !important;
        transition: filter 0.2s ease !important;
    }
    
    .folderContainer:hover {
        background: none !important;
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
    }
    
    .folderContainer:hover img {
        filter: brightness(1.15) saturate(1.1) hue-rotate(5deg) !important;
    }
    
    .folderContainer:hover .folderLabel {
        color: #000080 !important;
        font-weight: bold !important;
    }
    
    .back-button:hover {
        color: #FF0000 !important;
        text-decoration: underline !important;
    }
    
    .back-button:active {
        color: #800080 !important;
    }
`;

if (!document.querySelector('#furniture-folder-styles')) {
    folderStyleSheet.id = 'furniture-folder-styles';
    document.head.appendChild(folderStyleSheet);
}

export default FurnitureProject;