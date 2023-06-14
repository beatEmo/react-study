import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Model from "./Model";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        {createPortal(<h2>嘿嘿</h2>, document.querySelector("#www"))}
        <hr />
        <Model>
          <h3>我是标题</h3>
          <p>我是内容 嘿嘿</p>
        </Model>
      </div>
    );
  }
}

export default App;
