import React, { PureComponent } from "react";

// 定义组件：给一些需要特殊数据的组件，注入props
function enhanceUserInfo(OriginComponent) {
  return class NewComponent extends PureComponent {
    constructor() {
      super();
      this.state = {
        userInfo: {
          name: "coderw",
          level: 909
        }
      };
    }
    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />;
    }
  };
}
const Home = enhanceUserInfo(function (props) {
  return <h1>Home</h1>;
});
const Profile = enhanceUserInfo(function (props) {
  return <h1>Profile</h1>;
});
const HelloFriend = enhanceUserInfo(function (props) {
  return <h1>HelloFriend</h1>;
});

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
        <HelloFriend />
      </div>
    );
  }
}

export default App;
