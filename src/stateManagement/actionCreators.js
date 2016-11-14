import axios from 'axios'

export const setLightBoxAsset = (assetID) => ({
  type: 'SET_LIGHT_BOX_ASSET',
  assetID
})

const receiveAssets = (assets) => ({
  type: 'RECEIVE_ASSETS',
  assets
})

export const getAssets = (dispatch, url) => {
  url = url || 'http://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&per_page=10'
  axios.get(url)
  .then(function (response) {
    console.log(response)
    dispatch(receiveAssets(response.data.data))
  })
  .catch(function (error) {
    console.log(error)
  })
}
