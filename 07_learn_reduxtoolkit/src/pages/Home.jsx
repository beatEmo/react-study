import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
import { fetchHomeMultidataAction } from "../store/features/home";

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidataAction();
  }

  addNumber(num) {
    this.props.addNumber(num);
  }

  render() {
    const { banners, recommends, counter } = this.props;
    return (
      <div>
        <div>Home Counter: {counter}</div>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
        <button onClick={(e) => this.addNumber(8)}>+8</button>
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

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
  fetchHomeMultidataAction() {
    dispatch(fetchHomeMultidataAction({ name: "dadsad", age: 19 }));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
