const { CHANGE_NAME, ADD_NUMBER } = require("./constants.js");
// 优化
// actionCreaters：帮助我们创建action
const changeNameAction = (name) => ({ type: CHANGE_NAME, name });
const changeCounterAction = (counter) => ({ type: ADD_NUMBER, counter });

module.exports = {
  changeNameAction,
  changeCounterAction
};
