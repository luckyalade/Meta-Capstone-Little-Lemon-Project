import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-scroll";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hamburger-menu ${isOpen ? "open" : ""}`}
      onClick={handleMenuToggle}
    >
      <div className="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        <ul
          style={{
            color: "#333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px 30px",
            outline: isScrolled ? "2px solid ##a09b8e67" : "",
            backdropFilter: "blur(10px)",
            borderTopLeftRadius: "40px",
          }}
        >
          <li>
            {" "}
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-35}
              duration={500}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="reservations"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
