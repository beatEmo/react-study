import React, { PureComponent } from "react";
import connect from "../hoc/connect";
import { addNumber } from "../store/features/counter";

export class About extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num);
  }
  render() {
    return (
      <div>
        About Counter: {this.props.counter}
        <button onClick={(e) => this.addNumber(1)}>+1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
