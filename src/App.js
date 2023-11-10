import React from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import OnlineOrders from "./components/OnlineOrders/OnlineOrders";
import Login from "./components/Login/Login";
import NavLogo from "./Little_Lemon_Logo.svg";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <div id="nav-logo">
                <img src={NavLogo} alt="" />
              </div>
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
                <Link to="/onlineOrders" id="link">
                  Place Order
                </Link>
              </li>
              <li>
                <Link to="/login" id="link">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/onlineOrders" element={<OnlineOrders />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
