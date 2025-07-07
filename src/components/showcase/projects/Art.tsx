import React, { useState } from 'react';
import folderIcon from '../../../assets/icons/retro-folder.svg';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

// Import sketch images
import sketchA1 from '../../../assets/pictures/projects/art/sketch/A1.png';
import sketchA2 from '../../../assets/pictures/projects/art/sketch/A2.png';
import sketchA3 from '../../../assets/pictures/projects/art/sketch/A3.png';
import sketchA4 from '../../../assets/pictures/projects/art/sketch/A4.png';

// Import painting images
import paintingO1 from '../../../assets/pictures/projects/art/paintings/O1.png';
import paintingO2 from '../../../assets/pictures/projects/art/paintings/O2.png';
import paintingO3 from '../../../assets/pictures/projects/art/paintings/O3.png';
import paintingO4 from '../../../assets/pictures/projects/art/paintings/O4.png';

// Import jewellery video
import ringVideo from '../../../assets/pictures/projects/art/Jewellery/RING.mp4';

// Import jewellery images
import ringR2 from '../../../assets/pictures/projects/art/Jewellery/R2.jpg';
import ringRR from '../../../assets/pictures/projects/art/Jewellery/R&R.jpg';
import ringR5 from '../../../assets/pictures/projects/art/Jewellery/R5.jpg';
import ringR6 from '../../../assets/pictures/projects/art/Jewellery/R6.jpg';

export interface ArtProjectsProps {}

