import React from 'react';
import {Space, Table, Tag, Button, Checkbox, Form, Input} from 'antd';
import _ from 'underscore';
const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: (text, item, index) => {
            return <a>{text}</a>
        },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Пол',
        dataIndex: 'male',
        key: 'male',
        render: (male) => {
            return (
                <>
                    {male ? 'Men' : 'Woman'}
                </>
            )
        }
    },
    {
        title: 'Тэги',
        key: 'tags',
        render: (text, item) => {
            return (
                <>
                    {item.tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';

                        if (tag === 'loser') {
                            color = 'volcano';
                        }

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )
        },
    },
];
const serverData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        male: true,
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
        male: true

    },
    {
        key: '3',
        name: 'Anya',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        male: false

    },
    {
        key: '4',
        name: 'Maria>',
        age: 66,
        address: 'Sidney No.',
        tags: ['loook', 'up'],
        male: false
    },
];

const TablePage = () => {
    const [filtredArray, setFiltredArray] = React.useState([]);
    React.useEffect(() => {
        setFiltredArray(serverData)
    }, [])

    const onFinish = (values) => {
        setFiltredArray(prev => {

            const filtred = serverData.filter((item) => {

                let res;

                for (let key in item) {
                    const valueRegEx = values[key] ? new RegExp(values[key], 'gi') : null

                    if (values[key] && item[key] && String(item[key]).match(valueRegEx)) {

                        res = true

                        break

                    } else {
                        res = false

                    }
                }

                return res
            })
            const uslovie = Object.values(_(values).omit(_.isUndefined)).length

            if (!uslovie) {
                return serverData
            }
            return filtred
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tabsColums = Object.keys(filtredArray?.[0] || {}).filter((elem) => elem !== 'key');
    return (
        <div>
            <Table columns={columns} dataSource={filtredArray}/>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {tabsColums.map((text, index) => {
                    return (
                        <Form.Item
                            label={text}
                            name={text}
                        >
                            <Input placeholder={text}/>
                        </Form.Item>
                    )
                })}
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TablePage;


