function loginAuth(OriginComponent) {
  return (props) => {
    // 获取token
    const token = localStorage.getItem("login");

    if (token) {
      return <OriginComponent {...props} />;
    } else {
      return <h2>先登录 sb</h2>;
    }
  };
}

export default loginAuth;
