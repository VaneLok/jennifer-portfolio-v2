import React, { useState } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface DiggerAppProps extends WindowAppProps {}

const DiggerApp: React.FC<DiggerAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Digger"
            windowBarIcon="windowGameIcon"
            windowBarColor="#2E4B00"
            bottomLeftText={''}
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            minimizeWindow={props.onMinimize || (() => {})}
        >
            <iframe
                src="/clean-digger.html"
                width={width}
                height={height - 30}
                style={{
                    border: 'none',
                    backgroundColor: '#000',
                    display: 'block'
                }}
                title="Digger Game"
            />
        </Window>
    );
};

export default DiggerApp;
