import assetsReducer from './assetsReducer'
import deepFreeze from 'deep-freeze'

const initialState = {
  assetIDs: [],
  assets: {}
}

const exampleState = {
  assetIDs: ['one', 'two', 'three'],
  assets: {
    one: { id: 'one' },
    two: { id: 'two' },
    three: { id: 'three' }
  }
}
deepFreeze(exampleState)

describe('assets Reducer', () => {

  it('returns current state when action is invalid', () => {
    const stateBefore = exampleState
    const action = {}
    const stateAfter = exampleState

    expect(
      assetsReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('returns default state when state is undefined', () => {
    const stateBefore = undefined
    const action = {}
    const stateAfter = initialState

    expect(
      assetsReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('adds new assets', () => {
    const stateBefore = exampleState
    const action = {
      type: 'RECEIVE_ASSETS',
      assets: [{ id: 'four' }, { id: 'five' }]
    }
    const stateAfter = {
      assetIDs: ['one', 'two', 'three', 'four', 'five'],
      assets: {
        one: { id: 'one' },
        two: { id: 'two' },
        three: { id: 'three' },
        four: { id: 'four' },
        five: { id: 'five' }
      }
    }

    deepFreeze(action)

    expect(
      assetsReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('does not mutate previous state', () => {} )
})
