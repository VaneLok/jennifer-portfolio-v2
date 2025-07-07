import React from 'react';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface CertificateProps {
    image: string;
    title: string;
    description: string;
    date?: string;
    organization: string;
}

const Certificate: React.FC<CertificateProps> = ({
    image,
    title,
    description,
    date,
    organization,
}) => {
    return (
        <div style={styles.certificateContainer}>
            <div style={styles.imageContainer}>
                <img src={image} style={styles.certificateImage} alt={title} />
            </div>
            <div style={styles.captionContainer}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.organization}>{organization}</p>
                {date && <p style={styles.date}>{date}</p>}
                <p style={styles.description}>{description}</p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    certificateContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 32,
        padding: 20,
        border: '2px solid #c0c0c0',
        borderTopColor: '#ffffff',
        borderLeftColor: '#ffffff',
        borderRightColor: '#808080',
        borderBottomColor: '#808080',
        backgroundColor: '#f0f0f0',
        alignItems: 'flex-start',
        gap: 20,
    },
    imageContainer: {
        flex: '0 0 200px',
        textAlign: 'center',
    },
    certificateImage: {
        width: '100%',
        height: 'auto',
        border: '1px solid #808080',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        backgroundColor: '#ffffff',
    },
    captionContainer: {
        flex: 1,
        paddingLeft: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: '0 0 8px 0',
        color: '#000080',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    organization: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: '0 0 4px 0',
        color: '#008000',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    date: {
        fontSize: 14,
        margin: '0 0 12px 0',
        color: '#666666',
        fontStyle: 'italic',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
    description: {
        fontSize: 14,
        lineHeight: 1.5,
        margin: 0,
        color: '#000000',
        fontFamily: 'MS Sans Serif, sans-serif',
    },
};

export default Certificate;
