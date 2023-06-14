import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProduct from "./MainProduct";

export class Main extends Component {
  render() {
    return (
      <div>
        Main
        <div>
          <MainBanner />
          <MainProduct />
        </div>
      </div>
    );
  }
}

export default Main;
