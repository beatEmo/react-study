import React, { PureComponent, createRef, forwardRef, memo } from "react";

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>Hello World</h2>
      <button>按钮</button>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    this.hlRef = createRef();
  }

  getComponentDOM() {
    console.log(this.hlRef.current);
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
