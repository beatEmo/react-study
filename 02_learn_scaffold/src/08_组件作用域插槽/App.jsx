import React, { Component } from "react";
import TabControl from "./TabControl";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "新款", "精选"],
      tabIndex: 0
    };
  }

  tabClick(index) {
    this.setState({
      tabIndex: index
    });
  }
  getTabItem(item) {
    return <h1>{item}</h1>;
  }

  render() {
    const { titles, tabIndex } = this.state;

    return (
      <div>
        <TabControl
          titles={titles}
          tabClick={(e) => this.tabClick(e)}
          itemType={(item) => this.getTabItem(item)}
        ></TabControl>
        <h1>{titles[tabIndex]}</h1>
      </div>
    );
  }
}

export default App;
