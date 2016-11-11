import React from 'react';
import './App.css';

// return <li key={ asset.id }><img alt={ asset.caption } src={ asset.url }></img></li>

  const App = ({ assets, dispatch }) => (
  <div>
    { assets.map(function (asset) {
      return <img
        key={ asset.id }
        src={ asset.thumbnail }
        alt={ asset.caption }
        width='100'
        height='100'
      />
    })}
  </div>
)

export default App;
