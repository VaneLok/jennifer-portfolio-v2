import React from 'react';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface ProjectShowcaseProps {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    images?: string[];
    imageCaptions?: string[];
    techStack?: string[];
    challenges?: string;
    solution?: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
    title,
    subtitle,
    date,
    description,
    images = [],
    imageCaptions = [],
    techStack = [],
    challenges,
    solution,
}) => {
    return (
        <div style={styles.projectContainer}>
            <div style={styles.header}>
                <h2 style={styles.title}>{title}</h2>
                <h4 style={styles.subtitle}>{subtitle}</h4>
                <p style={styles.date}>{date}</p>
            </div>
            
            <div style={styles.content}>
                <div style={styles.mainDescription}>
                    <p style={styles.description}>{description}</p>
                </div>

                {techStack.length > 0 && (
                    <div style={styles.techSection}>
                        <h4 style={styles.sectionTitle}>Tech Stack</h4>
                        <div style={styles.techList}>
                            {techStack.map((tech, index) => (
                                <span key={index} style={styles.techTag}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {challenges && (
                    <div style={styles.section}>
                        <h4 style={styles.sectionTitle}>The Challenge</h4>
                        <p style={styles.text}>{challenges}</p>
                    </div>
                )}

                {solution && (
                    <div style={styles.section}>
                        <h4 style={styles.sectionTitle}>The Solution</h4>
                        <p style={styles.text}>{solution}</p>
                    </div>
                )}

                {images.length > 0 && (
                    <div style={styles.imagesSection}>
                        {images.map((image, index) => (
                            <div key={index} style={styles.imageContainer}>
                                <img src={image} style={styles.projectImage} alt={`Project image ${index + 1}`} />
                                {imageCaptions[index] && (
                                    <p style={styles.imageCaption}>
                                        <sub>
                                            <b>Figure {index + 1}:</b> {imageCaptions[index]}
                                        </sub>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectContainer: {
        marginTop: 48,
        padding: 24,
        border: '3px solid #c0c0c0',
        borderTopColor: '#ffffff',
        borderLeftColor: '#ffffff',
        borderRightColor: '#808080',
        borderBottomColor: '#808080',
        backgroundColor: '#f8f8f8',
    },
    header: {
        marginBottom: 24,
        textAlign: 'center',
        borderBottom: '2px solid #c0c0c0',
        paddingBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: '0 0 8px 0',
        color: '#000080',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    subtitle: {
        fontSize: 18,
        margin: '0 0 8px 0',
        color: '#008000',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    date: {
        fontSize: 16,
        margin: 0,
        color: '#666666',
        fontStyle: 'italic',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    mainDescription: {
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 1.6,
        color: '#000000',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    section: {
        marginBottom: 16,
    },
    techSection: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: '0 0 12px 0',
        color: '#000080',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    text: {
        fontSize: 15,
        lineHeight: 1.5,
        color: '#000000',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    techList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
    },
    techTag: {
        padding: '4px 8px',
        backgroundColor: '#e0e0e0',
        border: '1px solid #808080',
        fontSize: 12,
        fontFamily: 'MS Sans Serif, sans-serif',
        color: '#000000',
    },
    imagesSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        marginTop: 20,
    },
    imageContainer: {
        textAlign: 'center',
    },
    projectImage: {
        maxWidth: '100%',
        height: 'auto',
        border: '2px solid #808080',
        boxShadow: '3px 3px 6px rgba(0,0,0,0.3)',
        backgroundColor: '#ffffff',
    },
    imageCaption: {
        marginTop: 8,
        fontSize: 14,
        color: '#666666',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
};

export default ProjectShowcase;
