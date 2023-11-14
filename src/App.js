// App.js

import React from "react";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import OnlineOrders from "./components/OnlineOrders/OnlineOrders";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation"; // Import the Navigation component
import "./App.css"; // Import the app styles
import Reservations from "./components/Reservations/Reservations";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        <HomePage />
        <About />
        <Menu />
        <Reservations />
        <OnlineOrders />
        <Login />
      </div>
    </div>
  );
}

export default App;
