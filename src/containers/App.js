import React from 'react';
import MainNav from '../components/MainNav';
import Cover from '../components/Cover';
import BoxList from '../components/BoxList';
import {boxs} from '../boxs';
import './App.css';

function App() {
  return (
    <div>
      <MainNav/>
      <Cover/>
      <BoxList items={boxs}/>
    </div>
  );
}

export default App;
