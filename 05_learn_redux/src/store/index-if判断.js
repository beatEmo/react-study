const { createStore } = require("redux");

// 1. 初始化的数据
const initialState = {
  name: "test",
  counter: 100
};

// 2. 定义reducer函数：纯函数
// 俩个参数
// 参数一：store中目前保存的state
// 参数二：本次需要更新的action（dispatch）传入的action
// 返回值：返回值作为store之后存储的state
function reducer(state = initialState, action) {
  console.log();
  // 有新数据进行更新返回一个新的state
  if (action.type === "change_name") {
    return { ...state, name: action.name };
  } else if (action.type === "add_counter") {
    return { ...state, counter: state.counter + action.counter };
  }

  // 没有数据更新 返回之前的state
  return state;
}

// 3. 创建store
const store = createStore(reducer);

module.exports = store;
