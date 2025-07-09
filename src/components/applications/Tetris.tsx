import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface TetrisAppProps extends WindowAppProps {}

const TetrisApp: React.FC<TetrisAppProps> = (props) => {
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.innerHTML = `
                <iframe 
                    src="https://archive.org/embed/msdos_Tetris_Classic_1992"
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
                                const startBtn = doc.querySelector('button[class*=start], button[class*=play], .play-button, .start-button, button:contains(Start), button:contains(Play)');
                                if (startBtn) {
                                    startBtn.click();
                                }
                                // Hide Archive.org interface elements
                                const style = doc.createElement('style');
                                style.textContent = \`
                                    .theatre-ia-wrap, .topinblock, .welcome-left, .row, .container-ia, .download-options, .boxy, .box, .threecolumns, .metadata, .download-button, .stealth, .item-details-metadata, .item-details-about, .item-details-right, .item-details-left { display: none !important; }
                                    body { background: #000 !important; }
                                    canvas, #canvas, #emulator { position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; }
                                \`;
                                doc.head.appendChild(style);
                            } catch(e) { console.log('Cross-origin restriction, but game will still work'); }
                        }, 2000);
                    ">
                </iframe>
            `;
        }
    }, []);

    return (
        <Window
            top={50}
            left={50}
            width={width}
            height={height}
            windowTitle="Tetris"
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

export default TetrisApp;
