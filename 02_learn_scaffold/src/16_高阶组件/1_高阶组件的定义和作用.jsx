import React, { PureComponent } from "react";

// 定义一个高阶组件
function hoc(Cpn) {
  return class NewCpn extends PureComponent {
    render() {
      return <Cpn name="hhh" />;
    }
  };
}
export class HelloWord extends PureComponent {
  render() {
    return <h1>Hello World</h1>;
  }
}

const HelloWorldHOC = hoc(HelloWord);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC />
      </div>
    );
  }
}

export default App;
