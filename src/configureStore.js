import redux from 'redux'
import axios from 'axios'

function configureStore () {
  axios.get('http://api.getchute.com/v2/albums/aus6kwrg/assets')
  .then(function (response) {
    parseData(response)
  })
  .catch(function (error) {
    console.log(error)
  })

  const reducer = (state, action) => {
    switch (action.type) {
      case 'RECEIVE_ASSETS':

        return state
      default:
        return state
    }
  }

  function parseData(data) {
    const assets = data.data.data
    console.log(assets)
    render(assets)
  }

}

export default configureStore
