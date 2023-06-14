import React, { PureComponent } from "react";
import logRenderTime from "../hoc/login_render_time";

export class Detail extends PureComponent {
  // UNSAFE_componentWillMount() {
  //   this.beginTime = new Date().getTime();
  // }

  // componentDidMount() {
  //   this.endTime = new Date().getTime();
  //   const interval = this.endTime - this.beginTime;
  //   console.log(`当前页面花费了${interval}ms时间`);
  // }

  render() {
    return (
      <div>
        <h2>Detail Page</h2>
        <ul>
          <li>i</li>
          <li>i</li>
          <li>i</li>
          <li>i</li>
          <li>i</li>
        </ul>
      </div>
    );
  }
}

export default logRenderTime(Detail);
