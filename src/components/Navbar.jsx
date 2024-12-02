import React from "react";
import "./navbar.css";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar--container">
      <img src={logo} alt="logo of shortly" />
      <div className="navbar--login-signup">
        <a href="#">Login</a>
        <a href="#">
          <span>Sign Up</span>
        </a>
      </div>
    </nav>
  );
};
