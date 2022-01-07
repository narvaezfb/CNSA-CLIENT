// assets
import { IconUserPlus, IconBook, IconHelp, IconSitemap } from '@tabler/icons';


// constant
const icons = {
    IconUserPlus,
    IconBook, 
    IconHelp,
    IconSitemap
};

// ===========================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||=========================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'internal-support',
            title: 'Internal Support',
            type: 'item',
            url: '/internal-support',
            icon: icons.IconBook,
            breadcrumbs: false 
        },
/*         {
            id: 'users',
            title: 'User Roles',
            type: 'item',
            url: '/user-roles',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        }, */
        {
            id: 'documentation',
            title: 'Template by Berry',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
