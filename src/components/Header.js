import React, { useState } from "react";
import "./HeaderStyle.css";
import { menuList } from "./menuList";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useNewListContext } from "./Context";
const Header = () => {
  const [clicked, setClicked] = useState(false);
  const {cartItems}=useNewListContext();
  const navigate = useNavigate();
  const handleClick = () => {
    setClicked(!clicked);
  };
  const signUp = () => {
    navigate("/loginpage");
  };
  const logOut = () => {
    localStorage.setItem("email", "");
    navigate("/");
  };
  const isLoggedIn = localStorage.getItem("email");
  return (
    <>
      <nav className="NavbarItems">
       
        <h1 className="navbar-logo">Shopping Site</h1>
        <div className="totalCartItemsDiv d-flex justify-content-center">
          {cartItems.length}
        </div>
        <div className="menu-icons" onClick={handleClick}>
          {clicked ? <IoClose className="icon" /> : <IoMenu className="icon" />}
        </div>
        <ul className={clicked ? "nav-menu active " : "nav-menu "}>
          {menuList.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {isLoggedIn ? (
            <button className="logout-btn" onClick={logOut}>
              LOGOUT
            </button>
          ) : (
            <button className="sign-up-btn" onClick={signUp}>
              Sign Up
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
