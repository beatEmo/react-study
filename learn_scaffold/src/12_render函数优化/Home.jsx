import React, { PureComponent } from "react";

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.message !== nextProps.message) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log("Home render");
    return (
      <div>
        <h3>Home</h3>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

export default Home;
