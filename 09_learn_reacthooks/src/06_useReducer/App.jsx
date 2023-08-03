import React, { memo, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increated":
      return { ...state, count: state.count + 1 };
    case "decreated":
      return { ...state, count: state.count - 1 };
    case "add_number":
      return { ...state, count: state.count + action.num };
    case "remove_number":
      return { ...state, count: state.count - action.num };
    default:
      return state;
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>当前计数：{state.count}</h2>
      <button onClick={(e) => dispatch({ type: "increated" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decreated" })}>-1</button>
      <button onClick={(e) => dispatch({ type: "add_number", num: 100 })}>
        +100
      </button>
      <button onClick={(e) => dispatch({ type: "remove_number", num: 50 })}>
        -50
      </button>
    </div>
  );
});

export default App;
