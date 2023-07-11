import React, { PureComponent } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFind from "./pages/NotFind";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <header>
          头部
          <nav>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({ color: isActive ? "red" : "" })}
            >
              关于
            </NavLink>
          </nav>
          <hr />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/1" />}></Route>
              <Route path="/home/1" element={<Home1 />}></Route>
              <Route path="/home/2" element={<Home2 />}></Route>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFind />}></Route>
          </Routes>
        </main>
        <footer>
          <hr />
          尾部
        </footer>
      </div>
    );
  }
}

export default App;
