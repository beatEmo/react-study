import React, { PureComponent } from "react";
import appstyle from "./App.module.css";
import Home from "./home/Home";
import Profile from "./profile/Profile";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <span className={appstyle.title}>App</span>
        <span className={appstyle["my-container"]}>佛i撒谎就覅欧舒丹</span>
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
