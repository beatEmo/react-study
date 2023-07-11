import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { withRouter } from "../hoc";

export class Home extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router;
    navigate(path);
  }

  cs() {
    const { navigate } = this.props.router;
    alert(1);
    navigate({ replace: false });
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/home/1">1</Link>
        <Link to="/home/2">2</Link>
        <button onClick={(e) => this.navigateTo("/home/songmenu")}>歌单</button>

        <button onClick={(e) => this.cs()}>测试</button>

        {/* 占位组件 */}
        <Outlet />
      </div>
    );
  }
}

export default withRouter(Home);
