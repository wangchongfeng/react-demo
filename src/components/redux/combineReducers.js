export default function combineReducers(reducers) {
  return function(state = {}, action) {
    let nextState = {}
    let hasChanged = false
    for (let key in reducers) {
      nextState[key] = reducers[key](state[key], action)
      hasChanged = hasChanged || nextState[key] !== state[key]
    }
    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }
}