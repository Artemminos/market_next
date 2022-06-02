import React from 'react';
import {Menu} from "antd";
import {PieChartOutlined, RiseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export const NavigationMenu = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item icon={<PieChartOutlined/>}>
                <Link to={'/'}>
                    Главная
                </Link>
            </Menu.Item>
            <Menu.Item icon={<RiseOutlined/>}>
                <Link to={'/coputers'}>
                    Компы
                </Link>
            </Menu.Item>
        </Menu>
    );
};
