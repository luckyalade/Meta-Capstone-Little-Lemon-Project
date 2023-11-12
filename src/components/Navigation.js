import React, { useEffect, useState } from "react";
import NavLogo from "../Little_Lemon_Logo.svg";
import HamburgerMenu from "../components/Hamburger/HamburgerMenu";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: isMobile ? "#3F4D1A" : "lightgreen",
          padding: "10px",
          color: isMobile ? "default" : "red",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <img src={NavLogo} alt="" />
        </div>
        <ul className="link">
          <li>
            <a href="/" id="link" style={{ color: isMobile ? "blue" : "red" }}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              id="link"
              style={{ color: isMobile ? "yellow" : "red" }}
            >
              About
            </a>
          </li>
          <li>
            <a href="/menu" id="link">
              Menu
            </a>
          </li>
          <li>
            <a href="/onlineOrders" id="link">
              Order
            </a>
          </li>
          <li>
            <a href="/login" id="link">
              Login
            </a>
          </li>
          <HamburgerMenu />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
