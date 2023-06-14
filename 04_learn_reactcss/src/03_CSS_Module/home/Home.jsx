import React, { PureComponent } from "react";

import homeStyle from "./Home.module.css";

export class Home extends PureComponent {
  render() {
    return <div className={homeStyle.title}>我是Home 呵呵</div>;
  }
}

export default Home;
