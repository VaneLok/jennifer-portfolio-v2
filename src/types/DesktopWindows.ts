import type { IconName } from '../assets/icons';

export interface DesktopWindows {
    [key: string]: {
        isOpen?: boolean;
        component: React.ComponentType<any> | React.ReactElement;
        props?: any;
        zIndex?: number;
        minimized?: boolean;
        name?: string;
        icon?: IconName;
    };
}
