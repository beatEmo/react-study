import React, { PureComponent } from "react";
import Cart from "./page/Cart";

export class App extends PureComponent {
  loginClick() {
    localStorage.setItem("login", "ssss");

    // 强制更新 不建议使用
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.loginClick()}>登陆</button>
        <Cart />
      </div>
    );
  }
}

export default App;
