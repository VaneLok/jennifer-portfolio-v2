import React, { useState } from 'react';
import Window from '../os/Window';
import type { WindowAppProps } from '../../types/WindowAppProps';
import SimpleDosPlayer from '../dos/SimpleDosPlayer';

export interface SimCityAppProps extends WindowAppProps {}

const SimCityApp: React.FC<SimCityAppProps> = (props) => {
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="SimCity"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Powered by js-dos'}
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            minimizeWindow={props.onMinimize || (() => {})}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <SimpleDosPlayer
                width={width}
                height={height}
                bundleUrl="/simcity.jsdos"
            />
        </Window>
    );
};

export default SimCityApp;
