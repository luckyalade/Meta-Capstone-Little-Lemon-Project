import React, { useState } from "react";
import "./Button.css"; // Create a separate CSS file for styling

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://"
      className={`custom-button ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      click me
    </a>
  );
};

export default Button;
