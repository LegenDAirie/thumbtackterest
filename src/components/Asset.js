import React from 'react'
import Tags from './Tags'
import Caption from './Caption'

const Asset = ({ caption, user, tags, hearts, shortcut, album_id }) => {
  return (
    <div className='grid-item' >
      <img
        src={ `https://media.getchute.com/m/${shortcut}/c/${album_id}/w/200` }
        alt={ caption }
      />
      from { user.username }

      <Tags tags={ tags } />

      <Caption caption={ caption }/>

      <div className='hearts'>
        ❤️ { hearts }
      </div>
    </div>
  )
}

export default Asset
