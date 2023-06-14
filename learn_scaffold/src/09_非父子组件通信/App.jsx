import React, { Component } from "react";
import Home from "./Home";
import ThemeContext from "./theme-context";
import UserContext from "./user-context";

export class App extends Component {
  render() {
    // 这里有一个对象
    // 要将它传给 Home组件
    const info = { name: "dad", age: 14 };

    // 第一步：创建一个context
    // const ThemeContext = React.createContext();

    return (
      <div>
        <h2>App</h2>

        {/* 第二步：通过ThemeContext.Provider中的value属性为后代提供数据 */}
        {/* <ThemeContext.Provider value={info}>
          <Home />
        </ThemeContext.Provider> */}

        {/* 当有多组共享数据时 需要嵌套着来 */}
        <UserContext.Provider value={{ emij: "就发哦链接发" }}>
          <ThemeContext.Provider value={info}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
