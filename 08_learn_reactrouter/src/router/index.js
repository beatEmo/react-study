import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFind from "../pages/NotFind";
// import Home1 from "../pages/Home1";
// import Home2 from "../pages/Home2";
import HomeSongMenu from "../pages/HomeSongMenu";
import SongDetill from "../pages/SongDetill";
import { Navigate } from "react-router-dom";

const Home1 = React.lazy(() => import("../pages/Home1"));
const Home2 = React.lazy(() => import("../pages/Home2"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/1" />
      },
      {
        path: "/home/1",
        element: <Home1 />
      },
      {
        path: "/home/2",
        element: <Home2 />
      },
      {
        path: "/home/songmenu",
        element: <HomeSongMenu />
      }
    ]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/detill/:id",
    element: <SongDetill />
  },
  {
    path: "*",
    element: <NotFind />
  }
];

export default routes;
