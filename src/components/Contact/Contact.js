import React from "react";
import "./ContactStyle.css";
import FooterLogo from "./Images/Little_Lemon_Logo.svg";

export default function Login() {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="doormat-navigation">
          <h3>Doormat Navigation</h3>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Reservations</p>
          <p>Testimonial</p>
          <p>Contact</p>
        </div>
        <div className="contact-navigation">
          <h3>Contact</h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div className="social-media-navigation">
          <h3>Socila Media Links</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}
