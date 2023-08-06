import React, { memo } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "./store/modules/counter";
const App = memo((props) => {
  const { count } = props;

  function changeNumHandle(num, isAdd = true) {
    if (isAdd) {
      props.addNumber(num);
    } else {
      props.subNumber(num);
    }
  }

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={(e) => changeNumHandle(1)}>+1</button>
      <button onClick={(e) => changeNumHandle(5)}>+5</button>
      <button onClick={(e) => changeNumHandle(5, false)}>-5</button>
    </div>
  );
});

const mapStateToProps = (state) => ({
  count: state.counter.count
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    dispatch(subNumberAction(num));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
