import { IconType } from 'react-icons';
import { FiHome, FiColumns, FiCompass, FiPenTool, FiSettings } from 'react-icons/fi';

export interface LinkConfig {
    label: string;
    path: string;
    icon: IconType;
}

export const links: Record<string, LinkConfig> = {
    home: { label: 'Home', path: '/', icon: FiHome },
    map: { label: 'Map', path: '/map', icon: FiCompass },
    dashboard: { label: 'Dashboard', path: '/projectHome', icon: FiColumns },
    assessment: { label: 'Assessment', path: '/', icon: FiPenTool },
    settings: { label: 'Settings', path: '/', icon: FiSettings },
};
