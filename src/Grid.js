import React from 'react'
import Asset from './components/Asset'
import { connect } from 'react-redux'

const Grid = ({ assetIDs, assets }) => {

  return (
    <div className='grid'>
      { assetIDs.map( assetID =>
        <Asset key={ assetID } { ...assets[assetID] }/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { assetIDs, assets } = state.assets
  return {
    assetIDs,
    assets
  }
}

export default connect(mapStateToProps)(Grid)
