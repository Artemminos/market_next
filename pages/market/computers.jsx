import React from 'react';
import {Card, Space} from 'antd';
import {EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';

const {Meta} = Card;


const Computers = ({data}) => {
    const renderSomeContent = (type, value) => {
        let result;
        switch (type) {
            case 'memory': {

                result = value + ' ' + 'memory'
                break
            }
            case 'video': {
                result = value + ' ' + 'video'
                break
            }
            case 'color': {
                result = value + ' ' + 'color'
                break
            }
            case 'weight': {
                result = value + ' ' + 'weight'
                break
            }
            case 'size': {
                result = value + ' ' + 'size'
                break
            }
            default: {
                result = value
                break;
            }
        }
        return result
    }
    const [computersList, setComputersList] = React.useState([]);

    React.useEffect(() => {
        setComputersList(data)
    }, [])


    const createAnotherObj = (item) => {
        //const newArr = [...computersList,item]
        //setComputersList(newArr)

        //setComputersList((prev)=>{
        //    return [...prev,item]
        //})

        setComputersList([...computersList, item])
    }
    const deleteObj = (item) => {

        const newArr = computersList.filter((elem) => elem._id !== item._id)
        setComputersList(newArr)
    }
    const editObj = (itemIndex) => {
        setComputersList(prev => {
            const copy = [...prev];
            copy[itemIndex].name = copy[itemIndex].name.toUpperCase()
            return copy
        })
    }
    return (
        <Space direction={'horizontal'}>
            {computersList.map((item, index) => {
                return (
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt="example"
                                src={item.image}
                            />
                        }
                        actions={[
                            <PlusOutlined onClick={() => createAnotherObj(item)} key="plus"/>,
                            <DeleteOutlined onClick={() => deleteObj(item)} key="edit"/>,
                            <EditOutlined onClick={() => editObj(index)} key={'edit'}/>
                        ]}
                    >
                        <Meta
                            title={item.name}
                            description={<>
                                {Object.keys(item.short_desc).map((elem, index) => {
                                    return <div key={index}>
                                        {renderSomeContent(elem, item.short_desc[elem])}
                                    </div>
                                })}
                            </>}
                        />
                    </Card>
                )
            })}

        </Space>
    );
};

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/hello`)
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}

export default Computers;