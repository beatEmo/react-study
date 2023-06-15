const { CHANGE_NAME, ADD_NUMBER } = require("./constants");

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
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.counter };
    default:
      return state;
  }
}

module.exports = reducer;
