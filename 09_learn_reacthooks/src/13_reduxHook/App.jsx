import React, { memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addNumberAction,
  subNumberAction,
  changeMessageAction
} from "./store/modules/counter";

const Home = memo((props) => {
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  console.log("Home 渲染了");

  function changeMessageHandle() {
    dispatch(changeMessageAction("你好！美女！@"));
  }

  return (
    <div>
      <h2>展示文字：{message}</h2>
      <button onClick={(e) => changeMessageHandle()}>修改文字</button>
    </div>
  );
});

const App = memo((props) => {
  // 使用useSelector将redux中store的数据映射到数组中
  const { count } = useSelector(
    (state) => ({ count: state.counter.count }),
    shallowEqual
  );
  // 使用dispatch直接派发action
  const dispatch = useDispatch();

  console.log("App 渲染了");
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
      <Home />
    </div>
  );
});

export default App;
