import { MenuProps } from 'antd'
import {
    ArrowLeftOutlined,
    DashboardOutlined,
    FormOutlined, MailOutlined, SettingOutlined,
    TableOutlined
} from '@ant-design/icons'
import React from "react";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        label,
        key,
        icon,
        children,
        type,
    } as MenuItem;
}

export const SiderItems: MenuItem[] = [
    getItem('Dashboard', '/', <DashboardOutlined />),
    getItem('Form', 'form', <FormOutlined />, [
        getItem('Basic Form', 'form/basic_form'),
        getItem('Step Form', 'form/step_form'),
        getItem('Advanced Form', 'form/advanced_form'),
    ]),
    getItem('List', 'list', <TableOutlined />, [
        getItem('Search Table', 'list/search_table'),
    ]),
]

export const HeaderItems: MenuItem[] = [
    getItem('My Profile', 'profile', <MailOutlined/>),
    getItem('My Setting', 'profile/setting', <SettingOutlined/>),
    getItem('Log out', 'login', <ArrowLeftOutlined/>),
];