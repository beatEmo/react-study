import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime();
    }

    componentDidMount() {
      this.endTime = new Date().getTime();
      const interval = this.endTime - this.beginTime;
      console.log(`${OriginComponent.name}页面花费了${interval}ms时间`);
    }

    render() {
      return <OriginComponent {...this.props} />;
    }
  };
}

export default logRenderTime;
