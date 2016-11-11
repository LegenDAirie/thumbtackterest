import React from 'react';
import Asset from './components/Asset'
import './App.css';

  const App = ({ assets, dispatch }) => (
  <div>
    { assets.map( asset => (
      <Asset
        key={ asset.id }
        thumbnail={ asset.thumbnail }
        caption={ asset.caption }
      />
    ))}
  </div>
)

export default App;
