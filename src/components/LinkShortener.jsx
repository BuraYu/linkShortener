import React, { useState } from "react";
import "./linkshortener.css";
import "../App.css";
import axios from "axios";

export default function LinkShortener() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //loading animation while loading?

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3030/");
      setData(response.data);
      console.log("done");
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="link-shortener__container" onSubmit={handleSubmit}>
      <div className="url-shorten">
        <label>URL to shorten</label>
        <input className="test" type="text" placeholder="https://example.com" />
      </div>
      <div className="custom-short-link">
        <label>Custom suffix (optional)</label>
        <input type="text" placeholder="custom suffix" />
      </div>
      <button type="submit">Shorten URL</button>
    </form>
  );
}
