function applyMiddleware(store, ...funs) {
  funs.forEach((fun) => {
    fun(store);
  });
}

export default applyMiddleware;
