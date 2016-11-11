import assetsReducer from './assetsReducer'

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
})
