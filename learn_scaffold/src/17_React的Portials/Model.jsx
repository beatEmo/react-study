import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

export class Model extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector("#model"));
  }
}

export default Model;
