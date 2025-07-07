import React, { useState } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface OregonTrailAppProps extends WindowAppProps {}

const OregonTrailApp: React.FC<OregonTrailAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="The Oregon Trail"
            windowBarIcon="windowGameIcon"
            windowBarColor="#240C00"
            bottomLeftText={''}
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            minimizeWindow={props.onMinimize || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <iframe
                src="/clean-oregon-trail.html"
                width={width}
                height={height - 30}
                style={{
                    border: 'none',
                    backgroundColor: '#000',
                    display: 'block'
                }}
                title="Oregon Trail Game"
            />
        </Window>
    );
};

export default OregonTrailApp;
