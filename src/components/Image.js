import React from 'react'
import { connect } from 'react-redux'
import { setLightBoxAsset } from '../stateManagement/actionCreators'

const Image = ({ shortcut, album, caption, maxWidth, cssClass, id, dispatch }) => (
  <img className={ cssClass }
    src={ `https://media.getchute.com/m/${shortcut}/c/${album}/w/${maxWidth}` }
    alt={ caption }
    onClick={ () => { dispatch(setLightBoxAsset(id)) }}
  />
)

export default connect()(Image)
