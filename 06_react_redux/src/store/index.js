import { createStore, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
import counterReducer from "./features/counter";
import homeReducer from "./features/home";

import { log, thunk, applyMiddleware } from "./features/middleware";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// 合并俩个reducer
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer
});

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(reducer);

applyMiddleware(store, log, thunk);

export default store;
