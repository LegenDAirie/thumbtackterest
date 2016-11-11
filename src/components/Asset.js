import React from 'react'

const Asset = ({ thumbnail, caption }) => {

  return (
    <div>
      <img
        src={ thumbnail }
        alt={ caption }
        width='100'
        height='100'
      />
    </div>
  )
}

export default Asset
