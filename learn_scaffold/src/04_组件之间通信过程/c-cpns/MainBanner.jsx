import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainBanner extends Component {
  // props 默认值
  static defaultProps = {
    name: "stranger"
  };
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { banners, title } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        {banners.map((item) => {
          return <h2 key={item}>{item}</h2>;
        })}
      </div>
    );
  }
}
// 默认值
MainBanner.defaultProps = {
  title: "Stranger"
};

MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default MainBanner;
