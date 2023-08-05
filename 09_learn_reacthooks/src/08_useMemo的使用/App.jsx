import React, { memo, useMemo, useState } from "react";

function calcNumTotal(nums) {
  let total = 0;
  for (let i = 1; i <= nums; i++) {
    total += i;
  }
  return total;
}

const App = memo(() => {
  const [count, setCount] = useState(0);

  const reslut = useMemo(() => {
    return calcNumTotal(50);
  }, count);

  const info = useMemo(() => ({ name: "sdad", age: 18 }), []);

  return (
    <div>
      <h2>整体和为: {reslut}</h2>
      <h2>num: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+</button>

      <子组件 result={reslut} info={info}></子组件>
    </div>
  );
});

export default App;
