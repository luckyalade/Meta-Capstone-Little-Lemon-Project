import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OnlineOrders from "./components/OnlineOrders";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LittleLemonLogo from "./Little_Lemon_Logo.svg";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-evenly",
              alignItems: "flex-end",
              width: "80%",
            }}
          >
            <img src={LittleLemonLogo} alt="" />
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                position: "relative",
                top: "-10px",
                left: "100px",
                float: "right",
              }}
            >
              <li>
                <Link to="/" id="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" id="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" id="link">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" id="link">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/onlineOrders" id="link">
                  Online Orders
                </Link>
              </li>
              <li>
                <Link to="/login" id="link">
                  Login
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/onlineOrders" element={<OnlineOrders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;