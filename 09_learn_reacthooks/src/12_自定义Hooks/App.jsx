import React, { memo, useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = memo(() => {
  const [token, setToken] = useLocalStorage("token");

  function setTokenHandle() {
    setToken("dsada");
  }

  return (
    <div>
      <h2>App Component: {token}</h2>
      <button onClick={setTokenHandle}>设置token</button>
    </div>
  );
});

export default App;
