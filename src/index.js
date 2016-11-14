import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import axios from 'axios'
import { createStore } from 'redux'
import appReducer from './stateManagement/appReducer'

const store = createStore(appReducer)

function parseData(data) {
  const assets = data.data.data
  console.log(data)
  console.log(assets)

  store.dispatch({ type: 'RECEIVE_ASSETS', assets })
}

axios.get('http://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&per_page=10')
.then(function (response) {
  parseData(response)
})
.catch(function (error) {
  console.log(error)
})

function render () {
  ReactDOM.render(
    <App assets={ store.getState() } />,
    document.getElementById('root')
  );
}

store.subscribe(render)
render()





// state = { // state object
//   assets = { // object container all assets
//     assetsIDs: [ // list of assetIDs
//
//     ],
//     assets: { // hashing assets by thier IDs
//       id: asset
//     }
//   },
//   currentLightBoxImage: assetID  // Light box image id
// }
