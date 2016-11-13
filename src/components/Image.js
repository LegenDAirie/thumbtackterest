import React from 'react'

const Image = ({ shortcut, album, caption }) => {
  return (
    <img
      src={ `https://media.getchute.com/m/${shortcut}/c/${album}/w/200` }
      alt={ caption }
    />
  )
}

export default Image
