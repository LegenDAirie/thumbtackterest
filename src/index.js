import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './stateManagement/appReducer'
import { getAssets } from './stateManagement/actionCreators'

const store = createStore(appReducer)

getAssets(store.dispatch)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
