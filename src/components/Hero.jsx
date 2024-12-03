import React from "react";
import "./hero.css";
import workingIllustration from "../assets/illustration-working.svg";

export const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__description">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <span>
          <a href="#">Get Started</a>
        </span>
      </div>
      <img
        src={workingIllustration}
        alt="illustration of a person sitting at a computer"
      />
    </div>
  );
};
