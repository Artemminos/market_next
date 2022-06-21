import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Users = () => {
    return (
        <div>
            <Carousel >
                <div>
                    <h3 style={contentStyle}>user 1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>user 2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>user 3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>user 4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default Users;