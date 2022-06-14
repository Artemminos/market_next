import React from 'react';
import {Space, Table, Tag, Button, Checkbox, Form, Input} from 'antd';
import _ from 'underscore';

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
                    {male ? 'Men' : 'Woman'}
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
        male: true,
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        male: true

    },
    {
        key: '3',
        name: 'Anya',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        male: false

    },
    {
        key: '4',
        name: 'Maria>',
        age: 66,
        address: 'Sidney No.',
        male: false
    },
];

const TablePage = () => {
    const [filtredArray, setFiltredArray] = React.useState(serverData);

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

            <Input
                onChange={(event) => {
                    const value = event.target.value
                    filterFn(value, 'name')
                }}
                placeholder={'name'}
            />
            <Input
                onChange={(event) => {
                    const value = event.target.value
                    filterFn(value, 'age')
                }}
                placeholder={'age'}
            />
            <Input
                onChange={(event) => {
                    const value = event.target.value
                    filterFn(value, 'address')
                }}
                placeholder={'address'}
            />
            <Input
                onChange={(event) => {
                    const value = event.target.value
                    filterFn(value, 'male')
                }}
                placeholder={'male'}
            />
        </div>
    );
};

export default TablePage;