import React from 'react';
import homelabImage from '../../../assets/pictures/certs/Homelab.gif';
import comptiaImage from '../../../assets/pictures/certs/CompTIA.png';
import ibmImage from '../../../assets/pictures/certs/IBM.png';
import thmThreatImage from '../../../assets/pictures/certs/THM.png';
import thmPreImage from '../../../assets/pictures/certs/THM-1.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface CyberProjectsProps {}

const CyberProjects: React.FC<CyberProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Cybersecurity</h1>
            <h3>Certifications</h3>
            <br />
            <div className="text-block">
                <p>
                    I've always been a builder at heart. At first, that meant spaces and visuals, then it shifted into systems, networks, and everything behind the scenes. Cybersecurity clicked because it gave me a way to protect the things I care about building.
                </p>
                <br />
                <p>
                    These certifications are part of that journey. Each one has opened new doors, from the basics of how networks operate to spotting vulnerabilities and tracing threats. I balance it all out with hands-on practice in my homelab, where I'm constantly testing, exploring, and learning by doing. That's where it all starts to make sense.
                </p>
            </div>
            
            <div className="text-block">
                <h2>pfSense Homelab Project</h2>
                <h3>Canada Day 2024</h3>
                <br />
                <p>
                    I spent Canada Day doing what I love most: tinkering. I set up my first pfSense router (FreeBSD-based) and dropped a fresh Debian server onto the network. It wasn't all smooth sailing, my Realtek RTL8125 NIC gave me some driver drama, but a little digging led me to a fix using a pkg install trick I found on Rebecca Peck's blog. Major shoutout to the community for that one. Setting up my own FreeBSD router from scratch was incredibly satisfying and reminded me why I love learning through building.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={homelabImage} style={styles.image} alt="pfSense Homelab Setup" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> My pfSense router setup - FreeBSD doing what it does best
                        </sub>
                    </p>
                </div>
            </div>

            <div className="text-block">
                <h2>Security+ (SY0-701)</h2>
                <h3>CompTIA · 2025</h3>
                <br />
                <div className="captioned-image">
                    <img src={comptiaImage} style={styles.certImage} alt="CompTIA Security+ Certificate" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> CompTIA Security+ (SY0-701) - January 2025
                        </sub>
                    </p>
                </div>
                <p>
                    This was my official jump into the world of cybersecurity. I studied everything from risk management to incident response and walked away not just certified, but completely hooked. Think of this as the moment I stopped just being curious about security and started getting serious about it.
                </p>
            </div>

            <div className="text-block">
                <h2>Cybersecurity Tools & Cyberattacks</h2>
                <h3>IBM · 2024</h3>
                <br />
                <div className="captioned-image">
                    <img src={ibmImage} style={styles.certImage} alt="IBM Cybersecurity Analyst Certificate" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> IBM Cybersecurity Analyst Professional Certificate - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    This was my crash course into the wild world of cyber threats and the tools used to fight them. I explored everything from malware to mitigation strategies, getting a solid grip on how real-world attacks unfold and how defenders push back. It was messy, fascinating, and exactly what I needed to keep going.
                </p>
            </div>

            <div className="text-block">
                <h2>Pre Security</h2>
                <h3>TryHackMe · 2024</h3>
                <br />
                <div className="captioned-image">
                    <img src={thmThreatImage} style={styles.certImage} alt="TryHackMe Pre Security Certificate" />
                    <p>
                        <sub>
                            <b>Figure 4:</b> TryHackMe Pre Security - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    This was my starting point, the hands-on sandbox where I first explored networking, system fundamentals, and basic security concepts. It was the perfect launchpad, filled with "aha!" moments that made me realize just how much I love breaking things down to see how they tick (without actually breaking them, of course).
                </p>
            </div>

            <div className="text-block">
                <h2>Threat Intelligence Learning Path</h2>
                <h3>TryHackMe · 2024</h3>
                <br />
                <div className="captioned-image">
                    <img src={thmPreImage} style={styles.certImage} alt="TryHackMe Threat Intelligence Certificate" />
                    <p>
                        <sub>
                            <b>Figure 5:</b> TryHackMe Threat Intelligence Learning Path - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    This one pulled me deep into the minds of threat actors. I learned how to trace attacks, analyze patterns, and turn raw data into actionable insights. It felt like solving a puzzle where every piece tells a story except the stakes are higher, and the clock is always ticking. Loved every minute of it.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '95%',
    },
    certImage: {
        height: 'auto',
        width: '90%',
    },
};

export default CyberProjects;
