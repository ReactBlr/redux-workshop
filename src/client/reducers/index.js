import { combineReducers } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.firstName };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.lastName };
    default:
      return state;
  }
}

// function rootReducer(state = {}, action) {
//   return {
//     counter: counterReducer(state.counter, action),
//     user: userReducer(state.user, action)
//   };
// }

export default combineReducers({
  counter,
  user
});

// {
//   type: "INCREMENT"
// }
