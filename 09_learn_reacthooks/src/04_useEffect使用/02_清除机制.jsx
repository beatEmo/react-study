import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(200);

  useEffect(() => {
    // 当前传入的回调函数 会在组件渲染完后 执行
    // 网络请求/DOM操作/事件监听
    document.title = count;

    console.log("监听redux中的数据");
    // 返回值 => 回调函数  在组件重新渲染或者组件卸载时候执行
    return () => {
      console.log("取消监听redux中的数据");
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
