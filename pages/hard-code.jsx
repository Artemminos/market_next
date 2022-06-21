import React from 'react';
const serverData = [
    {type: 'card', card: [1]},
    {type: 'card', card: [2]},
    {type: 'list', list: [3]},
    {type: 'list', list: [4]},
    {type: 'map', map: [5]},
    {type: 'users', users: [6]},
    {type: 'users', users: [7]},
]

const Components = {
    card: require("../components/content/Card").default,
    list: require("../components/content/List").default,
    map: require("../components/content/Map").default,
    users: require("../components/content/user").default,
}
const HardCode = () => serverData.map((item) => Components[item.type](item))
export default HardCode;