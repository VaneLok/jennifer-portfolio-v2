import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface OregonTrailAppProps extends WindowAppProps {}

const OregonTrailApp: React.FC<OregonTrailAppProps> = (props) => {
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.innerHTML = `
                <iframe 
                    src="https://archive.org/embed/msdos_Oregon_Trail_Deluxe_The_1992" 
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    allow="autoplay; fullscreen; gamepad; clipboard-write">
                </iframe>
            `;
        }
    }, []);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Oregon Trail"
            windowBarColor="#1C1C1C"
            windowBarIcon="trailIcon"
            bottomLeftText={'Powered by Archive.org'}
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

export default OregonTrailApp;
