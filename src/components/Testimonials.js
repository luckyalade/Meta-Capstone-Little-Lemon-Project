import Image from "../black-chef.jpg";

function Testimonials() {
  return (
    <div>
      <div
        className="Review_Card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, auto)",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <div
          className="James_Card"
          style={{
            background: "white",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <h3>Rating Stars</h3>
          <img src={Image} alt="customer pics" width="200px" />
          <h4>James</h4>
          <p>Customer Review</p>
        </div>
        <div className="Aaliyah_Card">
          <h3>Rating Stars</h3>
          <img src="#" alt="customer pics" />
          <h4>Aaliyah</h4>
          <p>Customer Review</p>
        </div>
        <div className="Lee_Card">
          <h3>Rating Stars</h3>
          <img src="#" alt="customer pics" />
          <h4>Lee</h4>
          <p>Customer Review</p>
        </div>
        <div className="Martha_Card">
          <h3>Rating Stars</h3>
          <img src="#" alt="customer pics" />
          <h4>Martha</h4>
          <p>Customer Review</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
