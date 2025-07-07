import React from 'react';
import ResumeDownload from './ResumeDownload';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>RMG Contract Interiors</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.rmgcontractinteriors.com'}
                        >
                            <h4>www.rmgcontractinteriors.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Project Coordinator</h3>
                        <b>
                            <p>August 2023 – February 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Led project coordination efforts for construction environments with elevated security requirements. Supported secure documentation, contractor clearance processing, and infrastructure planning for regulated institutional and government-adjacent clients.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Oversaw user access workflows and managed confidential documentation across physical infrastructure projects with sensitive clearance requirements.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated badging, onboarding, and offboarding logistics for contractors requiring background verification.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enforced version control and access restrictions on design files, ensuring compliance with project-specific data handling policies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Conducted internal inspections and prepared digital submission packages aligned with city and institutional regulatory frameworks.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with internal teams and third-party vendors to streamline security-compliant operational workflows.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Delcor Engineering (Tower Steel Buildings)</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.towersteelbuildings.com'}
                        >
                            <h4>www.towersteelbuildings.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Architect Technologist</h3>
                        <b>
                            <p>January 2023 – June 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Supported technical documentation and CAD workflows in compliance-sensitive construction projects. Focused on blueprint accuracy, secure file handling, and process coordination between stakeholders.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed CAD and IFC/IFP drawing workflows under tight version control and access restrictions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Conducted site inspections and contributed to technical documentation pipelines with confidentiality protocols in place.
                        </p>
                    </li>
                    <li>
                        <p>
                            Flagged and resolved architectural inconsistencies, maintaining secure design documentation throughout the project lifecycle.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>ContactPoint 360</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.contactpoint360.com'}
                        >
                            <h4>www.contactpoint360.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Claims Specialist</h3>
                        <b>
                            <p>January 2020 – January 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Handled sensitive customer claim data using an enterprise CRM platform in a high-volume, regulated support environment. Focused on secure data flow, resolution efficiency, and documentation integrity.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Handled sensitive personal and financial data during claim intake and resolution using internal CRM tools.
                        </p>
                    </li>
                    <li>
                        <p>
                            Processed customer payments securely, following verification protocols and fraud prevention procedures.
                        </p>
                    </li>
                    <li>
                        <p>
                            Managed escalation workflows and tracked claim outcomes in accordance with compliance requirements.
                        </p>
                    </li>
                    <li>
                        <p>
                            Communicated securely with insurance departments and third parties to resolve complex cases while safeguarding confidential information.
                        </p>
                    </li>
                    <li>
                        <p>
                            Maintained detailed documentation and ensured all case files aligned with internal data protection policies.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
