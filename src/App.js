import React from 'react';
import Grid from './Grid'
import Header from './Header'
import LightBox from './LightBox'
import './App.css';

const App = ({ assets, currentLightBoxImage }) => {
  return (
    <div>
      <Header/>
      <LightBox { currentLightBoxImage } />
      <Grid assets={ assets }/>
    </div>
  )
}

export default App;
