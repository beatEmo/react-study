import React, { memo } from "react";
import { useState } from "react";

const CounterHook = memo(() => {
  const [counter, setCounter] = useState(10);

  return (
    <div>
      <h2>当前计数： {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
});

export default CounterHook;
