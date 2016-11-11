import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function render (assets) {
  ReactDOM.render(
    <App assets={ assets }/>,
    document.getElementById('root')
  );
}
