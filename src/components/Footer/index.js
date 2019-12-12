import React from 'react';
import "./index.less";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-menus">
        <li className="footer-menu">
          <Link to="/about">about</Link>
        </li>
        <li className="footer-menu">
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
}
