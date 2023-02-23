import React from "react";
import { Outlet } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-items">
        <div>logo</div>
        <div className="header">
          <ul>
            <li>UserName</li>
            <li> logout</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default NavBar;
