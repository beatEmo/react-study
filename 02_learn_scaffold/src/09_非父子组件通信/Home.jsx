import React, { Component } from "react";
import HomeInfo from "./HomeInfo";

export class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* 要将上面接收到的 info对象直接传给子组件 */}
        {/* <子组件 {...this.props}></子组件> */}

        <HomeInfo />
      </div>
    );
  }
}

export default Home;
