import React, { useState } from 'react';
import folderIcon from '../../../assets/icons/retro-folder.svg';
import AllegroProject from './Allegro';
import KibiTechProject from './KibiTech';
import EcoResidentialProject from './EcoResidential';
import PaseoVeneciaProject from './PaseoVenecia';
import LuncheriaProject from './Luncheria';
import FurnitureProject from './Furniture';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface InteriorsProjectsProps {}

const InteriorsProjects: React.FC<InteriorsProjectsProps> = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const handleFolderClick = (projectName: string) => {
        console.log(`Opening ${projectName} project`);
        if (projectName === 'Allegro') {
            setSelectedProject('Allegro');
        } else if (projectName === 'KibiTech') {
            setSelectedProject('KibiTech');
        } else if (projectName === 'Eco Residential') {
            setSelectedProject('Eco Residential');
        } else if (projectName === 'Paseo Venecia') {
            setSelectedProject('Paseo Venecia');
        } else if (projectName === 'Luncheria') {
            setSelectedProject('Luncheria');
        } else if (projectName === 'Furniture') {
            setSelectedProject('Furniture');
        } else {
            // For other projects, show a placeholder for now
            alert(`${projectName} project coming soon!`);
        }
    };

    const handleBackToList = () => {
        setSelectedProject(null);
    };

    // If a project is selected, show the project details
    if (selectedProject === 'Allegro') {
        return (
            <AllegroProject onBackClick={handleBackToList} />
        );
    }

    if (selectedProject === 'KibiTech') {
        return (
            <KibiTechProject onBackClick={handleBackToList} />
        );
    }

    if (selectedProject === 'Eco Residential') {
        return (
            <EcoResidentialProject onBackClick={handleBackToList} />
        );
    }

    if (selectedProject === 'Paseo Venecia') {
        return (
            <PaseoVeneciaProject onBackClick={handleBackToList} />
        );
    }

    if (selectedProject === 'Luncheria') {
        return (
            <LuncheriaProject onBackClick={handleBackToList} />
        );
    }

    if (selectedProject === 'Furniture') {
        return (
            <FurnitureProject onBackClick={handleBackToList} />
        );
    }

    // Otherwise show the main folder grid

    const projects = [
        { name: 'Allegro', description: 'Commercial Interior Design' },
        { name: 'KibiTech', description: 'Tech Office Space' },
        { name: 'Eco Residential', description: 'Sustainable Home Design' },
        { name: 'Paseo Venecia', description: 'Residential Complex' },
        { name: 'Luncheria', description: 'Restaurant Design' },
        { name: 'Furniture', description: 'Custom Furniture Projects' }
    ];

    return (
        <div className="site-page-content">
            <h1>Interior Design</h1>
            <h3>Projects</h3>
            <br />
            <div className="text-block">
                <p>
                    To me, interior design is like storytelling in three dimensions. Every space holds a mood, a rhythm, a reason. I've worked across residential and commercial projects, always balancing function with feeling, because good design should not only work, it should speak to you.
                </p>
                <br />
                <p>
                    Here, you'll find a selection of that work, from residential layouts to institutional spaces. These projects reflect my love for clean lines, smart planning, and the human side of design.
                </p>
            </div>

            <div className="text-block">
                <h2>Project Portfolio</h2>
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

if (!document.querySelector('#folder-hover-styles')) {
    styleSheet.id = 'folder-hover-styles';
    document.head.appendChild(styleSheet);
}

if (!document.querySelector('#folder-hover-styles')) {
    styleSheet.id = 'folder-hover-styles';
    document.head.appendChild(styleSheet);
}

export default InteriorsProjects;
