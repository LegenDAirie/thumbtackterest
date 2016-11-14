import lightBoxReducer from './lightBoxReducer'
import assetsReducer from './assetsReducer'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  assets: assetsReducer,
  currentLightBoxImage: lightBoxReducer
})

export default appReducer
