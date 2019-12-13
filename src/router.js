import About from "./views/About";
import Home from "./views/Home";
import My from "./views/My";

export const routes = [
  {
    name: "about",
    path: "/about",
    component: About
  },
  {
    name: "home",
    path: "/home",
    component: Home
  },
  {
    name: "my",
    path: "/my",
    component: My
  }
];
