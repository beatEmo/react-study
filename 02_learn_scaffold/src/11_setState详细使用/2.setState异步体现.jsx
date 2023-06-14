import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "哈哈哈",
      counter: 0
    };
  }
  changeText() {}

  increment() {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
  }

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
