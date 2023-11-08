import Image from "../black-chef.jpg";

function Testimonials() {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <h3>Rating Stars</h3>
          <img src={Image} alt="customer pics" width="200px" />
          <h4>James</h4>
          <p>Customer Review</p>
        </div>
        <div className="card">
          <h3>Rating Stars</h3>
          <img src="#" alt="customer pics" />
          <h4>Aaliyah</h4>
          <p>Customer Review</p>
        </div>
        <div className="card">
          <h3>Rating Stars</h3>
          <img src="#" alt="customer pics" />
          <h4>Lee</h4>
          <p>Customer Review</p>
        </div>
        <div className="card">
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
