import React from 'react';
import Box from './Box';
import './BoxList.css';

const BoxList = ({items}) => {
    console.log(items);
    return (
        <div className="zone blue grid-wrapper">
        {
            items.map((box,i) => {
                return (
                    <Box 
                        key={i}
                        image={items[i].image}
                    />
                );
            })
        }
        </div>
    );
}

export default BoxList;