import React from 'react';
import Grid from './Grid'
import Header from './Header'
import LightBox from './LightBox'
import './App.css';

const App = ({ assets, currentLightBoxImageID }) => {
  return (
    <div>
      <Header/>
      <LightBox { ...assets[currentLightBoxImageID] } />
      <Grid assets={ assets }/>
    </div>
  )
}

export default App;
