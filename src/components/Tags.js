import React from 'react'

const Tags = ({ tags }) => {
  return (
    <div className='tag-container'>
      <div className='tags'>
        { tags.map(function (tag) {
          return <li key={ tag }>{ tag }</li>
        })}
      </div>
    </div>
  )
}

export default Tags
