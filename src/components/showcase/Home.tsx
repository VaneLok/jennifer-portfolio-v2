import React from 'react';
import { Link } from '../general';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const goToContact = () => {
        // Navigation handled by Link component
    };

    return (
        <div className="site-page-content-home">
            <div style={styles.page}>
                <div style={styles.header}>
                    <h1 style={styles.name}>Jennifer Amaya</h1>
                    <h2 style={{color: '#000000'}}>Creative Technologist</h2>
                </div>
                <div style={styles.buttons}>
                    <Link containerStyle={styles.link} to="about" text="ABOUT" />
                    <Link
                        containerStyle={styles.link}
                        to="experience"
                        text="EXPERIENCE"
                    />
                    <Link
                        containerStyle={styles.link}
                        to="projects"
                        text="PROJECTS"
                    />
                    <Link
                        containerStyle={styles.link}
                        to="contact"
                        text="CONTACT"
                    />
                </div>
                <div style={styles.forHireContainer} onMouseDown={goToContact}>
                    {/* <img src={forhire} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        display: 'flex',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    buttons: {
        justifyContent: 'space-between',
        display: 'flex',
    },
    link: {
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
        fontFamily: 'MillenniumBold, "Times New Roman", Times, serif',
        fontWeight: 'bold',
        letterSpacing: '2px',
        color: '#000000',
    },
};

export default Home;
