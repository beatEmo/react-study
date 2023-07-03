import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/actionCreators";

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("加");
      this.props.addNumber(num);
    } else {
      console.log("减");
      this.props.subNumber(num);
    }
  }

  render() {
    const { counter, banners, recommends } = this.props;
    return (
      <div>
        <h2>About page: {counter}</h2>
        <button onClick={(e) => this.calcNumber(6, true)}>+6</button>
        <button onClick={(e) => this.calcNumber(12, true)}>+12</button>
        <button onClick={(e) => this.calcNumber(20, false)}>-20</button>
        <button onClick={(e) => this.calcNumber(30, false)}>-30</button>
        <h2>轮播图</h2>
        <ul>
          {banners.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        <h2>推荐</h2>
        <ul>
          {recommends.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// connect是一个函数返回值是一个高阶组件

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    dispatch(subNumberAction(num));
  }
});

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
