import React from 'react'

const Image = ({ shortcut, album, caption, maxWidth, cssClass }) => {
  return (
    <img className={ cssClass }
      src={ `https://media.getchute.com/m/${shortcut}/c/${album}/w/${maxWidth}` }
      alt={ caption }
    />
  )
}

export default Image
