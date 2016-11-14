import React from 'react'
import Tags from './Tags'
import Caption from './Caption'
import Image from './Image'

const Asset = ({ caption, user, tags, hearts, shortcut, album_id }) => {
  return (
    <div className='grid-item' >

      <Image shortcut={ shortcut } album={ album_id } alt={ caption }
        maxWidth={ 200 }
        cssClass={ 'asset-image' }
       />
      <Tags tags={ tags } />
      <Caption caption={ caption }/>

      <div className='hearts'>
        ❤️ { hearts }
      </div>

    </div>
  )
}

export default Asset
