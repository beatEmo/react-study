import { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShown: true
    };
  }
  ummont() {
    this.setState({
      isShown: false
    });
  }
  render() {
    const { isShown } = this.state;
    return (
      <div>
        {isShown && <HelloWorld />}
        <button onClick={(e) => this.ummont()}>卸载</button>
      </div>
    );
  }
}

export default App;
