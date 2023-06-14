import React, { PureComponent } from "react";
import loginAuth from "../hoc/with_login";

export class Cart extends PureComponent {
  render() {
    return <div>Cart</div>;
  }
}

export default loginAuth(Cart);
