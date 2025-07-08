import React, { useRef, useState, useEffect } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface DoomAppProps extends WindowAppProps {}

const DoomApp: React.FC<DoomAppProps> = (props) => {
    const [width, setWidth] = useState(1000);  // Slightly wider for better game view
    const [height, setHeight] = useState(700); // Slightly taller for better game view
    const canvasRef = useRef<HTMLDivElement>(null);
    const [gameStatus, setGameStatus] = useState('loading');

    // Auto-load the game when component mounts
    useEffect(() => {
        if (canvasRef.current) {
            startDoomGame();
        }
    }, []);

    const startDoomGame = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        canvas.style.display = 'block';
        
        const iframe = document.createElement('iframe');
        iframe.src = 'https://silentspacemarine.com/';
        iframe.style.cssText = 'width: 100%; height: 100%; border: none; background: #000;';
        iframe.setAttribute('allow', 'autoplay; fullscreen; gamepad; clipboard-write; cross-origin-isolated');
        iframe.setAttribute('allowfullscreen', 'true');
        
        iframe.onload = () => {
            setGameStatus('running');
            setTimeout(() => {
                iframe.focus();
            }, 500);
        };
        
        iframe.onerror = () => {
            setGameStatus('error');
        };
        
        canvas.innerHTML = '';
        canvas.appendChild(iframe);
    };

    const renderGameStatus = () => {
        switch (gameStatus) {
            case 'loading':
                return (
                    <div style={statusStyles}>
                        <div style={{marginBottom: '20px', fontSize: '24px', color: '#8B0000', fontWeight: 'bold', letterSpacing: '3px'}}>DOOM</div>
                        <div style={{marginBottom: '10px'}}>Loading game...</div>
                        <div style={{fontSize: '12px', color: '#666'}}>Classic 1993 Experience Loading...</div>
                        <div style={{fontSize: '10px', color: '#444', marginTop: '10px'}}>Click inside the game area when it loads</div>
                    </div>
                );
            case 'error':
                return (
                    <div style={statusStyles}>
                        <div style={{marginBottom: '20px', fontSize: '24px', color: '#8B0000', fontWeight: 'bold', letterSpacing: '3px'}}>DOOM</div>
                        <div style={{marginBottom: '20px'}}>Unable to load game</div>
                        <button 
                            style={buttonStyles}
                            onClick={() => window.open('https://silentspacemarine.com/', '_blank')}
                        >
                            Open in New Window
                        </button>
                        <button 
                            style={buttonStyles}
                            onClick={startDoomGame}
                        >
                            Try Again
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    const statusStyles = {
        width: '100%',
        height: '100%',
        background: '#000',
        color: '#00ff00',
        fontFamily: '"Courier New", monospace',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        textAlign: 'center' as const
    };

    const buttonStyles = {
        background: '#ff0000',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontFamily: '"Courier New", monospace',
        cursor: 'pointer',
        borderRadius: '4px',
        margin: '5px',
        fontSize: '12px'
    };

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Doom"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'External DOOM - Click to interact'}
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            minimizeWindow={props.onMinimize || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <div style={{
                width: '100%',
                height: '100%',
                background: '#000',
                position: 'relative'
            }}>
                {gameStatus !== 'running' && renderGameStatus()}
                <div
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: '#000',
                        display: gameStatus === 'running' ? 'block' : 'none'
                    }}
                    onClick={() => {
                        // When clicked, try to focus the iframe to make it interactive
                        const iframe = canvasRef.current?.querySelector('iframe');
                        if (iframe) {
                            iframe.focus();
                            iframe.click();
                        }
                    }}
                />
            </div>
        </Window>
    );
};

export default DoomApp;
