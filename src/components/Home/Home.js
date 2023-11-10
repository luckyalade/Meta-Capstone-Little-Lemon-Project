import BlackChef from "../restauranfood.jpg";
import "../Home/styles/HomeStyle.css";

function Home() {
  return (
    <div id="Homebody">
      <div
        className="hero"
        style={{
          display: "flex",
          width: "80%",
          margin: "0px 10%",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="hero_body" style={{ width: "50%" }}>
          <h1 style={{ fontSize: "2.5rem" }}>
            <span style={{ color: "#ff0432" }}>Little</span> Lemon
          </h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            similique sapiente quas exercitationem, quibusdam laborum inventore
            ipsam error sunt eos tempora excepturi, at itaque ea corrupti
            delectus doloremque, vel maiores!
          </p>
          <button type="button">Reserve a table</button>
        </div>
        <div className="hero_img" style={{ width: "50%" }}>
          <img src={BlackChef} alt="Black Chef" width={400} />
        </div>
      </div>
    </div>
  );
}

export default Home;
