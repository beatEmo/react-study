import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "哈哈哈",
      counter: 0
    };
  }
  changeText() {
    // 1. setState的更多用法
    // 1.1 基本使用
    // this.setState({ message: "aaa" });
    // ------------------------------------
    // 2. setState可以传入一个回调函数
    // 2.1 可以再回调函数中编写新的state的逻辑
    // 2.2 当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //   // 1.编写一些对新的state处理逻辑
    //   // 2.可以获取之前的state和props值
    //   console.log(this.state, this.state.message);
    //   return {
    //     message: "你好啊！李银河"
    //   };
    // });
    // --------------------------------------
    // 3. setState在React的事件处理中是一个异步调用
    // 若希望在数据更新之后，获取到对应的新结果
    // 可以传入setState的第二个参数：callback
    this.setState({ message: "aaa" }, () => {
      console.log("+++++++++", this.state.message);
    });
    console.log(this.state.message, "---------");
  }

  increment() {}

  render() {
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
