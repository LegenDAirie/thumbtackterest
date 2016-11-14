import React from 'react'
import Asset from './components/Asset'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { getAssets } from './stateManagement/actionCreators'

const Grid = ({ assetIDs, assets, dispatch }) => (
  <InfiniteScroll
    className='grid'
    pageStart={ 0 }
    hasMore={ true }
    loadMore={ () => {
      const lastAssetID = assetIDs[assetIDs.length - 1]
      getAssets(dispatch, lastAssetID)
    }}
  >
    { assetIDs.map( assetID =>
      <Asset key={ assetID } { ...assets[assetID] }/>
    )}
  </InfiniteScroll>
)


const mapStateToProps = (state) => ({
  assetIDs: state.assets.assetIDs,
  assets: state.assets.assets
})

export default connect(mapStateToProps)(Grid)
