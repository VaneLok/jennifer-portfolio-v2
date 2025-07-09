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
                    src="https://archive.org/embed/msdos_shareware_fb_SIMCITY?autoplay=1"
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allow="autoplay; fullscreen; gamepad; clipboard-write">
                </iframe>
            `;
            
            // Try to auto-click after load
            setTimeout(() => {
                const iframe = canvasRef.current?.querySelector('iframe');
                if (iframe) {
                    try {
                        // Simulate click on the iframe to trigger any auto-start
                        iframe.click();
                    } catch (e) {
                        console.log('Auto-click attempt failed:', e);
                    }
                }
            }, 3000);
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
            bottomLeftText="SimCity Shareware - Powered by Archive.org"
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#000',
                    color: '#fff',
                }}
            >
                Loading SimCity...
            </div>
        </Window>
    );
};

export default SimCityApp;