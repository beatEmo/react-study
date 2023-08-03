import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(200);

  useEffect(() => {
    // 组件每次更新都会从新执行
  });
  useEffect(() => {
    // count 变化后才会执行
  }, [count]);
  useEffect(() => {
    // 组件渲染完后 才执行一次 相当于componentDidMount
    return () => {
      // 组件卸载时 才执行一次
    };
  }, []);

  return (
    <div>
      <h2>当前计数： {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
