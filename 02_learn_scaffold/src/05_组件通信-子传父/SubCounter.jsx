import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddCounter extends Component {
  subConter(count) {
    this.props.subClick(-count);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subConter(1)}>-1</button>
        <button onClick={() => this.subConter(5)}>-5</button>
        <button onClick={() => this.subConter(10)}>-10</button>
      </div>
    );
  }
}
AddCounter.propTypes = {
  subClick: PropTypes.func
};

export default AddCounter;
