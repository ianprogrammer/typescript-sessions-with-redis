import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux'

const initialUserState = {
  currentUser: null,
  isLoading: true
}


const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        currentUser: action.payload.currentUser
      }
    case actionTypes.LOG_OUT:
      return {
        currentUser : null
      }
    default:
      return state;
  }
}
















const rootReducer = combineReducers({
  user: user_reducer
})

export default rootReducer;