import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './stateManagement/appReducer'

const store = createStore(appReducer)

function parseData(data) {
  const assets = data.data.data

  store.dispatch({ type: 'RECEIVE_ASSETS', assets })
}

axios.get('http://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&per_page=10')
.then(function (response) {
  parseData(response)
})
.catch(function (error) {
  console.log('cats', error)
})

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
