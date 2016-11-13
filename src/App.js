import React from 'react';
import Grid from './Grid'
import Header from './Header'
import LightBox from './LightBox'
import './App.css';

const App = ({ assets }) => {
  console.log(assets[0])
  return (
    <div>
      <Header/>
      <LightBox { ...assets[0] } />
      <Grid assets={ assets }/>
    </div>
  )
}

export default App;
