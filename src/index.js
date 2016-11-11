import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './configureStore'
import axios from 'axios'
import { createStore } from 'redux'
import assetsReducer from './stateManagement/assetsReducer'

function parseData(data) {
  const assets = data.data.data
  console.log(assets)
  render(assets)
}

const initialState = []

const store = createStore(assetsReducer, initialState)

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
