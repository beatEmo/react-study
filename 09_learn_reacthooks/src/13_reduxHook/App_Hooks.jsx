import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberAction, subNumberAction } from "./store/modules/counter";
const App = memo((props) => {
  // 使用useSelector将redux中store的数据映射到数组中
  const { count } = useSelector((state) => ({ count: state.counter.count }));
  // 使用dispatch直接派发action
  const dispatch = useDispatch();

  function changeNumHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num));
    } else {
      dispatch(subNumberAction(num));
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

export default App;
