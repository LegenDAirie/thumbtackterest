import lightBoxReducer from './lightBoxReducer'
import deepFreeze from 'deep-freeze'

describe('lightBoxReducer', () => {

  it('returns state when action is invalid', () => {
    const stateBefore = null
    const action = {}
    const stateAfter = null

    expect(
      lightBoxReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('returns default state when state is undefined', () => {
    const stateBefore = undefined
    const action = {}
    const stateAfter = null

    expect(
      lightBoxReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('updates the currentLightBoxImageID with asset ID', () => {
    const stateBefore = null
    const action = {
      type: 'SET_LIGHT_BOX_ASSET',
      assetID: 12345
    }
    const stateAfter = 12345

    deepFreeze(action)

    expect(
      lightBoxReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('sets currentLightBoxImageID to null when asset ID is undefined', () => {
    const stateBefore = null
    const action = {
      type: 'SET_LIGHT_BOX_ASSET',
      assetID: undefined
    }
    const stateAfter = null

    deepFreeze(action)

    expect(
      lightBoxReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
