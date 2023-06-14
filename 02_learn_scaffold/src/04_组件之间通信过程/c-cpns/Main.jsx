import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProduct from "./MainProduct";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: ["新歌曲", "新MV", "新歌单"],
      procductList: ["推荐商品", "热门商品", "流行商品"]
    };
  }
  render() {
    const { banners, procductList } = this.state;
    return (
      <div>
        Main
        <div>
          <MainBanner banners={banners} title="轮播图" />
          <MainProduct procductList={procductList} />
        </div>
      </div>
    );
  }
}

export default Main;
