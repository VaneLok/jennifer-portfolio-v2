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
                    src="https://dos.zone/SimCity/SimCity/"
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
            top={20}
            left={20}
            width={width}
            height={height}
            windowTitle="SimCity"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText="Powered by dos.zone"
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