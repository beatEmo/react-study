import React from "react";
import { Provider } from "react-redux";
import store from "./13_reduxHook/store";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import App from "./02_计数器案例对比/App";
// import App from "./03_useState的使用/App";
// import App from "./04_useEffect使用/App";
// import App from "./05_useContext的使用/App";
// import App from "./06_useReducer/App";
// import App from "./08_useMemo的使用/App";
// import App from "./09_useRef使用/App";
// import App from "./11_useLayoutEffect使用/App";
// import App from "./12_自定义Hooks/App";
import App from "./13_reduxHook/App";

// import { UserContext, ThemeContext } from "./05_useContext的使用/context/index";
import { UserContext, TokenContext } from "./12_自定义Hooks/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{ name: "www", age: 18 }}>
    <TokenContext.Provider value={"dasdkjihhjfwektgfhbnui"}>
      <Provider store={store}>
        <App />
      </Provider>
    </TokenContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);
