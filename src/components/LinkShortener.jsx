import React, { useState } from "react";
import "./linkshortener.css";
import "../App.css";
import axios from "axios";

export default function LinkShortener() {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  
  //loading animation while loading?

  const changes = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonObj = { link: data };
      const response = await axios.post(
        "http://localhost:3030/api/link",
        jsonObj
      );
      console.log(response.data);
      setData("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="link-shortener__container" onSubmit={handleSubmit}>
      <div className="url-shorten">
        <label>URL to shorten</label>
        <input
          className="test"
          type="text"
          placeholder="https://example.com"
          onChange={changes}
          value={data}
        />
      </div>
      <div className="custom-short-link">
        <label>Custom suffix (optional)</label>
        <input type="text" placeholder="custom suffix" />
      </div>
      <button type="submit">Shorten URL</button>
    </form>
  );
}
