import React from "react";
import "./index.less";
import { useLocation, NavLink } from "react-router-dom";
import Icon from "components/Icon";

function usePath() {
  return useLocation().pathname;
}

const menus = [
  {
    path: "/home",
    name: "Home",
    getIcon: path => (path === "/home" ? "menu_home" : "menu_home_o")
  },
  {
    path: "/about",
    name: "About",
    getIcon: path => (path === "/about" ? "menu_bill" : "menu_bill_o")
  },
  {
    path: "/my",
    name: "My",
    getIcon: path => (path === "/my" ? "menu_my" : "menu_my_o")
  }
];

export default function Footer() {
  const path = usePath();
  return (
    <div className="footer">
      <div className="footer-menus">
        {menus.map(menu => (
          <NavLink
            to={menu.path}
            key={menu.path}
            className="footer-menu touch-action"
          >
            {/*<img src={menu.getIcon(path)} alt=""/>*/}
            <Icon name={menu.getIcon(path)} />
            <p>{menu.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
