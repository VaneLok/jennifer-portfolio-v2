import React from 'react';
import homelabImage from '../../../assets/pictures/certs/Homelab.gif';
import comptiaImage from '../../../assets/pictures/certs/CompTIA.png';
import ibmImage from '../../../assets/pictures/certs/IBM.png';
import thmThreatImage from '../../../assets/pictures/certs/THM.png';
import thmPreImage from '../../../assets/pictures/certs/THM-1.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Cybersecurity</h1>
            <h3>Certifications</h3>
            <br />
            <div className="text-block">
                <p>
                    My journey into cybersecurity has been driven by curiosity and a passion for understanding how systems work and how to protect them. These certifications represent my commitment to continuous learning and staying current with cybersecurity best practices and emerging threats.
                </p>
                <br />
                <p>
                    Each certification has taught me something valuable, from foundational security concepts to specialized skills in threat intelligence, vulnerability assessment, and incident response. I believe in hands-on learning, so alongside these formal certifications, I maintain a home lab where I practice penetration testing, malware analysis, and security monitoring.
                </p>
            </div>
            
            <div className="text-block">
                <h2>pfSense Homelab Project</h2>
                <br />
                <p>
                    I spent Canada Day 2024 doing what I love most—tinkering. This project was all about setting up my first pfSense router (FreeBSD-based) and dropping a fresh Debian server onto the network. It wasn't all smooth sailing, but that's what made it fun.
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
                <p>
                    My Realtek RTL8125 NIC gave me some serious driver drama. The hardware wasn't playing nice with FreeBSD out of the box, and I found myself troubleshooting network connectivity issues that had me scratching my head for hours. A little digging led me to a fix using a pkg install trick I found on Rebecca Peck's blog. Major shoutout to the community for that one! Once I got the drivers sorted, everything clicked into place and I had my own custom router running smoothly.
                </p>
                <br />
                <p>
                    Setting up my own FreeBSD router from scratch was incredibly satisfying and reminded me why I love learning through building. There's something special about configuring firewall rules, setting up VLANs, and watching traffic flow through your own custom network infrastructure.
                </p>
            </div>

            <div className="text-block">
                <h2>CompTIA Security+ (SY0-701)</h2>
                <br />
                <p>
                    This was my official jump into the world of cybersecurity. I studied everything from risk management to incident response and walked away not just certified, but completely hooked. Think of this as the moment I stopped just being curious about security and started getting serious about it.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={comptiaImage} style={styles.image} alt="CompTIA Security+ Certificate" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> CompTIA Security+ (SY0-701) Certification - January 2025
                        </sub>
                    </p>
                </div>
                <p>
                    The certification covered network security, compliance and operational security, threats and vulnerabilities, application, data and host security, access control and identity management, and cryptography. What I loved most was how it tied theory to real-world scenarios - you're not just memorizing terms, you're learning how to actually protect systems.
                </p>
            </div>

            <div className="text-block">
                <h2>IBM Cybersecurity Tools & Cyberattacks</h2>
                <br />
                <p>
                    This was my crash course into the wild world of cyber threats and the tools used to fight them. I explored everything from malware to mitigation strategies, getting a solid grip on how real-world attacks unfold and how defenders push back. It was messy, fascinating, and exactly what I needed to keep going.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={ibmImage} style={styles.image} alt="IBM Cybersecurity Certificate" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> IBM Cybersecurity Tools & Cyberattacks Certification - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    The course taught me about threat intelligence, incident response frameworks, and the cybersecurity landscape. I got hands-on experience with security tools and learned how to analyze attack patterns. What struck me most was understanding the mindset shift from "how to build" to "how someone might break this."
                </p>
            </div>

            <div className="text-block">
                <h2>TryHackMe Learning Paths</h2>
                <br />
                <p>
                    TryHackMe became my playground for hands-on cybersecurity learning. I completed both the Pre Security path (my starting point) and the Threat Intelligence path (diving deep into the minds of threat actors).
                </p>
                <br />
                <div className="captioned-image">
                    <img src={thmThreatImage} style={styles.image} alt="TryHackMe Threat Intelligence Certificate" />
                    <p>
                        <sub>
                            <b>Figure 4:</b> TryHackMe Threat Intelligence Learning Path - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    The Threat Intelligence path pulled me deep into understanding how to trace attacks, analyze patterns, and turn raw data into actionable insights. It felt like solving a puzzle where every piece tells a story—except the stakes are higher, and the clock is always ticking. Loved every minute of it.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={thmPreImage} style={styles.image} alt="TryHackMe Pre Security Certificate" />
                    <p>
                        <sub>
                            <b>Figure 5:</b> TryHackMe Pre Security Learning Path - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    The Pre Security path was my starting point—the hands-on sandbox where I first explored networking, system fundamentals, and basic security concepts. It was the perfect launchpad, filled with "aha!" moments that made me realize just how much I love breaking things down to see how they tick (without actually breaking them, of course).
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '100%',
    },
};

export default MusicProjects;
