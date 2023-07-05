import { PureComponent } from "react";
import store from "../store";

export default function connect(mapStateToProps, mapDispatchToProps) {
  // 返回函数是一个 高阶组件
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          // this.forceUpdate();
          this.setState(mapStateToProps(store.getState()));
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const stateObj = mapStateToProps(store.getState());
        console.log(stateObj);
        const dispatchObj = mapDispatchToProps(store.dispatch);

        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }
    return NewComponent;
  };
}
