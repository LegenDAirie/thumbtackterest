import React from 'react'

const Image = ({ shortcut, album, caption }) => {
  return (
    <img className='asset-image'
      src={ `https://media.getchute.com/m/${shortcut}/c/${album}/w/200` }
      alt={ caption }
    />
  )
}

export default Image
