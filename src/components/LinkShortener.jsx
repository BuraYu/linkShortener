import React from "react";
import "./linkshortener.css";

export default function LinkShortener() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello world");
  };
  return (
    <form className="link-shortener__container" onSubmit={handleSubmit}>
      <div className="url-shorten">
        <label>URL to shorten</label>
        <input type="text" />
      </div>
      <div className="custom-short-link">
        <label>Custom suffix (optional)</label>
        <input type="text" />
      </div>
      <button type="submit">Shorten URL</button>
    </form>
  );
}
