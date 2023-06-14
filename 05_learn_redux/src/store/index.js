const { createStore } = require("redux");

// 1. 初始化的数据
const initialState = {
  name: "test"
};

// 2. 定义reducer函数：纯函数
function reducer() {
  return initialState;
}

// 3. 创建store
const store = createStore(reducer);

module.exports = store;
