import React from "react";
import "./authModal.css";
import Modal from "react-modal";

const AuthModal = ({
  isOpen,
  isClosed,
  title,
  buttonText,
  switchText,
  onSwitch,
}) => {
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
    <Modal isOpen={isOpen} style={customStyles}>
      <button
        onClick={() => setLoginOpen(false)}
        className="react-modal-close-button"
      >
        X
      </button>
      {title}
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
          <button id="login-button">{buttonText}</button>
          <span
            onClick={() => {
              setLoginOpen(false);
              setRegisterOpen(true);
            }}
          >
            {switchText}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
