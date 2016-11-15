import React from 'react'
import Image from './components/Image'
import { connect } from 'react-redux'
import { setLightBoxAsset } from './stateManagement/actionCreators'

const LightBox = ({ currentLightBoxImageID, shortcut, album_id, caption, dimensions, dispatch }) => {

  if (!currentLightBoxImageID) return <span/>

  return (
    <div>
      <div className='light-box-shadow'/>
      <div className='light-box-image-container'
        onClick={ () => { dispatch(setLightBoxAsset(null)) }}
        >
        <div className='light-box'>
          <Image shortcut={ shortcut }
            album={ album_id }
            alt={ caption }
            maxWidth={ dimensions.width }
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { assets, currentLightBoxImageID } = state
  const {
    shortcut,
    album_id,
    caption,
    dimensions
  } = assets.assets[currentLightBoxImageID] || assets.assets

  return {
    currentLightBoxImageID,
    shortcut,
    album_id,
    caption,
    dimensions
  }
}

export default connect(mapStateToProps)(LightBox)
