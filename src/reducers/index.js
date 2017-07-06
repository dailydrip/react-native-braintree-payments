import { combineReducers } from "redux";
import navReducer from "./navReducer";

const initialGenericState = { message: "" };

function genericReducer(state = initialGenericState, action) {
  switch (action.type) {
    case "SUCCESS_RESPONSE":
      let newMessage = "Thanks!";
      return { ...state, message: newMessage };
    case "ERROR_RESPONSE":
      newValue = "There was an error in your transaction";
      return { ...state, message: newMessage };
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
