import assetsReducer from './assetsReducer'
import deepFreeze from 'deep-freeze'

describe('assets Reducer', () => {

  it('returns state when action is invalid', () => {
    const stateBefore = [1, 2, 3]
    const action = {}
    const stateAfter = [1, 2, 3]

    expect(
      assetsReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('returns default state when state is undefined', () => {
    const stateBefore = undefined
    const action = {}
    const stateAfter = []

    expect(
      assetsReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('does not mutate the state', () => {
    const stateBefore = [1, 2, 3]
    const action = {
      type: 'RECEIVE_ASSETS',
      assets: [4, 5, 6]
    }
    const stateAfter = [1, 2, 3, 4, 5, 6]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      assetsReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
