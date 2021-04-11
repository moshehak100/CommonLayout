import React from 'react';
import MainNav from '../components/MainNav';
import Cover from '../components/Cover';
import BoxList from '../components/BoxList';
import {boxs} from '../boxs';
import './App.css';

function App() {
  const PORT = process.env.PORT;
  // console.log('port:', PORT);
  
  return (
    <div>
      <MainNav/>
      <Cover/>
      <BoxList items={boxs}/>
    </div>
  );
}

export default App;
