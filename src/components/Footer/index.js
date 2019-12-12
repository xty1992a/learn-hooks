import React from 'react';
import "./index.less";
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import menu_my from 'assets/icons/menu_my.svg';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export default function Footer() {
  const query = useQuery();
  let {path, url} = useRouteMatch();
  console.log(url, path, query.get('id'));
  return (
    <div className="footer">
      <ul className="footer-menus">
        <li className="footer-menu touch-action">
          <Link to="/about?id=asdf">
            <img src={menu_my} alt=""/>
            <p>About</p>
          </Link>
        </li>
        <li className="footer-menu touch-action">
          <Link to="/home">
            <img src={menu_my} alt=""/>
            <p>Home</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
