import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  formChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitClick(e) {
    // 1.阻止默认行为
    e.preventDefault();
    // 2.获取所有表单数据
    console.log(this.state.username, this.state.password);
    // 3.以网络请问方式 将数据传递给服务器
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户：
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => this.formChange(e)}
            />
          </label>
          <label htmlFor="password">
            用户：
            <input
              type="text"
              value={password}
              name="password"
              onChange={(e) => this.formChange(e)}
            />
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
