import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      agress: true,
      hobbies: [
        { text: "唱", value: "chang", isChecked: false },
        { text: "跳", value: "tiao", isChecked: false },
        { text: "打篮球", value: "lanqiu", isChecked: false }
      ],
      fruit: []
    };

    this.introRef = createRef();
  }

  componentDidMount() {
    this.introRef.current.defaultValue = "dadad";
  }

  formChange(e) {
    console.dir(e.target.type);
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    this.setState({ [name]: value });
  }

  handleSubmitClick(e) {
    // 1.阻止默认行为
    e.preventDefault();
    // 2.获取所有表单数据
    console.log(this.state.username, this.state.password);

    console.log(
      "获取爱好",
      this.state.hobbies
        .filter((item) => item.isChecked)
        .map((item) => item.text)
    );

    console.log("获取非受控组件的结果", this.introRef.current.value);
    // 3.以网络请问方式 将数据传递给服务器
  }

  handleHobbiesClick(e, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = e.target.checked;
    this.setState({ hobbies });
  }
  handlFruitChange(e) {
    const options = Array.from(e.target.selectedOptions);
    const values = options.map((item) => item.value);
    console.log(values);
    this.setState({ fruit: values });
  }

  render() {
    const { username, password, agress, hobbies, fruit } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户：
            <input
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={(e) => this.formChange(e)}
            />
          </label>
          <label htmlFor="password">
            用户：
            <input
              id="password"
              type="text"
              value={password}
              name="password"
              onChange={(e) => this.formChange(e)}
            />
          </label>
          {/* checkbox */}
          {/* <label htmlFor="agress">
            哈哈：
            <input
              id="agree"
              name="agress"
              type="checkbox"
              checked={agress}
              onChange={(e) => this.formChange(e)}
            />
          </label> */}
          {/* checkbox 多选 */}
          {/* <div>
            您的爱好：
            {hobbies.map((item, index) => {
              return (
                <label htmlFor="item.value" key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={item.isChecked}
                    onChange={(e) => this.handleHobbiesClick(e, index)}
                  />
                  <span>{item.text}</span>
                </label>
              );
            })}
          </div> */}

          {/* select 组件 */}
          {/* <select
            value={fruit}
            name="fruit"
            onChange={(e) => this.handlFruitChange(e)}
            multiple
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banner">香蕉</option>
          </select> */}

          {/* 非受控组件 */}
          <input ref={this.introRef} type="text" />

          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
