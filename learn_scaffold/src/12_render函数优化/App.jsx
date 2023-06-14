import React, { PrueComponent } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Recommend from "./Recommend";

export class App extends PrueComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0
    };
  }

  // 手动比较props和state的变化
  // shouldComponentUpdate(nextProps, nextState) {
  //   // 当组件数据没发生变化时 不重新渲染组件
  //   // 连带着子组件也不重新渲染了
  //   console.log(nextState.message, this.state.message, "---------");
  //   if (
  //     this.state.message !== nextState.message ||
  //     this.state.counter !== nextState.counter
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  changeText() {
    // this.setState({ message: "Hello World" });
    this.setState({ message: "你好 李银河" });
  }
  increat() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    const { message, counter } = this.state;
    console.log("App render");
    return (
      <div>
        <h2>
          App--{message}--{counter}
        </h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <button
          onClick={(e) => {
            this.increat();
          }}
        >
          +1
        </button>
        <Home message={message} />
        <Recommend counter={counter} />
        <Profile message={message} />
      </div>
    );
  }
}

export default App;
