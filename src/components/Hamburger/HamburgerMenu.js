import React, { useState } from "react";
import "./HamburgerMenu.css"; // Create a separate CSS file for styling

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-nav">
      <div
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="https://">Home</a>
        </li>
        <li>
          <a href="https://">About</a>
        </li>
        <li>
          <a href="https://">Services</a>
        </li>
        <li>
          <a href="https://">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerNav;
