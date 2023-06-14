import React, { PureComponent } from "react";
import ThemeContext from "./context/ThemeContext";
import Product from "./page/Product";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: "red", size: 30 }}>
          <Product />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
