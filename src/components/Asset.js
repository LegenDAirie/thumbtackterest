import React from 'react'

const Asset = ({ thumbnail, caption, user, tags, hearts }) => {
  console.log(thumbnail)
  return (
    <div className='grid-item' >
      <img
        src={ thumbnail }
        alt={ caption }
        width='100'
        height='100'
      />
      <img
        src={ user.avatar }
        alt="users avatar image"
      />
      from { user.username }
      <ul>
        { tags.map(function (tag) {
          return <li key={ tag }>{ tag }</li>
        })}
      </ul>
      { caption }
      ❤️ { hearts }
      <img
        src={ user.avatar }
        alt="users avatar image"
      />
      { user.name }
    </div>
  )
}

export default Asset
