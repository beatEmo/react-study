import { Component } from "react";

class HelloWorld extends Component {
  // 1. 执行constructor
  constructor() {
    super();

    this.state = {
      message: "Hello World"
    };

    console.log(`${this.state.message} constructor`);
  }

  changeState() {
    this.setState({
      message: "你好啊 李银河！！！"
    });
  }

  // 2. 执行render函数
  render() {
    const { message } = this.state;

    console.log(`${message} render`);
    return (
      <div>
        {message}
        <button onClick={(e) => this.changeState()}>切换</button>
      </div>
    );
  }
  // 3. 组件渲染到DOM 被挂载到DOM
  componentDidMount() {
    console.log(`${this.state.message} componentDidMount`);
  }
  // 4. 组件的DOM被更新完成 DOM发生更新
  componentDidUpdate() {
    console.log(`${this.state.message} componentDidUpdate`);
  }
  // 5. 组件从DOM中卸载掉，从DOM移除
  componentWillUnmount() {
    console.log(`${this.state.message} componentWillUnmount`);
  }
}

export default HelloWorld;
