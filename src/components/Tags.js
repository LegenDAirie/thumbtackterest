import React from 'react'

const Tags = ({ tags }) => (
  <div className='tag-container'>
    <div className='tags'>
      { tags.map( (tag) => {
        return <li key={ tag }>{ tag }</li>
      })}
    </div>
  </div>
)

export default Tags
