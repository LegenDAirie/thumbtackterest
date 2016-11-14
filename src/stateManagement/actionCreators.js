import axios from 'axios'

export const setLightBoxAsset = (assetID) => ({
  type: 'SET_LIGHT_BOX_ASSET',
  assetID
})

const receiveAssets = (assets) => ({
  type: 'RECEIVE_ASSETS',
  assets
})

export const getAssets = (dispatch, lastAssetID) => {
  const nextPage = lastAssetID ? `&max_id=${lastAssetID}` : ''
  const url = `http://api.getchute.com/v2/albums/aus6kwrg/assets?per_page=10&type=image` + nextPage
  
  axios.get(url)
  .then(function (response) {
    console.log(response)
    dispatch(receiveAssets(response.data.data))
  })
  .catch(function (error) {
    console.log(error)
  })
}
