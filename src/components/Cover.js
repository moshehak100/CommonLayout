import React from 'react';
import './Cover.css';

const Cover = () => {
  return (<div className="container zone red"><img className="cover" src={process.env.PUBLIC_URL + '/images/undraw.png'} alt='cover'/></div>);
}

export default Cover;