import { combineReducers } from "redux";

const test = (state = "hello, fe9", action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default combineReducers({
  test: test
})