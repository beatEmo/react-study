import React, { Component } from "react";
import NavBar from "./nav-bar";
import NavBar2 from "./nav_bar2/NavBar2";
export class App extends Component {
  render() {
    return (
      <div>
        {/* 1. 使用children方式实现插槽 */}
        <NavBar>
          <button>按钮</button>
          <h1>我是标题</h1>
          <button>。。。</button>
        </NavBar>
        {/* 2. 使用props方式实现插槽 */}
        <NavBar2
          leftSlot={<button>按钮2</button>}
          conterSlot={<h1>呵呵</h1>}
          rightSlot={<i>大家都</i>}
        />
      </div>
    );
  }
}

export default App;
