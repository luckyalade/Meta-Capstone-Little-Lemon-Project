import React, { useState } from "react";
import "./ReservationStyle.css";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [comments, setComments] = useState("");
  const [seatingPreference, setSeatingPreference] = useState("inside");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your reservation logic here (e.g., send data to a server, etc.)
    console.log("Reservation submitted:", {
      name,
      date,
      time,
      guests,
      comments,
      seatingPreference,
    });
  };

  return (
    <div className="Reservation-Form">
      <h2>Reservation Form</h2>
      <div className="reservation-section">
        <div className="reservation-details">
          <h3>Reserve a table</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            incidunt modi! Molestias nihil obcaecati mollitia libero perferendis
            corporis eius possimus.
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Number of Guests:
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Seating Preference:
              <select
                value={seatingPreference}
                onChange={(e) => setSeatingPreference(e.target.value)}
              >
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
              </select>
            </label>
            <br />
            <label>
              Additional Comments:
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </label>
            <br />
            <button type="submit">Reserve Table</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
