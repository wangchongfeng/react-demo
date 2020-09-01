import { createStore, combineReducers, applyMiddleware } from '../components/redux';
// import { createStore, combineReducers } from 'redux';

export const countReducer = (state = 0, {type, payload}) => {
  console.log('count')

  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }

}

export const numReducer = (state = 0, {type, payload}) => {
  switch (type) {
    case 'ADD1':
      return state + payload
    case 'MINUS1':
      return state - payload
    default:
      return state
  }

}

export default createStore(
  combineReducers({count: countReducer, num: numReducer}),
  applyMiddleware(thunk,logger)
)

function logger({dispatch, getState}) {
  return next => action => {
    console.log("+++++++++++++++++++++++++++++++"); //sy-log

    // prev state

    const prevState = getState();
    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);
    // next state
    const nextState = getState();
    console.log("next state", nextState); //sy-log

    console.log("+++++++++++++++++++++++++++++++"); //sy-log

    return returnValue;
  };
}

// 这是处理异步的thunk中间件
function thunk({dispatch, getState}) {
  return next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
