import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  inputChange(e) {
    console.log("inputChange", e.target.value);
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => this.inputChange(e)}
        />
        <input type="text" />
        <h2>{username}</h2>
      </div>
    );
  }
}

export default App;
