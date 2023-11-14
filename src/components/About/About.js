import "./About.css";
import LemonSlices from "./lemon-slices-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="about">
      <div className="about-us">
        <div>
          <img src={LemonSlices} alt="" width="300px" id="about-img" />
        </div>
        <div>
          <h2>About Us</h2>
          <p>
            Little Lemon, a Mediterranean gem, sprouted from the culinary
            passion of two friends, Alessia and Marco. Established in 2010 in
            the heart of Naples, their restaurant quickly became a local
            favorite, blending traditional flavors with a modern twist. Inspired
            by their travels across the Mediterranean, the duo crafted a menu
            that celebrates the region's diverse culinary heritage. Fresh
            ingredients, bold spices, and a warm ambiance define the Little
            Lemon experience. Over the years, it has evolved into a cherished
            culinary haven, inviting patrons to savor the essence of the
            Mediterranean in every delectable bite.
            <FontAwesomeIcon
              icon={faPizzaSlice}
              style={{
                width: "200px",
                height: "200px",
                opacity: "0.1",
                position: "absolute",
                right: "300px",
                bottom: "-200px",
                color: "grey",
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
