import React from "react";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Login from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation"; // Import the Navigation component
import "./App.css"; // Import the app styles
import Reservations from "./components/Reservations/Reservations";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        <HomePage />
        <About />
        <Menu />
        <Reservations />
        <Testimonials />
        <Login />
      </div>
    </div>
  );
}

export default App;
