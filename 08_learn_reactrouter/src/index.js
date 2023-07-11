import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback={<div>loading</div>}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
  // </React.StrictMode>
);
