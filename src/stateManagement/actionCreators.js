import axios from 'axios'

export const setLightBoxAsset = (assetID) => ({
  type: 'SET_LIGHT_BOX_ASSET',
  assetID
})

const receiveAssets = (assets) => ({
  type: 'RECEIVE_ASSETS',
  assets
})

export const getAssets = (dispatch) => {
  axios.get('http://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&per_page=10')
  .then(function (response) {
    dispatch(receiveAssets(response.data.data))
  })
  .catch(function (error) {
    console.log(error)
  })
}
