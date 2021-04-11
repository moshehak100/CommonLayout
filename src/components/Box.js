import React from 'react';
import './Box.css';

const Box = ({image}) => {
    console.log(image)

    return (
        <div className='box zone'>
            <img src={process.env.PUBLIC_URL + image} alt='box img'/>
        </div>
    );
}

export default Box;