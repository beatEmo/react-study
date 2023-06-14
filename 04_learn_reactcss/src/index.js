import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

// import App from "./01_内联样式的CSS/App";
// import App from "./03_CSS_Module/App";
// import App from "./04_less的编写方式/App";
// import App from "./05_Css_in_JS写法/App";
import App from "./06_classnames库/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
