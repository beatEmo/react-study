import React, { memo, useEffect, useState } from "react";

function useLoginLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建了`);

    return () => {
      console.log(`${name}组件被销毁了`);
    };
  }, []);
}

const Home = memo(() => {
  useLoginLife("home");
  return <h2>home Component</h2>;
});

const About = memo(() => {
  useLoginLife("about");
  return <h2>about Component</h2>;
});

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  useLoginLife("app");
  return (
    <div>
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
