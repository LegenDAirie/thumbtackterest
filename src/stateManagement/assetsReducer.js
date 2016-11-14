const combineAssetIDs = (currentIDs = [], newAssetList = []) => {
  const newAssetIDs = newAssetList.map( asset => asset.id)

  return [
    ...currentIDs,
    ...newAssetIDs
  ]
}

const hashNewAssets = (currentAssets = {}, newAssetList = []) => {
  const newAssets = newAssetList.reduce( (accumulation, asset) => {
    return Object.assign({}, accumulation, { [asset.id]: asset })
  }, {})
  return Object.assign({}, currentAssets, newAssets)
}

const initialState = {
  assetIDs: [],
  assets: {}
}

const assetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_ASSETS':
      return Object.assign({}, state, {
        assetIDs: combineAssetIDs(state.assetIDs, action.assets),
        assets: hashNewAssets(state.assets, action.assets)
      })

    default:
      return state
  }
}

export default assetsReducer
