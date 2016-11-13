import React from 'react'
import Image from './components/Image'

const LightBox = ({ shortcut, album_id, caption, dimensions }) => {
  return (
    <div>
      <div className='light-box-shadow'></div>
        <div className='light-box-image-container'>
        <div className='light-box'>
          <Image shortcut={ shortcut } album={ album_id } alt={ caption } maxWidth={ dimensions.width }/>
        </div>
      </div>
    </div>
  )
}

export default LightBox
