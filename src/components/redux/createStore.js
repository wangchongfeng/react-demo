export default function createStore(reducer, enhancer) {
  if (enhancer) {
    // 增强createStore的dispatch
    return enhancer(createStore)(reducer);
  }
  let currentState
  let listeners = []
  function dispatch(action) {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }
  function getState() {
    return currentState
  }
  function subscribe(listener) {
    listeners.push(listener)
    return () => {
      let index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  dispatch({type: 'jfowjfeljfjejifejf'})
  return {
    dispatch,
    getState,
    subscribe
  }
}