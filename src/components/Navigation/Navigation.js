import Logo from "../../assets/images/Logo .svg";
import "../Navigation/NavigationStyle.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import HamburgerMenu from "../Hamburger/HamburgerMenu";


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
        backgroundColor: isScrolled ? "rgba(0,0,0,0.5)" : "transparent",
        boxShadow: isScrolled ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        padding: "1px 0",
        zIndex: isScrolled ? "1000" : "1",
        // Separate properties for background
        backgroundAttachment: "initial",
        backgroundClip: "initial",
        backgroundImage: "initial",
        backgroundOrigin: "initial",
        backgroundPosition: "initial",
        backgroundRepeat: "initial",
        backgroundSize: "initial",
      }}
    >
      <nav>
        <div>
          <img src={Logo} alt="" height="43px" />
        </div>
        <ul className="link">
          <li>
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
              offset={-70}
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
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <HamburgerMenu />
      </nav>
    </div>
  );
};

export default Navigation;