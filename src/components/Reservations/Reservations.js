import React, { useState } from "react";
import "./ReservationStyle.css";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const [seatingPreference, setSeatingPreference] = useState("inside");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your reservation logic here (e.g., send data to a server, etc.)
    const reservationDetails = {
      name,
      date,
      guests,
      seatingPreference,
    };

    console.log("Reservation submitted:", reservationDetails);

    // Display form submit details as an alert
    alert(`Reservation submitted\nThank you!`);
  };

  return (
    <div className="Reservation-Form">
      <div className="reservation-section" id="reservation-section">
        <div className="reservation-details">
          <h2>Reservation Form</h2>
          <p style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Commodi officiis deleniti ex repellendus
            accusantium exercitationem possimus, <br />
            sequi unde vero ipsa maxime optio odio dolorem assumenda at dolore
            eum recusandae expedita, quis ducimus natus fuga illum quidem.
            Voluptas saepe exercitationem, unde praesentium ad corrupti, eius
            ex, accusamus tempora sapiente fuga minus?
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />
            <label>Last Name:</label>
            <br />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <br />
            <br />
            <label>Number of Guests:</label>
            <br />
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
            <br />
            <br />
            <label>Seating Preference:</label>
            <br />
            <select
              value={seatingPreference}
              onChange={(e) => setSeatingPreference(e.target.value)}
            >
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>
            <br />
            <button type="submit">Reserve Table</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
