import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import ResumeDownload from './ResumeDownload';
import type { StyleSheetCSS } from '../../types/StyleSheetCSS';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Jennifer Amaya</h3>
            <br />
            <div className="text-block">
                <p>
                    Hi there! I'm Jennifer, a curious-minded cybersecurity enthusiast with a big soft spot for secure systems, digital design, and all things threat intelligence. I've always felt that great design is about clarity and purpose, whether it's shaping an interior space or locking down an interface. I started out in interior design and earned my Honours Bachelor's from Fanshawe College in 2020. In 2025, I followed my curiosity into cybersecurity and earned my CompTIA Security+ (SY0-701) certification. Now I get to blend usability and security in ways that feel meaningful and fun.
                </p>
                <br />
                <p>
                    Glad you stopped by. If anything catches your eye or you just want to connect, shoot me an email at <a href="mailto:jenniferamayavanessa@protonmail.com">jenniferamayavanessa@protonmail.com</a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I've always been someone who notices the little things. How something is put together, how it flows, and where it could be just a bit better. I grew up in El Salvador dreaming of becoming a designer, and in 2016 I made the move to Canada to chase that goal. I graduated in 2020 with a degree in Interior Design and spent the next five years coordinating construction projects for colleges, universities, and high-security clients.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Building my first gaming computer
                        </sub>
                    </p>
                </div>

                <p>
                    While working in the built environment, I became more and more curious about the systems behind the scenes. I found myself drawn to secure documentation, compliance workflows, and digital infrastructure. That spark led to late-night learning, self-paced labs, and eventually certifications in cybersecurity and threat intelligence. These days, I'm diving into ethical hacking, building out my homelab, and learning how to craft interactive 3D experiences using Three.js. Every step has been a mix of structure and surprise, and I've loved the ride so far.
                </p>
                <br />
                <br />
                <h3>My Hobbies</h3>
                <br />
                <p>
                    When I'm not poking around firewalls or playing with 3D models, I'm usually tinkering with something creative. I love 3D printing custom gadgets, sketching jewelry by hand, or painting with acrylics when I need to unplug and reset.
                </p>
                <br />
                <p>
                    Gaming is also a big part of my world. It helps me relax, recharge, and stay inspired by immersive environments and creative storytelling. Whether I'm building something physical or exploring something digital, I always like to keep my hands busy and my curiosity buzzing.
                </p>
                <div style={styles.verticalImage}>
                    <img src={meNow} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Me, January 2025
                        </sub>
                    </p>
                </div>
                <br />
                <br />
                <p>
                    Thanks for taking the time to hang out on my little corner of the web. I hope you have fun exploring and maybe even find something here that sparks your own curiosity.
                </p>
                <br />
                <p>
                    If you ever want to say hello, ask a question, or share an idea, feel free to shoot me an email at{' '}
                    <a href="mailto:jenniferamayavanessa@protonmail.com">
                        jenniferamayavanessa@protonmail.com
                    </a>
                    . I'd love to hear from you.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
