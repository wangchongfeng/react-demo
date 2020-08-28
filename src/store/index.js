import {createStore} from 'redux';
export const countReducer = (state = 0, {type, payload}) => {
  switch (type) {
    case 'ADD':
      return state + payload
      break;
    case 'MINUS':
      return state - payload
      break;
  
    default:
      return state
      break;
  }

}

export default createStore(countReducer)