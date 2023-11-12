import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function Home() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const myImage = {
    backgroundImage: 'url("./Little-Lemon.png")',
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      id="homepage"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: isMobile ? "#222" : "#000",
        padding: "20px",
      }}
    >
      <div style={myImage}>
        <h1 style={{ fontSize: "3rem", zIndex: 1, color: "black" }}>
          <span>Welcome</span> to the Little Lemon Restaurant
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolores
        perferendis similique eius ipsam, culpa libero nemo aperiam cum <br />
        veritatis voluptatibus maxime natus eligendi ratione magni nobis id vero
        ut ex.
      </p>
      <Button />
    </div>
  );
}
