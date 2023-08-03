import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(200);

  useEffect(() => {
    // 修改document的标题
  });
  useEffect(() => {
    // 监听redux中的数据变化
    return () => {
      // 取消redux中的数据监听
    };
  });

  return (
    <div>
      <h2>当前计数： {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
