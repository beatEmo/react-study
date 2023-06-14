import React, { Component } from "react";
import ThemeContext from "./theme-context";
import HomeBanner from "./HomeBanner";
import UserContext from "./user-context";

export class HomeInfo extends Component {
  render() {
    // 第四步：获取数据并使用
    console.log(this.context);

    return (
      <div>
        {/* 这里使用的俩组数据中其中一组 ThemeContext*/}
        HomeInfo{this.context.name}
        <HomeBanner />
        {/* 如何使用别的传过来的数据？？ */}
        <UserContext.Consumer>
          {(value) => {
            return <div>info user L {value.emij}</div>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
// 第三步：设置组件contextType类型
HomeInfo.contextType = ThemeContext;

export default HomeInfo;
