import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  bookReducer,
  authors
});

export default rootReducer;
