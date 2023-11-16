import React from "react";
import "./ContactStyle.css";
import FooterLogo from "./Images/Little_Lemon_Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter, faInstagram);

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
            <span style={{ color: "#4F625C" }}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {"  "}
            Boulevard Crescent, <br />
            Little Lemon HQ.
          </p>
          <p>
            <span style={{ color: "#4F625C" }}>
              <FontAwesomeIcon icon={faAddressBook} />
            </span>

            <span> +123123123</span>
          </p>
          <p>
            <span style={{ color: "#4F625C" }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {"  "}
            order@littlelemon.com
          </p>
        </div>
        <div className="social-media-navigation">
          <h3>Social Media Links</h3>
          <p>
            <span style={{ color: "#1b1bbe" }}>
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </span>
            {"   "}
            Facebook
          </p>
          <p>
            <span style={{ color: "l#7D40B9" }}>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </span>
            {"   "}
            Instagram
          </p>
          <p>
            <span style={{ color: "lightblue" }}>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </span>
            {"   "}
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
}
