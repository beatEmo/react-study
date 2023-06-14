import { Component } from "react";

// 定义一个类组件
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    };
  }

  render() {
    // const { message } = this.state;
    /**\
     * render函数的返回值
     */
    // 1. 返回React元素
    // 这里由JSX创造的 会被编译成React.createElement 所有返回的就是React元素
    // return <h2>{message}</h2>;
    // 2. 数组或ftragments
    // return [null, undefined, true, [12, 23]];
    // return [<span>1</span>, <span>2</span>, 123, <div>急啊急啊就</div>];
    // 4. 字符串或数值类型
    // return 1;
    // return "hello world";]
    // 5. boolean | null | undefined
    return true;
  }
}

export default App;
