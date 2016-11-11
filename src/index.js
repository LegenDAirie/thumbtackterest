import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './configureStore'

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_ASSETS':

      return state
    default:
      return state
  }
}

const store = configureStore()

function render (assets) {
  ReactDOM.render(
    <App assets={ assets }/>,
    document.getElementById('root')
  );
}
