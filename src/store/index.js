import {createStore} from 'redux';
export const countReducer = (state = 0, {type, payload}) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }

}

export default createStore(countReducer)