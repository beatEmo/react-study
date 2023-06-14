import React, { PureComponent } from "react";
import Home from "./Home";

export class App extends PureComponent {
  render() {
    return (
      <div>
        App Component
        <React.StrictMode>
          <Home />
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
