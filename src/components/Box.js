import React from 'react';
import './Box.css';

const Box = ({image}) => {
    console.log(image)

    return (
        <div className='box zone'>
            <img src={image} alt='box img'/>
        </div>
    );
}

export default Box;