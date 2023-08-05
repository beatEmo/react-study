import React, { memo, useRef } from "react";

const App = memo(() => {
  const titleRef = useRef();

  function showDom() {
    console.log(titleRef.current);
  }

  return (
    <div>
      <h1 ref={titleRef}>123</h1>
      <button onClick={showDom}>获取dom</button>
    </div>
  );
});

export default App;
