import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aaliyah",
    comment:
      "'Little Lemon wowed me! Flavors danced, service shone—a truly unforgettable dining experience.'",
    rating: 5,
    image: require("./Images/Aaliyah.jpg"),
  },
  {
    name: "Lee",
    comment:
      "'Culinary masterpiece! Little Lemon's detail, warm hospitality left me craving more. A memorable, delightful visit.'",
    rating: 5,
    image: require("./Images/Lee.jpg"),
  },
  {
    name: "Rodriquez",
    comment:
      "'Little Lemon, haven of excellence. Each bite told a story of passion. Friendly staff, home.'",
    rating: 5,
    image: require("./Images/Rodriguez.jpg"),
  },
  {
    name: "Martha",
    comment:
      "'Extraordinary! Little Lemon's tastes, welcoming atmosphere—a memorable, delicious adventure.'",
    rating: 5,
    image: require("./Images/Martha.jpg"),
  },
  // Add more testimonials with images if needed
];

const Testimonial = () => {
  return (
    <div className="testimonial-bg">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial testimonial-${index + 1}`} key={index}>
            <h3 style={{ marginLeft: "10px" }}>{testimonial.name}</h3>
            <img
              src={testimonial.image}
              alt={`Testimonial ${index + 1}`}
              className={`testimonial-image`}
              width="207px"
            />
            <p className={`testimonial-comment`}>{testimonial.comment}</p>
            <div
              className={`testimonial-info`}
              style={{ color: "yellowgreen", marginLeft: "9px" }}
            >
              <h4>
                Ratings:{" "}
                <span
                  className={`testimonial-stars`}
                  style={{ marginLeft: "10px", color: "yellowgreen" }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
