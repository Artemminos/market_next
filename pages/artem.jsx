import React, {useState, useEffect} from 'react';
import {Divider, List, Typography} from 'antd';
import {Button, Checkbox, Form, Input} from 'antd';
import {useRouter} from 'next/router'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


function filterlist() {
    const router = useRouter();
    const [form] = Form.useForm();

    const [filterQuery, setFilterQuery] = useState(data);
    const [rendered, setRendered] = useState(false);
    const filterFN = (string) => {
        const regEx = new RegExp(string, 'gi');
        setFilterQuery(filterQuery.filter((string) => string.match(regEx)));
    }

    useEffect(() => {
        setRendered(true);
        form.setFieldsValue({
            ...router.query
        });
        filterFN(router.query.simple)
    }, [router.query])


    const onFinish = (values) => {
        const stringified = queryString.stringify(values);//object to query
        router.push({
            query: stringified,
        });
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    return (
        <>
            <Divider orientation="left">Default Size</Divider>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={filterQuery}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark></Typography.Text>{item}
                    </List.Item>
                )}
            />

            {rendered && <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    ...router.query
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Введите начало предложения"
                    name="simple"
                    rules={[
                        {
                            required: false,
                            message: 'Пожалйуста, введите начало предложения',
                        },
                    ]}
                >
                    <Input
                        placeholder="Введите начало предложения"></Input>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            setFilterQuery(data);
                        }}
                    >
                        Сбросить фильтр
                    </Button>
                </Form.Item>
            </Form>}

        </>
    );
}

export default filterlist
