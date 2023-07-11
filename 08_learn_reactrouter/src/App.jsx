import React, { PureComponent } from "react";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useRoutes
} from "react-router-dom";
import routes from "./router/index";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFind from "./pages/NotFind";
// import Home1 from "./pages/Home1";
// import Home2 from "./pages/Home2";
// import HomeSongMenu from "./pages/HomeSongMenu";
// import SongDetill from "./pages/SongDetill";

export function App(props) {
  const navigate = useNavigate();

  function naviageTo(path) {
    navigate(path);
  }

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
        <button onClick={(e) => naviageTo("/home/1")}>to1</button>
        <button onClick={(e) => naviageTo("/home/2")}>to2</button>
        <hr />
      </header>
      <main>
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/1" />}></Route>
            <Route path="/home/1" element={<Home1 />}></Route>
            <Route path="/home/2" element={<Home2 />}></Route>
            <Route path="/home/songmenu" element={<HomeSongMenu />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detill/:id" element={<SongDetill />}></Route>
          <Route path="*" element={<NotFind />}></Route>
        </Routes> */}
        {useRoutes(routes)}
      </main>
      <footer>
        <hr />
        尾部
      </footer>
    </div>
  );
}

export default App;
