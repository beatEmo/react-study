import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import App from "./02_计数器案例对比/App";
// import App from "./03_useState的使用/App";
// import App from "./04_useEffect使用/App";
// import App from "./05_useContext的使用/App";
// import App from "./06_useReducer/App";
import App from "./08_useMemo的使用/App";

import { UserContext, ThemeContext } from "./05_useContext的使用/context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{ name: "www", age: 18 }}>
    <ThemeContext.Provider value={{ color: "red", size: 30 }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);