const styles: StyleSheetCSS = {
    projectGrid: {
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
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px 0',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        marginBottom: '15px',
        border: '1px solid #c0c0c0',
    },
    caption: {
        fontFamily: 'MSSerif, Times, serif',
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#333',
        marginTop: '10px',
        textAlign: 'left',
    },
    figureText: {
        fontWeight: 'bold',
        display: 'inline-block',
        width: '70px',
        verticalAlign: 'top',
    },
    captionText: {
        display: 'inline-block',
        width: 'calc(100% - 70px)',
        verticalAlign: 'top',
    },
    video: {
        width: '80%',
        maxWidth: '600px',
        height: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
        border: '1px solid #c0c0c0',
        borderRadius: '4px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
};

const ArtProjects: React.FC<ArtProjectsProps> = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    // Define projects here before they are used
    const projects = [
        { name: 'Sketches', description: 'Drawing & Concept Art' },
        { name: 'Paintings', description: 'Color & Expression' },
        { name: 'Jewellery', description: 'Handcrafted Designs' }
    ];

    // Define sketch images with captions
    const sketchImages = [
        { 
            src: sketchA1, 
            caption: 'Coffee shop hand rendering exploring spatial relationships and atmospheric perspective. Traditional media on vellum.',
            alt: 'Coffee shop hand rendering',
            figureNum: 1,
            gridArea: '1 / 1 / 2 / 2'
        },
        { 
            src: sketchA2, 
            caption: 'Conceptual 3D space exploration in pencil. Study of volumetric forms and spatial dynamics.',
            alt: '3D space pencil sketch',
            figureNum: 2,
            gridArea: '1 / 2 / 2 / 3'
        },
        { 
            src: sketchA4, 
            caption: 'Restaurant interior conceptualization in pen and ink. Detail study of architectural elements and human scale.',
            alt: 'Pen/ink restaurant hand sketch',
            figureNum: 3,
            gridArea: '2 / 1 / 3 / 2'
        },
        { 
            src: sketchA3, 
            caption: 'Fashion retail environment hand rendering showcasing materiality and circulation patterns. Mixed media technique.',
            alt: 'Fashion store hand rendering',
            figureNum: 4,
            gridArea: '2 / 2 / 3 / 3'
        }
    ];

    // Define painting images with captions
    const paintingImages = [
        { 
            src: paintingO1, 
            caption: 'Golda - Oil Paint. Study of light and shadow through traditional oil techniques on canvas.',
            alt: 'Golda - Oil Painting',
            figureNum: 1,
            gridArea: '1 / 1 / 2 / 2'
        },
        { 
            src: paintingO2, 
            caption: 'Fabergé Feather - Acrylic Paint. Exploration of texture and ornate detail using layered acrylic methods.',
            alt: 'Fabergé Feather - Acrylic Painting',
            figureNum: 2,
            gridArea: '1 / 2 / 2 / 3'
        },
        { 
            src: paintingO3, 
            caption: 'Sea Port - Acrylic Paint. Atmospheric perspective study of maritime landscape using acrylic on canvas panel.',
            alt: 'Sea Port - Acrylic Painting',
            figureNum: 3,
            gridArea: '2 / 1 / 3 / 2'
        },
        { 
            src: paintingO4, 
            caption: 'Price of Freedom - WaterColor Pencils. Mixed media composition exploring narrative themes through translucent color layers.',
            alt: 'Price of Freedom - WaterColor Pencils',
            figureNum: 4,
            gridArea: '2 / 2 / 3 / 3'
        }
    ];

    // Define jewellery images with captions
    const jewelleryImages = [
        { 
            src: ringR2, 
            caption: 'Conceptual sketch exploring the infinity symbol and its transformation into a ring design.',
            alt: 'Conceptual sketch of infinity ring',
            figureNum: 1,
            gridArea: '1 / 1 / 2 / 2'
        },
        { 
            src: ringRR, 
            caption: '3D modeling process showing the digital interpretation and refinement of the design.',
            alt: '3D modeling of infinity ring',
            figureNum: 2,
            gridArea: '1 / 2 / 2 / 3'
        },
        { 
            src: ringR5, 
            caption: 'Finished product showcasing the polished metal bands and center stone placement.',
            alt: 'Finished infinity ring - view 1',
            figureNum: 3,
            gridArea: '2 / 1 / 3 / 2'
        },
        { 
            src: ringR6, 
            caption: 'Final product detail highlighting the craftsmanship and symbolic unity of the design.',
            alt: 'Finished infinity ring - view 2',
            figureNum: 4,
            gridArea: '2 / 2 / 3 / 3'
        }
    ];

    const handleFolderClick = (projectName: string) => {
        console.log(`Opening ${projectName} project`);
        if (projectName === 'Sketches') {
            setSelectedProject('Sketches');
        } else if (projectName === 'Paintings') {
            setSelectedProject('Paintings');
        } else if (projectName === 'Jewellery') {
            setSelectedProject('Jewellery');
        } else {
            // For other projects, show a placeholder for now
            alert(`${projectName} project coming soon!`);
        }
    };

    const handleBackToList = () => {
        setSelectedProject(null);
    };

    // If a project is selected, show the project details
    if (selectedProject === 'Sketches') {
        return (
            <div className="site-page-content">
                <h1>Sketches</h1>
                <h3>Drawing & Concept Art</h3>
                <br />
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px',
                    padding: '20px 0',
                }}>
                    {sketchImages.map((image, index) => (
                        <div 
                            key={index} 
                            style={{
                                ...styles.imageContainer,
                                gridArea: image.gridArea
                            }}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                style={styles.image}
                            />
                            <div style={styles.caption}>
                                <span style={styles.figureText}>Figure {image.figureNum}:</span>
                                <span style={styles.captionText}>{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleBackToList}
                    style={styles.backButton}
                    className="back-button"
                >
                    ← Back to Art
                </button>
            </div>
        );
    }

    if (selectedProject === 'Paintings') {
        return (
            <div className="site-page-content">
                <h1>Paintings</h1>
                <h3>Color & Expression</h3>
                <br />
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px',
                    padding: '20px 0',
                }}>
                    {paintingImages.map((image, index) => (
                        <div 
                            key={index} 
                            style={{
                                ...styles.imageContainer,
                                gridArea: image.gridArea
                            }}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                style={styles.image}
                            />
                            <div style={styles.caption}>
                                <span style={styles.figureText}>Figure {image.figureNum}:</span>
                                <span style={styles.captionText}>{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleBackToList}
                    style={styles.backButton}
                    className="back-button"
                >
                    ← Back to Art
                </button>
            </div>
        );
    }

    if (selectedProject === 'Jewellery') {
        return (
            <div className="site-page-content">
                <h1>Jewellery</h1>
                <h3>Handcrafted Designs</h3>
                <br />
                
                <div className="text-block">
                    <h2>Infinity Ring Design</h2>
                    <p>
                        What started as a sketch of the infinity symbol slowly evolved into something more personal. I deconstructed the shape, played with balance and flow, and out came this ring. It became a quiet tribute to endless love.
                    </p>
                </div>
                
                <div className="text-block">
                    <video 
                        style={styles.video}
                        controls
                        preload="metadata"
                        aria-label="Infinity Ring Design Video"
                    >
                        <source src={ringVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div style={{
                        fontFamily: 'MSSerif, Times, serif',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#333',
                        marginTop: '10px',
                        textAlign: 'center',
                        width: '100%',
                        display: 'block'
                    }}>
                        <strong>Video:</strong> Conceptual demonstration of the infinity ring design process and final product showcase.
                    </div>
                </div>

                <div className="text-block">
                    <p>
                        The two outer bands represent the people, circling one another in harmony. The center stone holds everything in place, symbolizing love as the core of it all.
                    </p>
                    <p>
                        From pencil lines to polished metal, this design tells a story about connection, unity, and meaning that lasts.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px',
                    padding: '20px 0',
                }}>
                    {jewelleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            style={{
                                ...styles.imageContainer,
                                gridArea: image.gridArea
                            }}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                style={styles.image}
                            />
                            <div style={styles.caption}>
                                <span style={styles.figureText}>Figure {image.figureNum}:</span>
                                <span style={styles.captionText}>{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleBackToList}
                    style={styles.backButton}
                    className="back-button"
                >
                    ← Back to Art
                </button>
            </div>
        );
    }

    // Otherwise show the main folder grid
    return (
        <div className="site-page-content">
            <h1>Art</h1>
            <h3>Creative Portfolio</h3>
            <br />
            <div className="text-block">
                <p>
                    From loose sketches to layered watercolors and bold acrylics, these paintings are the result of time spent with paper, brush, and emotion. Every piece holds a story. Some imagined, some remembered. All made with my hands.
                </p>
            </div>

            <div className="text-block">
                <h2>Collections</h2>
                <br />
                <div style={styles.projectGrid}>
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="folderContainer"
                            style={styles.folderContainer}
                            onClick={() => handleFolderClick(project.name)}
                        >
                            <div style={styles.folder}>
                                {/* SVG Folder Icon */}
                                <img src={folderIcon} alt="Folder" style={styles.folderIcon} />
                            </div>
                            <div className="folderLabel" style={styles.folderLabel}>
                                <strong>{project.name}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Clean retro folder styling with Windows 98 hover color shift
const styleSheet = document.createElement('style');
styleSheet.textContent = `
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
    
    .back-button {
        position: relative !important;
        float: none !important;
        display: block !important;
        margin-top: 30px !important;
        margin-bottom: 20px !important;
        text-align: left !important;
        width: auto !important;
        top: auto !important;
        right: auto !important;
        left: auto !important;
        bottom: auto !important;
    }
    
    .back-button:hover {
        color: #FF0000 !important;
        text-decoration: underline !important;
    }
    
    .back-button:active {
        color: #800080 !important;
    }
`;

if (!document.querySelector('#art-folder-hover-styles')) {
    styleSheet.id = 'art-folder-hover-styles';
    document.head.appendChild(styleSheet);
}

export default ArtProjects;
