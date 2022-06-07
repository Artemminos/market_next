import React from 'react';
import {Card, Space} from 'antd';
import {useRouter} from 'next/router'


const Computers = ({data}) => {
    const router = useRouter()
    console.log(router.query)
    const queryStr = '/searchParams?name=artem&age=25'
    const fnPushToQuery = () => {
        const name = 'artem'
        router.push(`name=${name}`)
    }
    return (
        <Space direction={'horizontal'}>


        </Space>
    );
};


export default Query;