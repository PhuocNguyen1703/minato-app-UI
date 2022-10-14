import classNames from 'classnames/bind';
import {
    BsColumnsGap,
    BsCalendar2Date,
    BsChatSquareDots,
    BsCheck2Square,
    BsClipboardCheck,
    BsEnvelope,
    BsPerson,
    BsPeople,
    BsAlarm,
} from 'react-icons/bs';
import config from '~/config';

import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

const cx = classNames.bind(styles);

function Sidebar() {
    const menu = [
        {
            icon: <BsColumnsGap />,
            title: 'Dashboards',
            children: [
                {
                    icon: <BsColumnsGap />,
                    title: 'HRM',
                    path: config.routes.email,
                },
                {
                    icon: <BsColumnsGap />,
                    title: 'FI',
                    path: '/setting',
                },
                {
                    icon: <BsColumnsGap />,
                    title: 'SD',
                    path: '/setting',
                },
            ],
        },
        {
            icon: <BsEnvelope />,
            title: 'Email',
            path: config.routes.email,
        },
        {
            icon: <BsChatSquareDots />,
            title: 'Chat',
            path: config.routes.chat,
        },
        {
            icon: <BsCheck2Square />,
            title: 'Todo',
            path: '/todo',
        },
        {
            icon: <BsCalendar2Date />,
            title: 'Calendar',
            path: '/calendar',
        },
        {
            icon: <BsClipboardCheck />,
            title: 'Kanban',
            path: '/kanban',
        },
        {
            icon: <BsPerson />,
            title: 'Profile',
            path: '/profile',
        },
        {
            icon: <BsAlarm />,
            title: 'Check in',
            path: '/checkin',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {menu.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </div>
    );
}

export default Sidebar;
