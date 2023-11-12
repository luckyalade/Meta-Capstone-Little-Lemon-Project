// App.js

import React from "react";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import OnlineOrders from "./components/OnlineOrders/OnlineOrders";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation"; // Import the Navigation component
import "./App.css"; // Import the app styles

function App() {
  return (
    <div>
      <div>
        <Navigation /> {/* Use the Navigation component */}
        
        <HomePage />
        <About />
        <Menu />
        <OnlineOrders />
        <Login />
      </div>
    </div>
  );
}

export default App;
