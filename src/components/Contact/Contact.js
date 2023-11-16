import React from "react";
import "./ContactStyle.css";
import FooterLogo from "./Images/Little_Lemon_Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

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
          <p>
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
            {"  "}
            Boulevard Crescent, <br />
            Little Lemon HQ.
          </p>
          <p>
            <FontAwesomeIcon icon={faAddressBook} />
            <span> +123123123</span>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {"  "}
            order@littlelemon.com
          </p>
        </div>
        <div className="social-media-navigation">
          <h3>Social Media Links</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}
