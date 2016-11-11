import React from 'react';
import './App.css';

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
