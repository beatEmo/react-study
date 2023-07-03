import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./features/counter";
import homeReducer from "./features/home";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// 合并俩个reducer
// const reducer = combineReducers({
//   counter: counterReducer,
//   home: homeReducer
// });

// combineReducers 原理
function reducer(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action),
    home: homeReducer(state.home, action)
  };
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
