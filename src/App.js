import React from 'react';
import Grid from './Grid'
import Header from './Header'
import LightBox from './LightBox'
import './App.css';

const App = ({ state }) => {
  const { assets, currentLightBoxImageID } = state
  console.log(assets)
  return (
    <div>
      <Header/>
      <LightBox { ...assets[currentLightBoxImageID] } />
      <Grid assetIDs={ assets.assetIDs } assets={ assets.assets } />
    </div>
  )
}

export default App;
