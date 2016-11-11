import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import axios from 'axios'

axios.get('http://api.getchute.com/v2/albums/aus6kwrg/assets')
  .then(function (response) {
    parseData(response)
  })
  .catch(function (error) {
    console.log(error)
  })

function parseData(data) {
  const assets = data.data.data
  console.log(assets)
  render(assets)
}

function render (assets) {
  ReactDOM.render(
    <App assets={ assets }/>,
    document.getElementById('root')
  );
}
