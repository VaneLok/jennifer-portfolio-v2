import React from 'react';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface ContactProps {}

interface SocialBoxProps {
    icon: string;
    link: string;
    label: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon, label }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link} title={label}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt={label} style={styles.socialImage} />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link="https://github.com/VaneLok"
                        label="GitHub Profile"
                    />
                    <SocialBox
                        icon={inIcon}
                        link="https://www.linkedin.com/in/jennifer-amaya/"
                        label="LinkedIn Profile"
                    />
                </div>
            </div>
            <div className="text-block">
                <p>
                    Currently between roles and open to what's next. If you have
                    something in mind, feel free to reach out. I'd be happy to
                    connect.
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:jenniferamayavanessa@protonmail.com">
                        jenniferamayavanessa@protonmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    socialImage: {
        width: 36,
        height: 36,
    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        display: 'flex',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
        display: 'flex',
    },
    social: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
        display: 'flex',
        backgroundColor: '#c0c0c0',
        border: '2px solid #ffffff',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
    },
};

export default Contact;
