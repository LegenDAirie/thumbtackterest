const assetsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ASSETS':

      return [
        ...state,
        ...action.assets
      ]
    default:
      return state
  }
}

export default assetsReducer
