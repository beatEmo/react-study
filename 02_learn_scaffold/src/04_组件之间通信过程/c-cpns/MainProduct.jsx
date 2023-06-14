import React, { Component } from "react";

export class MainProduct extends Component {
  render() {
    const { procductList } = this.props;
    return (
      <div>
        <ul>
          {procductList.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainProduct;
