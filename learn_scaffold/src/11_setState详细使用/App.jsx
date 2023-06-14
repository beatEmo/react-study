import React, { Component } from "react";

import { flushSync } from "react-dom";
export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "哈哈哈",
      counter: 0
    };
  }
  changeText() {
    // React18 之前这样的代码就是一个同步代码
    // setTimeout(() => {
    //   this.setState({ message: "aaa" });
    //   console.log(this.state.message);
    // });
    // document.addEventListener("click", () => {
    //   this.setState({ message: "aaa" });
    //   console.log(this.state.message);
    // });

    // 将setState变成同步的
    flushSync(() => {
      this.setState({ message: "aaa" });
    });
    console.log(this.state.message);
  }

  increment() {}

  render() {
    console.log("render函数执行了");
    const { message, counter } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>改文本</button>
        {counter}
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }
}

export default App;
