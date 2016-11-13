import React from 'react'
import Asset from './components/Asset'

const Grid = ({ assets }) => {

  return (
    <div className='grid'>
      { assets.map( asset =>
        <Asset key={ asset.id } { ...asset }/>
      )}
    </div>
  )
}

export default Grid
