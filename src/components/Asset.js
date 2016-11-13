import React from 'react'

const Asset = ({ caption, user, tags, hearts, shortcut, album_id }) => {
  return (
    <div className='grid-item' >
      <img
        src={ `https://media.getchute.com/m/${shortcut}/c/${album_id}/w/200` }
        alt={ caption }
      />
      from { user.username }
      <div className='tag-container'>
        <div className='tags'>
          { tags.map(function (tag) {
            return <li key={ tag }>{ tag }</li>
          })}
        </div>
      </div>

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
