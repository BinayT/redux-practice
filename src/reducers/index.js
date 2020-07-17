import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  counter: counterReducer,
  loggedReducer,
});

export default rootReducers;
