import React from 'react';
import Grid from './Grid'
import Header from './Header'
import LightBox from './LightBox'
import './App.css';

const App = ({ state }) => {
  return (
    <div>
      <Header />
      <LightBox />
      <Grid />
    </div>
  )
}

export default App;
