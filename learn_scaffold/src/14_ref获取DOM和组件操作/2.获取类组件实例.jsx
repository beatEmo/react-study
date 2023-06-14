import React, { PureComponent, createRef } from "react";

export class HelloWorld extends PureComponent {
  test() {
    console.log(1);
  }
  render() {
    return <h2>Hello World</h2>;
  }
}

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    this.hlRef = createRef();
  }

  getComponentDOM() {
    console.log(this.hlRef.current);
    this.hlRef.current.test();
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hlRef} />
        <button onClick={(e) => this.getComponentDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
