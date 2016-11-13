import React from 'react'

const Asset = ({ caption, user, tags, hearts, shortcut, album_id }) => {
  return (
    <div className='grid-item' >
      <img
        src={ `https://media.getchute.com/m/${shortcut}/c/${album_id}/w/200` }
        alt={ caption }
      />
      from { user.username }
      <ul>
        { tags.map(function (tag) {
          return <li key={ tag }>{ tag }</li>
        })}
      </ul>
      { caption }
      ❤️ { hearts }
      { user.name }
    </div>
  )
}

export default Asset
