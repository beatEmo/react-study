import React, { PureComponent } from "react";
import classNames from "classnames";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isbbb: true,
      isccc: false
    };
  }

  render() {
    const { isbbb, isccc } = this.state;

    const classList = ["aaa"];
    if (isbbb) classList.push("bbb");
    if (isccc) classList.push("ccc");
    const classname = classList.join(" ");

    return (
      <div>
        {/* 老 三元运算符写法 */}
        <h2 className={`aaa ${isbbb ? "bbb" : ""} ${isccc ? "ccc" : ""}`}>
          老了老了 别用了
        </h2>
        <h2 className={classname}>mad 我操了</h2>
        {/* classNames 方案*/}
        <h2 className={classNames("aaa", { bbb: isbbb, ccc: isccc })}>
          来 是兄弟就用我
        </h2>
        <h2 className={classNames(["aaa", { bbb: isbbb, ccc: isccc }])}>
          嘻嘻嘻
        </h2>
      </div>
    );
  }
}

export default App;
