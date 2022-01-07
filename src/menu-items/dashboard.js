// assets
import { IconChartLine, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconChartLine,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconChartLine,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
