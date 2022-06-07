import React from 'react';
import {Menu} from "antd";
import {PieChartOutlined, RiseOutlined} from "@ant-design/icons";
import Link from 'next/link'

export const NavigationMenu = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item icon={<PieChartOutlined/>}>
                <Link href={'/'}>
                    Главная
                </Link>
            </Menu.Item>
            <Menu.Item icon={<RiseOutlined/>}>
                <Link href={'/market/computers'}>
                    Компы
                </Link>
            </Menu.Item>
            <Menu.Item icon={<RiseOutlined/>}>
                <Link href={'/example'}>
                    Компы
                </Link>
            </Menu.Item>
            <Menu.Item icon={<RiseOutlined/>}>
                <Link href={'/query/1'}>
                    Query
                </Link>
            </Menu.Item>
        </Menu>
    );
};
