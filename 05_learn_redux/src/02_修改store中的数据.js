const store = require("./store/index");

console.log(store.getState());

// 修改store中的数据 ： 必须通过action
const nameAction = { type: "change_name", name: "kaka" };
store.dispatch(nameAction);
console.log(store.getState());

const counterAction = { type: "add_counter", counter: 10 };
store.dispatch(counterAction);
console.log(store.getState());
