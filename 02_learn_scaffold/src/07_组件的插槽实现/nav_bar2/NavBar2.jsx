import React, { Component } from "react";

export class NavBar2 extends Component {
  render() {
    const { leftSlot, conterSlot, rightSlot } = this.props;
    return (
      <div>
        <div className="left">{leftSlot}</div>
        <div className="conter">{conterSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    );
  }
}

export default NavBar2;
