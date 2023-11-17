import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ link, text, customClass, customId }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      className={`custom-button ${isHovered ? "hovered" : ""} ${customClass}`}
      id={`custom-button ${isHovered ? "hovered" : ""} ${customId}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Button;
