import Logo from "../../assets/images/Logo .svg";
import "../Navigation/NavigationStyle.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      style={{
        position: isScrolled ? "sticky" : "relative",
        top: 0,
        backgroundColor: isScrolled ? "rgba(0, 255, 0, 0.2)" : "transparent",
        boxShadow: isScrolled ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        padding: "1px 0",
        zIndex: isScrolled ? "1000" : "1",
      }}
    >
      <nav>
        <div>
          <img src={Logo} alt="" height="43px" />
        </div>
        <ul className="link">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/menu">Reservations</a>
          </li>
          <li>
            <a href="/onlineOrders">Online Order</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
