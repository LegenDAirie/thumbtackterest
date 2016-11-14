import React from 'react'
import Asset from './components/Asset'

const Grid = ({ assetIDs, assets }) => {

  return (
    <div className='grid'>
      { assetIDs.map( assetID =>
        <Asset key={ assetID } { ...assets[assetID] }/>
      )}
    </div>
  )
}

export default Grid
