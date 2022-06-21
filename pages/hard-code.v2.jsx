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
    const Components = {
        card: Card,
        list: List,
        map: Map,
        users: Users,
    }

    return (
        <div>
            {serverData.map((item, index) => {
                const Component = Components[item.type]
                return <Component data={item[item.type]} />
            })}

        </div>
    );
};

export default HardCode;