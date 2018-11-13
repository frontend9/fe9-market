import { combineReducers } from "redux";

const test = (state = {}, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default combineReducers({
  test: test
})