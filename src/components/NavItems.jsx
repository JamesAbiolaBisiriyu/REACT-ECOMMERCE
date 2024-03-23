import React, {  useState, useContext  } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";





const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // add event listener
  const user = useContext(AuthContext);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);                                
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      } `}
      style={{
        boxShadow: "0 1px 3px -2px black",
        position: "fixed",
        top: "0px",
        right: "0",
        left: "0",
        height: "55px",
        background: "white",
        alignItems: "center",
        zIndex: "2"
      }}
    >
      {/* header top start */}
      <div className={`header-top d-md-none  ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/sign-up" className="lab-btn me-3 ">
              <span>Create Account</span>
            </Link>
            <Link to="/login">LOG IN</Link>
          </div>
        </div>
      </div>
      {/* header button */}
      <div className="header-buttom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* Menu Area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active " : ""}`}>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              {/* sign in & log in */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block ">
                {" "}
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block ">
                Log In
              </Link>
              {/* Menu Toggler */}
              <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                <span></span>
                <span></span>
                <span></span>

              </div>
              {/* social toggler */}
              <div className="ellepsis-bar d-md-none "
              onClick={() => setSocialToggle(!socialToggle)}>
              <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;