import "./HomeStyle.css";
import HeroImage from "./smilingChef.png";
import Button from "../Button/Button";

export default function Home() {
  return (
    <section
      style={{
        background: "linear-gradient(to top, #00A88483, #ffff00)",
        overflow: "hidden",
        borderBottomRightRadius: "300px",
        // outline: "1px solid #a09b8e67",
      }}
    >
      <div className="article">
        <div className="right">
          <h1>
            <span>Welcome</span> to the Little Lemon Restaurant
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            perferendis similique eius ipsam, culpa libero nemo aperiam cum
            veritatis voluptatibus maxime natus eligendi ratione magni nobis id
            vero ut ex.
          </p>
          <Button
            link="/"
            text="place an order"
            customClass="custom-style"
            id="customId"
          />
        </div>
        <div className="left">
          <img src={HeroImage} alt="" width="450px" />
        </div>
      </div>
    </section>
  );
}
