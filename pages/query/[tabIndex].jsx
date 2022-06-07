import React from 'react';
import {useRouter} from "next/router";
import {Tabs} from 'antd';

const TabIndex = () => {
    const router = useRouter()//получаем объект роутинга
    console.log(router)
    const onChange = (key) => {
        router.replace(key)//пушим пользователя на таб индекс который нам приходит в key не записывая это в историю
    };
    const {TabPane} = Tabs;
    const tabIndex = router.query.tabIndex //получаем таб индекс

    return (
        <div>
            <Tabs activeKey={tabIndex}  onChange={onChange}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    );
};

export default TabIndex;