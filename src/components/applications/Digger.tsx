import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface TetrisAppProps extends WindowAppProps {}

const TetrisApp: React.FC<TetrisAppProps> = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight - 32);
    const [top] = useState(0);
    const [left] = useState(0);
    const [hideChrome] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setFadeIn(true);
        if (canvasRef.current) {
            canvasRef.current.innerHTML = `
                <iframe 
                    src="https://archive.org/embed/tetris-nes" 
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allow="autoplay; fullscreen; gamepad; clipboard-write">
                </iframe>
            `;
        }
    }, []);

    return (
        <Window
            top={top}
            left={left}
            width={width}
            height={height}
            windowTitle={hideChrome ? '' : 'Tetris'}
            windowBarColor={hideChrome ? 'transparent' : '#1C1C1C'}
            windowBarIcon={hideChrome ? undefined : 'windowGameIcon'}
            bottomLeftText={hideChrome ? '' : 'Powered by dos.zone'}
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
                    opacity: fadeIn ? 1 : 0,
                    transition: 'opacity 0.7s ease-in'
                }}
            />
        </Window>
    );
};

export default TetrisApp;
