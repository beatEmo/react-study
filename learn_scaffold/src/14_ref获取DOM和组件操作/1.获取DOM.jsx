import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    this.titleRef = createRef();
    this.titleEl = null;
  }
  getNaticeDOM() {
    // 1. 方式一 在React元素上绑定一个ref字符串
    // console.log(this.refs.www);
    // 2. 方式二 提前创建好ref对象 creatRef 将创建出来的对象绑定到React元素上
    // console.log(this.titleRef.current);
    // 3. 方式三 传入一个回调函数 在对应元素渲染后 回调函数被执行 并且传入元素实例
    console.log(this.titleEl);
  }
  render() {
    return (
      <div>
        <h2 ref="www">Hello World</h2>
        <h2 ref={this.titleRef}>你好啊 李银河</h2>
        <h2
          ref={(el) => {
            this.titleEl = el;
          }}
        >
          你好啊 夫人
        </h2>
        <button onClick={(e) => this.getNaticeDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
