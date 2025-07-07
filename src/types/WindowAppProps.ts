export interface WindowAppProps {
    onClose?: () => void;
    onMinimize?: () => void;
    onInteract?: () => void;
    closeWindow?: () => void;
    minimizeWindow?: () => void;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    windowTitle?: string;
    bottomLeftText?: string;
    onWidthChange?: (width: number) => void;
    onHeightChange?: (height: number) => void;
}
