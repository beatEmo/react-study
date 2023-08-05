import React, { memo, useCallback, useRef, useState } from "react";

const App = memo(() => {
  const countRef = useRef();
  const [count, setCount] = useState(0);

  countRef.current = count;

  const increment = useCallback(() => {
    setCount(countRef.current + 1);
  }, []);

  return (
    <div>
      <h1 ref={titleRef}>{countRef.current}</h1>
      <button onClick={showDom}>获取dom</button>
    </div>
  );
});

export default App;
