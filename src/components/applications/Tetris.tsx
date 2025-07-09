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
                    src="https://archive.org/details/TETRISC"
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allow="autoplay; fullscreen; gamepad; clipboard-write">
                </iframe>
            `;
            
            // Add instructions for user
            const instructionDiv = document.createElement('div');
            instructionDiv.style.cssText = `
                position: absolute;
                top: 10px;
                left: 10px;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 8px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            instructionDiv.textContent = 'Click the green ▶ button to start!';
            canvasRef.current.appendChild(instructionDiv);
            
            // Remove instruction after 5 seconds
            setTimeout(() => {
                if (instructionDiv.parentNode) {
                    instructionDiv.parentNode.removeChild(instructionDiv);
                }
            }, 5000);
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
                    border: 'none',
                    position: 'relative'
                }}
            />
        </Window>
    );
};

export default TetrisApp;
