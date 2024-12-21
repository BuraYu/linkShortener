import React, { useState } from "react";
import Modal from "react-modal";

import "./navbar.css";
import logo from "../assets/logo.svg";
import { useActionState } from "react";

export const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

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
          Login
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
              <span
                onClick={() => {
                  setLoginOpen(false);
                  setRegisterOpen(true);
                }}
              >
                Allready have an accout click here
              </span>
            </div>
          </div>
        </Modal>
        <Modal isOpen={registerOpen} style={customStyles}>
          <button
            onClick={() => setRegisterOpen(false)}
            className="react-modal-close-button"
          >
            X
          </button>
          Register
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
              <span
                onClick={() => {
                  setLoginOpen(true);
                  setRegisterOpen(false);
                }}
              >
                Allready registered? Click here
              </span>
            </div>
          </div>
        </Modal>

        <a href="#">
          <span onClick={() => setRegisterOpen(true)}>Sign Up</span>
        </a>
      </div>
    </nav>
  );
};
