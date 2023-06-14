import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = { isShow: true };
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button
          onClick={(e) => {
            this.setState({ isShow: !isShow });
          }}
        >
          切 换
        </button>
        {/* {isShow && <h2>哈哈哈</h2>} */}

        <CSSTransition
          appear
          in={isShow}
          unmountOnExit
          classNames="www"
          timeout={2000}
          onEnter={console.log("开始进入动画")}
          onEntering={console.log("正在执行动画")}
          onEntered={console.log("执行进入结束")}
          onExit={console.log("开始离开动画")}
          onExiting={console.log("正在离开动画")}
          onExited={console.log("执行离开动画结束")}
        >
          <h2>哈哈哈</h2>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
