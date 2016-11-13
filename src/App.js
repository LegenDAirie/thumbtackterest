import React from 'react';
import Asset from './components/Asset'
import './App.css';

  const App = ({ assets }) => (
  <div className='grid'>
    { assets.map( asset =>
      <Asset key={ asset.id }{ ...asset }/>
    )}
  </div>
)

export default App;
