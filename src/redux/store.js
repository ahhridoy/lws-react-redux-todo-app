import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import rootReducers from "./rootReducer";

const store = createStore(rootReducers, composeWithDevTools());

export default store;
