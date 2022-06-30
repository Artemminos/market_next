import React from 'react';
import {Card, Space, Input} from 'antd';
import {EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {useRouter} from 'next/router'
import {ArrowFunctionExpression} from "@typescript-eslint/types/dist/generated/ast-spec";

const {Meta} = Card;

interface IShortDesc {
    memory: string,
    video: string,
    color: string
}

interface IComputersData {
    name: string,
    cost: string,
    short_desc: IShortDesc
    image: string,
    _id: string,
    callback?: (f: string, s: number) => unknown
}

interface IProps {
    data: IComputersData[];

}

const enum EContentType {
    memory = 'memory',
    video = 'video',
    color = 'color',
    weight = 'weight',
    size = 'size',
}

type TRenderSomeContent = (type: string, value: string) => string
const Computers: React.FC<IProps> = ({data}) => {
    const router = useRouter()
    const renderSomeContent: TRenderSomeContent = (type, value) => {
        let result: string;
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
    const [computersList, setComputersList] = React.useState<IComputersData[]>([]);

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
            <Input onChange={(event) => {
                console.log(event.target.value)
            }}/>
            <div onClick={(event) => {
                const som = event as React.MouseEvent<HTMLDivElement>

            }}>

            </div>
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