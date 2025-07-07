import React from 'react';
import { getIconByName, type IconName } from '../../assets/icons';

export interface IconProps {
    style?: React.CSSProperties;
    icon: IconName;
    size?: number;
}

const Icon: React.FC<IconProps> = ({ icon, style, size }) => {
    // Special case for Jennifer's J icon
    if (icon === 'jenniferIcon') {
        const jIconStyle: React.CSSProperties = {
            userSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            pointerEvents: 'none',
            ...(style || {}),
            ...(size ? { width: size, height: size } : {}),
        };
        return (
            <div
                className="j-icon"
                style={jIconStyle}
            >
                {/* Left side icon in title bar - document/window icon */}
                <div style={{
                    position: 'absolute',
                    top: '1px',
                    left: '1px',
                    width: '5px',
                    height: '4px',
                    backgroundColor: '#ffffff',
                    border: '0.5px solid #000000',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Document header/title bar */}
                    <div style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#0000ff',
                        marginBottom: '0.5px'
                    }} />
                    {/* Top line of document content */}
                    <div style={{
                        width: '90%',
                        height: '0.5px',
                        backgroundColor: '#000000',
                        marginLeft: '0.2px',
                        marginBottom: '0.2px'
                    }} />
                    {/* Middle line of document content */}
                    <div style={{
                        width: '75%',
                        height: '0.5px',
                        backgroundColor: '#000000',
                        marginLeft: '0.2px',
                        marginBottom: '0.2px'
                    }} />
                    {/* Bottom line of document content */}
                    <div style={{
                        width: '85%',
                        height: '0.5px',
                        backgroundColor: '#000000',
                        marginLeft: '0.2px'
                    }} />
                </div>
                
                {/* Right side window controls */}
                <div style={{
                    position: 'absolute',
                    top: '1px',
                    right: '1px',
                    display: 'flex',
                    gap: '0px'
                }}>
                    {/* Minimize button */}
                    <div style={{
                        width: '3px',
                        height: '3px',
                        backgroundColor: '#c0c0c0',
                        border: '0.5px solid',
                        borderTopColor: '#ffffff',
                        borderLeftColor: '#ffffff',
                        borderRightColor: '#808080',
                        borderBottomColor: '#808080',
                        boxSizing: 'border-box'
                    }} />
                    {/* Maximize button */}
                    <div style={{
                        width: '3px',
                        height: '3px',
                        backgroundColor: '#c0c0c0',
                        border: '0.5px solid',
                        borderTopColor: '#ffffff',
                        borderLeftColor: '#ffffff',
                        borderRightColor: '#808080',
                        borderBottomColor: '#808080',
                        boxSizing: 'border-box'
                    }} />
                    {/* Close button */}
                    <div style={{
                        width: '3px',
                        height: '3px',
                        backgroundColor: '#c0c0c0',
                        border: '0.5px solid',
                        borderTopColor: '#ffffff',
                        borderLeftColor: '#ffffff',
                        borderRightColor: '#808080',
                        borderBottomColor: '#808080',
                        boxSizing: 'border-box'
                    }} />
                </div>
            </div>
        );
    }

    const iconStyle: React.CSSProperties = {
        imageRendering: 'pixelated',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        pointerEvents: 'none',
        ...(style || {}),
        ...(size ? { width: size, height: size } : {}),
    };
    return (
        <img
            style={iconStyle}
            alt=""
            src={getIconByName(icon)}
        />
    );
};

export default Icon;