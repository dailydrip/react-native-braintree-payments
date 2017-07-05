import { combineReducers } from "redux";
import navReducer from "./navReducer";

const initialGenericState = { value: 0 };

function genericReducer(state = initialGenericState, action) {
  switch (action.type) {
    case "Increment":
      let newValue = state.value + 1;
      return { ...state, value: newValue };
    case "Decrement":
      newValue = state.value - 1;
      return { ...state, value: newValue };
    default:
      return state;
  }
}

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    generic: genericReducer
  });
}
