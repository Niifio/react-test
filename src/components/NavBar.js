import React, { useState } from "react";
import { Outlet, Link, useMatches, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { queryItem } from "../redux/features/createCardSlice";
import { logoutUser } from "../redux/features/authSlice";
import { toast } from "react-toastify";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const { name } = useSelector((state) => state.auth);
 

  const navigate = useNavigate();
  const match = useMatches();
  const dispatch = useDispatch();

  const person = name.charAt(0).toUpperCase() + name.slice(1);
  const existUser = () => {
    dispatch(logoutUser());
    toast("You've successfully logout");
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const onHandleChange = (e) => {
    let query = e.target.value;
    dispatch(queryItem(query))
  };

  return (
    <nav className="nav">
      <div className="nav-items">
        <div className="btn btn-reverse logo">Logo</div>
        {match[1].pathname === "/home/user/create/dashboard" ? (
          <div className="search">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              onChange={onHandleChange}
            />
            <div className="search-icon">
              <IoSearch className="s-icon" />
            </div>
          </div>
        ) : null}
        <div className="header">
          <ul>
            {name && <li>Welcome {person}</li>}
            <li>
              <Link to="" className="link">
                Contact
              </Link>
            </li>
            <li onClick={existUser}>
              <Link to="/" className="link">
                Logout
              </Link>
            </li>
          </ul>
          {match[1].pathname === "/home/user" ? null : (
            <button className="btn btn-reverse" onClick={handleGoBack}>
              <p>Back</p>
            </button>
          )}
        </div>
        <div className="hamburger-menu">
          {match[1].pathname === "/home/user" ? null : (
            <RiArrowGoBackFill className="icons" onClick={handleGoBack} />
          )}
          <GiHamburgerMenu
            className="icons"
            onClick={() => setShowMenu((prev) => !prev)}
          />
          {showMenu ? (
            <div className="menu-list">
              <ul>
                {name && <li>Welcome {person}</li>}
                <li>
                  <Link to="" className="link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    settings
                  </Link>
                </li>
                <li onClick={existUser}>
                  <Link to="/" className="link">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default NavBar;
