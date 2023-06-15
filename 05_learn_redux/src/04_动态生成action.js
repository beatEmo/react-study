// 优化
// 1. 将派发action生成过程放到一个actionCreators函数中
// 2. 将定义的所有actionCreators的函数放到一个独立的文件中 actionCreators.js
// 3. actionCreators和reducer函数中 将所使用的字符串常量抽离出来放到一个独立的constants中
// 4. 将reducer和默认的值initialState放到一个独立的reducer.js文件中，而不是index.js

const store = require("./store/index");
const {
  changeNameAction,
  changeCounterAction
} = require("./store/actionCreators");

// 当store中数据发生变化 触发这个函数
// 返回一个函数 调用取消监听
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化：", store.getState());
});

// 优化
// actionCreaters：帮助我们创建action
// const changeNameAction = (name) => ({ type: "change_name", name });
// const changeCounterAction = (counter) => ({ type: "add_counter", counter });

// 修改store中的数据 ： 必须通过action
store.dispatch(changeNameAction("koko"));
store.dispatch(changeCounterAction(10));
