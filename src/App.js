import React from 'react';
import Grid from './Grid'
import Header from './Header'
import LightBox from './LightBox'
import './App.css';

const App = ({ state }) => {
  const { assets, currentLightBoxImageID } = state
  return (
    <div>
      <Header/>
      <LightBox shouldRender={ currentLightBoxImageID }
        { ...assets[currentLightBoxImageID] }
      />
      <Grid assetIDs={ assets.assetIDs } assets={ assets.assets } />
    </div>
  )
}

export default App;
