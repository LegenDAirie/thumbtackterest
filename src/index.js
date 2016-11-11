import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './configureStore'
import axios from 'axios'
import { createStore } from 'redux'

function parseData(data) {
  const assets = data.data.data
  console.log(assets)
  render(assets)
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_ASSETS':

      return state
    default:
      return state
  }
}

const initialState = []

const store = createStore(reducer, initialState)

axios.get('http://api.getchute.com/v2/albums/aus6kwrg/assets')
.then(function (response) {
  parseData(response)
})
.catch(function (error) {
  console.log(error)
})

function render (assets) {
  ReactDOM.render(
    <App assets={ store.getState() }/>,
    document.getElementById('root')
  );
}

store.subscribe(render)
render()
