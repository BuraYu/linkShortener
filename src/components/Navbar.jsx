import React, { useState } from "react";
import Modal from "react-modal";

import "./navbar.css";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const customStyles = {
    content: {
      width: "300px",
      height: "300px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <nav className="navbar--container">
      <img src={logo} alt="logo of shortly" />
      <div className="navbar--login-signup">
        <a href="#" onClick={() => setLoginOpen(true)}>
          Login
        </a>
        <Modal isOpen={loginOpen} style={customStyles}>
          <button
            onClick={() => setLoginOpen(false)}
            className="react-modal-close-button"
          >
            X
          </button>

          <div className="login-signup-modal">
            <input
              type="text"
              id="email"
              required
              placeholder="enter email"
              aria-label="email input"
            />
            <input
              type="text"
              id="password"
              required
              placeholder="enter password"
              aria-label="password input"
            />
            <div className="login-button-container">
              <button id="login-button">Login</button>
              <span>Allready have an accout click here</span>
            </div>
          </div>
        </Modal>
        <a href="#">
          <span>Sign Up</span>
        </a>
      </div>
    </nav>
  );
};
