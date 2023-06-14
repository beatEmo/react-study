import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddCounter extends Component {
  addConter(count) {
    this.props.addClick(count);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addConter(1)}>+1</button>
        <button onClick={() => this.addConter(5)}>+5</button>
        <button onClick={() => this.addConter(10)}>+10</button>
      </div>
    );
  }
}
AddCounter.propTypes = {
  addClick: PropTypes.func
};

export default AddCounter;
