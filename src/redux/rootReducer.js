import { combineReducers } from "redux";
import todoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

const rootReducers = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducers;
