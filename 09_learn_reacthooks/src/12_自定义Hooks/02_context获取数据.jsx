import React, { memo, useEffect, useState } from "react";
import useUserToken from "./hooks/useUserToken";

const Home = memo(() => {
  const [user, token] = useUserToken();
  return (
    <h2>
      home Component {user.name}-{token}
    </h2>
  );
});

const About = memo(() => {
  const [user, token] = useUserToken();
  return (
    <h2>
      about Component {user.name}-{token}
    </h2>
  );
});

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
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
