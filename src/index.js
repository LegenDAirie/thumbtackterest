import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './configureStore'

const store = configureStore()

function render (assets) {
  ReactDOM.render(
    <App assets={ store.getState() }/>,
    document.getElementById('root')
  );
}

store.subscribe(render)
render()
