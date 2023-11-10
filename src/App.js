import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Reservations from "./components/Reservations/Reservations";
import OnlineOrders from "./components/OnlineOrders/OnlineOrders";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LittleLemonLogo from "./Little_Lemon_Logo.svg";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <img src={LittleLemonLogo} alt="" />
            <div>
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
                <Link to="/login" id="link" style={{ background: "#121212" }}>
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