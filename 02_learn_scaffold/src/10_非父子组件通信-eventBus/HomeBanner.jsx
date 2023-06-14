import React, { Component } from "react";

import eventBus from "./utils/event-bus.js";

export class HomeBanner extends Component {
  prevClick() {
    eventBus.emit("bannerPrev", "wwww", 18);
  }
  nextClick() {
    eventBus.emit("bannerNext", "tttt", 19);
  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={(e) => this.prevClick()}>上一个</button>
        <button onClick={(e) => this.nextClick()}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
