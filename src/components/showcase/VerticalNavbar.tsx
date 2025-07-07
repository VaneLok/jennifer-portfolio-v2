import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from '../general';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
    const location = useLocation();
    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname.includes('projects')) {
            setProjectsExpanded(true);
        } else {
            setProjectsExpanded(false);
        }
        
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [location.pathname]);

    const goToContact = () => {
        navigate('/contact');
    };

    // Only show navbar when not on home page
    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Jennifer</h1>
                <h1 style={styles.headerText}>Amaya</h1>
                <h3 style={styles.headerShowcase}>Showcase '25</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={Object.assign(
                        {},
                        styles.link,
                        projectsExpanded && styles.expandedLink
                    )}
                    to="projects"
                    text="PROJECTS"
                />
                {projectsExpanded && (
                    <div style={styles.insetLinks}>
                        <Link
                            containerStyle={styles.insetLink}
                            to="projects/cyber"
                            text="CYBER"
                        />
                        <Link
                            containerStyle={styles.insetLink}
                            to="projects/interiors"
                            text="INTERIORS"
                        />
                        <Link
                            containerStyle={styles.insetLink}
                            to="projects/art"
                            text="ART"
                        />
                    </div>
                )}
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
            <div style={styles.spacer} />
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forHire} style={styles.image} alt="" /> */}
            </div>
        </div>
    ) : null;
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
        display: 'flex',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 8,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        paddingLeft: 32,
        flexDirection: 'column',
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        maxWidth: 180,
    },
};

export default VerticalNavbar;
