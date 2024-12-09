import React, { useState } from "react";
import "./inputLink.css";
import axios from "axios";

export const InputLink = () => {
  const [link, setLink] = useState("");
  const [submitLink, setSubmitLink] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async () => {
    try {
      setSubmitLink(link);
      const json = { link: link };
      const { data } = await axios.post("http://localhost:3030/api/link", json);
      setLink(data);
    } catch (err) {
      console.error(err);
      //add notification on top in case of failure.
      alert("Failed to shorten the link. Please try again.");
    }

    setLink("");
  };

  //TODO add link checker

  return (
    <div className="input__container">
      <div className="input-field">
        <input
          type="text"
          id="link"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          required
          placeholder="Shorten a link here..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Link input field"
        />
        <button onClick={handleSubmit}>Shorten it!</button>
        {isFocused && !link && (
          <span className="input-reminder">Please add a link</span>
        )}
      </div>
    </div>
  );
};
