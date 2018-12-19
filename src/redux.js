import {createStore} from 'redux'

const ADD_MESSAGE = 'ADD_MESSAGE'

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case(ADD_MESSAGE):
      return [...state, action.payload]
      break
    default:
      return state
  }
}

const store = Redux.createStore(messageReducer)

store.dispatch({
  type: ADD_MESSAGE,
  payload: 'hello'
})