import React, { Component } from "react";
import "./style.css";

export class TabControl extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
  }

  changeTab(index) {
    const { titles, itemType, tabClick } = this.props;
    this.setState({
      currentIndex: index
    });
    tabClick(index);
    itemType(titles[index]);
  }

  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="tab-contorl">
        {titles.map((title, index) => {
          return (
            <div
              className={`item ${index === currentIndex ? "active" : ""}`}
              key={title}
              onClick={(e) => this.changeTab(index)}
            >
              <span className="text">{title}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TabControl;
