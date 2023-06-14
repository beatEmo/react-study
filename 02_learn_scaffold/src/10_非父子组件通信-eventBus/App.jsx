import React, { Component } from "react";
import Home from "./Home";
import eventBus from "./utils/event-bus";

export class App extends Component {
  componentDidMount() {
    // eventBus.on("bannerPrev", (name, age) => {
    //   console.log("11111111111", name, age);
    // });
    eventBus.on("bannerPrev", this.bannerPrevClick, this);
  }

  bannerPrevClick(name, age) {
    console.log("11111111111", name, age);
  }
  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bannerPrevClick);
  }

  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Home />
      </div>
    );
  }
}

export default App;
