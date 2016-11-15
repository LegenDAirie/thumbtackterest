const lightBoxReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_LIGHT_BOX_ASSET':
      return action.assetID || null

    default:
      return state
  }
}

export default lightBoxReducer
