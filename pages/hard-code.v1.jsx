import React from 'react';
import Card from "../components/content/Card";
import List from "../components/content/List";
import Map from "../components/content/Map";
import Users from "../components/content/user";


const serverData = [
    {type: 'card', card: [1]},
    {type: 'card', card: [2]},
    {type: 'list', list: [3]},
    {type: 'list', list: [4]},
    {type: 'map', map: [5]},
    {type: 'users', users: [6]},
    {type: 'users', users: [7]},
]
const HardCode = () => {

    return (
        <div>
            {serverData.map((item,index)=>{
                console.log(item)
                if (item.type === 'card'){
                    return <Card data={item[item.type]}/>
                }
                if (item.type === 'list'){
                    return <List data={item[item.type]}/>
                }
                if (item.type === 'map'){
                    return <Map data={item[item.type]}/>
                }
                if (item.type === 'users'){
                    return <Users data={item[item.type]}/>
                }
            })}

        </div>
    );
};

export default HardCode;