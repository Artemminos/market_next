import React from 'react';
import _ from 'underscore';
const Underscore = () => {
    const obj = {
        name:'art',
        pass:123,
    }
    console.log(_(obj).omit('name'))
    return (
        <div>

        </div>
    );
};

export default Underscore;