const { createStore } = require("redux");
const reducer = require("./reducer");

// 3. 创建store
const store = createStore(reducer);

module.exports = store;
