import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';
import type { WindowAppProps } from '../../types/WindowAppProps';

export interface HenordleAppProps extends WindowAppProps {}

const HenordleApp: React.FC<HenordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Henordle"
            closeWindow={props.onClose || (() => {})}
            onInteract={props.onInteract || (() => {})}
            minimizeWindow={props.onMinimize || (() => {})}
            bottomLeftText={'© Copyright 2025 Jennifer Amaya'}
        >
            <div style={{ width: '100%', height: '100%' }}>
                <Wordle />
            </div>
        </Window>
    );
};

export default HenordleApp;
