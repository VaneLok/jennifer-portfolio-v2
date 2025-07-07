import React, { useState } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface ScrabbleAppProps extends WindowAppProps {}

const ScrabbleApp: React.FC<ScrabbleAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Scrabble"
            windowBarIcon="windowGameIcon"
            windowBarColor="#941d13"
            bottomLeftText={''}
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            minimizeWindow={props.onMinimize || (() => {})}
        >
            <iframe
                src="/clean-scrabble.html"
                width={width}
                height={height - 30}
                style={{
                    border: 'none',
                    backgroundColor: '#000',
                    display: 'block'
                }}
                title="Scrabble Game"
            />
        </Window>
    );
};

export default ScrabbleApp;
