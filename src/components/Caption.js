import React from 'react'

const Caption = ({ caption }) => {
  return (
    <div className='caption-container'>
      <div className='caption'>
        { caption }
      </div>
    </div>
  )
}

export default Caption
