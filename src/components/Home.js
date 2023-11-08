import BlackChef from "../black-chef.jpg";

function Home() {
  return (
    <div
      className="hero"
      style={{ display: "flex", width: "80%", margin: "0px 10%" }}
    >
      <div className="hero_body" style={{ width: "50%" }}>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique sapiente quas exercitationem, quibusdam laborum inventore
          ipsam error sunt eos tempora excepturi, at itaque ea corrupti delectus
          doloremque, vel maiores!
        </p>
        <button type="button">Reserve a table</button>
      </div>
      <div className="hero_img" style={{ width: "50%" }}>
        <img src={BlackChef} alt="Black Chef" width={400} />
      </div>
    </div>
  );
}

export default Home;
