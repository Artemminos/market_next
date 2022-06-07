import React from 'react';
import {useRouter} from "next/router";
import {Tabs} from 'antd';

const Users = () => {
    const router = useRouter()//получаем объект роутинга
    console.log(router)
    const onChange = (key) => {
        router.replace(key)//пушим пользователя на таб индекс который нам приходит в key не записывая это в историю
    };

    const id = router.query.id //получаем id

    return (
        <div>
            <Tabs activeKey={id}  onChange={onChange}>
                <Tabs.TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default Users;