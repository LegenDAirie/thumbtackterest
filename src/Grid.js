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
      // var url = `http://api.getchute.com/v2/albums/aus6kwrg/assets?max_id=${lastAssetID}&per_page=10&type=image`
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
