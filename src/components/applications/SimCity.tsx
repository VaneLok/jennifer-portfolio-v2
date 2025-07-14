import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface SimCityAppProps extends WindowAppProps {}

const SimCityApp: React.FC<SimCityAppProps> = (props) => {
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.innerHTML = `
                <iframe 
                    src="https://archive.org/embed/msdos_festival_SIMCITY"
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allow="autoplay; fullscreen; gamepad; clipboard-write"
                    onload="
                        setTimeout(() => {
                            try {
                                const iframe = this;
                                const doc = iframe.contentDocument || iframe.contentWindow.document;
                                
                                // Try multiple selectors for the start button
                                const selectors = [
                                    'button[class*=start]',
                                    'button[class*=play]', 
                                    '.play-button',
                                    '.start-button',
                                    'button:contains(Start)',
                                    'button:contains(Play)',
                                    '.ia-play-button',
                                    '.btn-primary',
                                    '#startButton',
                                    '.game-start-btn'
                                ];
                                
                                let startBtn = null;
                                for (let selector of selectors) {
                                    startBtn = doc.querySelector(selector);
                                    if (startBtn) break;
                                }
                                
                                if (startBtn) {
                                    startBtn.click();
                                    console.log('Auto-clicked start button');
                                }
                                
                                // Hide Archive.org interface elements aggressively
                                const style = doc.createElement('style');
                                style.textContent = \`
                                    .theatre-ia-wrap, .topinblock, .welcome-left, .row, .container-ia, 
                                    .download-options, .boxy, .box, .threecolumns, .metadata, 
                                    .download-button, .stealth, .item-details-metadata, 
                                    .item-details-about, .item-details-right, .item-details-left,
                                    .navbar, .nav, .header, .footer, .sidebar, .menu,
                                    .ia-header, .ia-footer, .ia-nav, .archive-nav { 
                                        display: none !important; 
                                        visibility: hidden !important;
                                    }
                                    body { 
                                        background: #000 !important; 
                                        overflow: hidden !important;
                                    }
                                    canvas, #canvas, #emulator, .dosbox-container { 
                                        position: absolute !important; 
                                        top: 0 !important; 
                                        left: 0 !important; 
                                        width: 100% !important; 
                                        height: 100% !important; 
                                        z-index: 9999 !important;
                                    }
                                \`;
                                doc.head.appendChild(style);
                                
                                // Keep trying to click the start button every second for 10 seconds
                                let attempts = 0;
                                const clickInterval = setInterval(() => {
                                    attempts++;
                                    if (attempts > 10) {
                                        clearInterval(clickInterval);
                                        return;
                                    }
                                    
                                    for (let selector of selectors) {
                                        const btn = doc.querySelector(selector);
                                        if (btn && btn.style.display !== 'none') {
                                            btn.click();
                                            console.log('Auto-clicked start button (attempt ' + attempts + ')');
                                            clearInterval(clickInterval);
                                            break;
                                        }
                                    }
                                }, 1000);
                                
                            } catch(e) { 
                                console.log('Cross-origin restriction, but game will still work'); 
                            }
                        }, 1000);
                    ">
                </iframe>
            `;
        }
    }, []);

    return (
        <Window
            top={20}
            left={20}
            width={width}
            height={height}
            windowTitle="SimCity"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText="Powered by Archive.org"
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            minimizeWindow={props.onMinimize || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <div
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    border: 'none'
                }}
            />
        </Window>
    );
};

export default SimCityApp;