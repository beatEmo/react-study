const store = require("./store/index");

// 当store中数据发生变化 触发这个函数
// 返回一个函数 调用取消监听
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化：", store.getState());
});

// 修改store中的数据 ： 必须通过action
store.dispatch({ type: "change_name", name: "kaka" });
store.dispatch({ type: "add_counter", counter: 10 });
