import React, { useRef, useState } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface DoomAppProps extends WindowAppProps {}

const DoomApp: React.FC<DoomAppProps> = (props) => {
    const [width, setWidth] = useState(980);
    const [height, setHeight] = useState(670);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const startGame = () => {
        if (isGameStarted || isLoading) return;
        
        setIsLoading(true);
        
        // Create the game iframe
        if (canvasRef.current) {
            canvasRef.current.innerHTML = `
                <div style="width: 100%; height: 100%; position: relative; background: #000;">
                    <iframe 
                        src="https://silentspacemarine.com/" 
                        style="width: 100%; height: 100%; border: none; background: #000;"
                        allowfullscreen
                        allow="autoplay; fullscreen; gamepad; clipboard-write">
                    </iframe>
                </div>
            `;
            
            setIsGameStarted(true);
            setIsLoading(false);
        }
    };

    const resetGame = () => {
        if (canvasRef.current) {
            canvasRef.current.innerHTML = '';
        }
        setIsGameStarted(false);
        setIsLoading(false);
    };

    const toggleFullscreen = () => {
        if (!canvasRef.current) return;
        
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            canvasRef.current.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        }
    };

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="DOOM"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Original 1993 Experience'}
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            minimizeWindow={props.onMinimize || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                color: '#00ff00',
                fontFamily: '"Courier New", monospace',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    padding: '20px',
                    background: '#000',
                    borderBottom: '2px solid #333'
                }}>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#ff0000',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        margin: '0 0 10px 0'
                    }}>DOOM</h1>
                    <p style={{
                        fontSize: '1rem',
                        color: '#888',
                        margin: '0'
                    }}>Original 1993 Experience - Authentic DOS Version</p>
                </div>

                {/* Controls */}
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'center',
                    padding: '20px',
                    background: '#111'
                }}>
                    <button 
                        onClick={startGame}
                        disabled={isGameStarted || isLoading}
                        style={{
                            padding: '12px 24px',
                            background: isGameStarted || isLoading 
                                ? '#666' 
                                : 'linear-gradient(45deg, #ff0000, #cc0000)',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'white',
                            fontFamily: '"Courier New", monospace',
                            fontWeight: 'bold',
                            cursor: isGameStarted || isLoading ? 'not-allowed' : 'pointer',
                            textTransform: 'uppercase'
                        }}
                    >
                        {isLoading ? 'Loading...' : isGameStarted ? 'Game Started' : 'Start Game'}
                    </button>
                    <button 
                        onClick={resetGame}
                        disabled={!isGameStarted}
                        style={{
                            padding: '12px 24px',
                            background: isGameStarted 
                                ? 'linear-gradient(45deg, #ff0000, #cc0000)' 
                                : '#666',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'white',
                            fontFamily: '"Courier New", monospace',
                            fontWeight: 'bold',
                            cursor: isGameStarted ? 'pointer' : 'not-allowed',
                            textTransform: 'uppercase'
                        }}
                    >
                        Reset
                    </button>
                    <button 
                        onClick={toggleFullscreen}
                        style={{
                            padding: '12px 24px',
                            background: 'linear-gradient(45deg, #ff0000, #cc0000)',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'white',
                            fontFamily: '"Courier New", monospace',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textTransform: 'uppercase'
                        }}
                    >
                        Fullscreen
                    </button>
                </div>

                {/* Game Area */}
                <div style={{
                    background: '#000',
                    border: '2px solid #333',
                    margin: '0 20px',
                    borderRadius: '4px',
                    flex: 1
                }}>
                    <div 
                        ref={canvasRef}
                        style={{
                            width: '100%',
                            height: '100%',
                            background: '#000',
                            border: '1px solid #444',
                            minHeight: '400px'
                        }}
                    />
                </div>

                {/* Instructions */}
                <div style={{
                    background: '#111',
                    border: '1px solid #333',
                    borderRadius: '4px',
                    padding: '15px',
                    margin: '20px',
                    fontSize: '0.8rem'
                }}>
                    <h3 style={{color: '#ff0000', marginBottom: '10px', fontSize: '1rem'}}>Original DOOM Controls</h3>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                        <div><span style={{background: '#333', padding: '2px 6px', borderRadius: '3px', color: '#00ff00'}}>↑/↓</span> Move Forward/Backward</div>
                        <div><span style={{background: '#333', padding: '2px 6px', borderRadius: '3px', color: '#00ff00'}}>←/→</span> Turn Left/Right</div>
                        <div><span style={{background: '#333', padding: '2px 6px', borderRadius: '3px', color: '#00ff00'}}>Ctrl</span> Shoot/Fire</div>
                        <div><span style={{background: '#333', padding: '2px 6px', borderRadius: '3px', color: '#00ff00'}}>Space</span> Use/Open Doors</div>
                        <div><span style={{background: '#333', padding: '2px 6px', borderRadius: '3px', color: '#00ff00'}}>Shift</span> Run</div>
                        <div><span style={{background: '#333', padding: '2px 6px', borderRadius: '3px', color: '#00ff00'}}>Tab</span> Map</div>
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default DoomApp;
