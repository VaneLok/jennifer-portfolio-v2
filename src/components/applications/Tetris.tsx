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
                    src="https://archive.org/embed/TETRISC?autoplay=1"
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
