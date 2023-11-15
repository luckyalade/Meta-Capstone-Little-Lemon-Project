import React, { useState } from "react";
import "./ReservationStyle.css";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [comments, setComments] = useState("");
  const [seatingPreference, setSeatingPreference] = useState("inside");
  const [showModal, setShowModal] = useState(false);

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

    // Show the modal after submission
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal and reset the form
    setShowModal(false);
    setName("");
    setDate("");
    setTime("");
    setGuests("");
    setComments("");
    setSeatingPreference("inside");
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
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label>Date:</label>
            <br />
            <input
              type="date"
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

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Thank you for your reservation!</p>
            {/* You can customize the content of the modal as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
