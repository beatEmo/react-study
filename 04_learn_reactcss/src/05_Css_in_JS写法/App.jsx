import React, { PureComponent } from "react";
import Home from "./home/Home";
import { AppWrapper, SectionWrapper } from "./style";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      color: "yellow",
      size: 30
    };
  }

  render() {
    const { color, size } = this.state;
    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <span className="title">俺是标题</span>
          <p className="content">法律规范骄傲十六分</p>
          <button onClick={(e) => this.setState({ color: "skyblue" })}>
            改颜色
          </button>
        </SectionWrapper>

        <main>
          <Home />
        </main>

        <div className="footer">
          <p>免责声明</p>
          <p>联系方式</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
