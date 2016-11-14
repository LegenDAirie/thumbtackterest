const lightBoxReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LIGHT_BOX_ASSET':
      return action.assetID || false

    default:
      return state
  }
}

export default lightBoxReducer
