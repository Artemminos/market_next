import React from 'react';
import {Table, Button, Checkbox, Form, Input} from 'antd';
import {useRouter} from 'next/router'


const RenderDiv = ({text, children}) => <div>{children}</div>
const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: (text, item, index) => {
            return <RenderDiv>{text}</RenderDiv>
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
                <div>
                    {male}
                </div>
            )
        }
    },

];
const serverData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        male: 'Men',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        male: 'Men'
    },
    {
        key: '3',
        name: 'Anya',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        male: 'Woman'
    },
    {
        key: '4',
        name: 'Maria>',
        age: 66,
        address: 'Sidney No.',
        male: 'Woman'
    },
];

const TablePage = () => {
    const router = useRouter()
    const [form] = Form.useForm();
    const [filtredArray, setFiltredArray] = React.useState(serverData);
    const [rendered, setRendered] = React.useState(false);

    const filtersToQuery = (obj) => {
        console.log(Boolean(''))
        router.push({
            query: obj
        })
    }
    const queryToFilters = () => {
        return router.query
    }

    const onFinish = (values) => {

        for (let item in values) {
            filterFn(values[item], item);
        }
        console.log(123)
        filtersToQuery(values)
    };

    React.useEffect(() => {
        /*     if (Object.keys(router.query).length) {
                 setRendered(true)
             }*/
        setRendered(true)
        form.setFieldsValue(router.query)
    }, [router.query])

    const filterFn = (value, name) => {
        const regEx = new RegExp(value, 'gi');
        const filtredData = filtredArray.filter((item) => {
            return String(item[name]).match(regEx)
        });
        setFiltredArray(filtredData);
        if (Boolean(value) === false) {
            setFiltredArray(serverData)
        }
    }

    return (
        <div>
            <Table columns={columns} dataSource={filtredArray}/>
            <button
                onClick={() => {
                    form.console.log(form.setFieldsValue({
                        name: 'art',
                        age: 25
                    }))
                }}
            >click
            </button>
            {rendered && <Form
                form={form}
                name="basic"
                initialValues={queryToFilters()}
                onFinish={onFinish}
                autoComplete="off"
            >

                <Form.Item
                    label="name"
                    name="name"
                >
                    <Input

                        placeholder={'name'}
                    />
                </Form.Item>
                <Form.Item
                    label="age"
                    name="age"

                >
                    <Input
                        placeholder={'age'}
                    />
                </Form.Item>
                <Form.Item
                    label="address"
                    name="address"
                >
                    <Input
                        placeholder={'address'}
                    />
                </Form.Item>
                <Form.Item
                    label="male"
                    name="male"
                >
                    <Input
                        placeholder={'male'}
                    />
                </Form.Item>
                <Form.Item

                    label="test"
                    name="test"
                >
                    <Input
                        placeholder={'test'}
                    />
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
                </Form.Item>
            </Form>}
        </div>
    );
};

export default TablePage;