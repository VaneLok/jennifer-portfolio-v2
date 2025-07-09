import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface TetrisAppProps extends WindowAppProps {}

const TetrisApp: React.FC<TetrisAppProps> = (props) => {
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [gameLoaded, setGameLoaded] = useState(false);

    useEffect(() => {
        if (canvasRef.current && !gameLoaded) {
            // Try to load local Tetris .jsdos bundle first
            const tetrisPath = '/tetris.jsdos';
            
            fetch(tetrisPath)
                .then(response => {
                    if (response.ok) {
                        // Load local Tetris using global Dos object
                        const Dos = (window as any).Dos;
                        if (Dos) {
                            const canvas = document.createElement('canvas');
                            canvas.style.width = '100%';
                            canvas.style.height = '100%';
                            canvasRef.current!.appendChild(canvas);
                            const dos = Dos(canvas, {
                                wdosboxUrl: '/js-dos/wdosbox.js',
                            });
                            dos.run(tetrisPath).then(() => {
                                setGameLoaded(true);
                            });
                        } else {
                            throw new Error('Dos API not found');
                        }
                    } else {
                        throw new Error('Local Tetris not found');
                    }
                })
                .catch(() => {
                    // Fallback to web-based Tetris
                    canvasRef.current!.innerHTML = `
                        <iframe 
                            src="https://archive.org/embed/tetris-nes" 
                            style="width: 100%; height: 100%; border: none; background: #000;"
                            allowfullscreen
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allow="autoplay; fullscreen; gamepad; clipboard-write">
                        </iframe>
                    `;
                    setGameLoaded(true);
                });
        }
    }, [gameLoaded]);

    return (
        <Window
            top={50}
            left={50}
            width={width}
            height={height}
            windowTitle="Tetris"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText="Classic Tetris Game"
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
                {!gameLoaded && <div>Loading Tetris...</div>}
            </div>
        </Window>
    );
};

export default TetrisApp;
