import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = { titleSize: 30 };
  }
  addTitleSize() {
    this.setState({ titleSize: this.state.titleSize + 2 });
  }

  render() {
    const { titleSize } = this.state;
    return (
      <div>
        <button onClick={(e) => this.addTitleSize()}>增加titleSize</button>
        <h2 style={{ color: "red", fontSize: `${titleSize}px` }}></h2>
        <p style={{ color: "blue", fontSize: "20px" }}>坷拉激发骄傲零九分</p>
      </div>
    );
  }
}

export default App;
