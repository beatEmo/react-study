import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/home/1">1</Link>
        <Link to="/home/2">2</Link>

        <Outlet />
      </div>
    );
  }
}

export default Home;
