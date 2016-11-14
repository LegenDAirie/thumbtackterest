import React from 'react'
import Asset from './components/Asset'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { getAssets } from './stateManagement/actionCreators'

const Grid = ({ assetIDs, assets, dispatch }) => {

  return (
    <InfiniteScroll
      pageStart={ 0 }
      hasMore={ true }
      loadMore={ () => {
        var lastAssetID = assetIDs[assetIDs.length - 1]
        var url = `http://api.getchute.com/v2/albums/aus6kwrg/assets?max_id=${lastAssetID}&per_page=10&type=image`
        getAssets(dispatch, url)
      } }
    >
      <div className='grid'>
        { assetIDs.map( assetID =>
          <Asset key={ assetID } { ...assets[assetID] }/>
        )}
      </div>
    </InfiniteScroll>
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
