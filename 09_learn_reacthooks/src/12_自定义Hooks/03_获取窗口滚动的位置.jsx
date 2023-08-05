import React, { memo, useEffect, useState } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import "./style.css";
const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  return (
    <h2>
      home Component {scrollX}-{scrollY}
    </h2>
  );
});

const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  return (
    <h2>
      about Component {scrollX}-{scrollY}
    </h2>
  );
});

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="app">
      <h2>App Component</h2>
      <button
        onClick={(e) => {
          setIsShow(!isShow);
        }}
      >
        change
      </button>
      {isShow && (
        <div>
          <Home />
          <About />
        </div>
      )}
    </div>
  );
});

export default App;
