import React, { memo } from "react";
import { useState } from "react";

const App = memo(() => {
  const [message, setMessage] = useState("Hello, world!");

  function changeMessage() {
    setMessage("你好啊！李银河");
  }

  return (
    <div>
      <h2>App：{message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  );
});

export default App;
