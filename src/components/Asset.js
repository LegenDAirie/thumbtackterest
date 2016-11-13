import React from 'react'
import Tags from './Tags'

const Asset = ({ caption, user, tags, hearts, shortcut, album_id }) => {
  return (
    <div className='grid-item' >
      <img
        src={ `https://media.getchute.com/m/${shortcut}/c/${album_id}/w/200` }
        alt={ caption }
      />
      from { user.username }
      
      <Tags tags={ tags } />

      <div className='caption-container'>
        <div className='caption'>
          { caption }
        </div>
      </div>

      <div className='hearts'>
        ❤️ { hearts }
      </div>
    </div>
  )
}

export default Asset
