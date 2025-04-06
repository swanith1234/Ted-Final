import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectSeats = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pricePerSeat = location.state?.price || 500;

  const [numSeats, setNumSeats] = useState(1);
  const [attendees, setAttendees] = useState([{ name: "", email: "" }]);
  const [phone, setPhone] = useState("");

  // Adjust attendee fields dynamically
  useEffect(() => {
    setAttendees((prevAttendees) => {
      const updated = [...prevAttendees];
      while (updated.length < numSeats) {
        updated.push({ name: "", email: "" });
      }
      return updated.slice(0, numSeats);
    });
  }, [numSeats]);

  const handleChange = (index, field, value) => {
    setAttendees((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const totalPrice = numSeats * pricePerSeat;

  const handlePayment = () => {
    if (numSeats < 1) {
      alert("⚠️ Please select at least 1 seat.");
      return;
    }

    if (!phone || attendees.some((a) => !a.name || !a.email)) {
      alert("⚠️ Please fill in all details before proceeding!");
      return;
    }

    navigate("/payment", {
      state: { attendees, phone, totalPrice },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 bg-black text-white py-12">
      <h2 className="text-3xl font-bold mb-6 text-red-500 text-center">
        Select Your Seats
      </h2>

      <label className="mb-2 text-lg">Number of Seats:</label>
      <input
        type="number"
        className="p-3 mb-6 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400 w-40 text-center"
        value={numSeats}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "") {
            setNumSeats("");
          } else {
            setNumSeats(Math.max(1, parseInt(value)));
          }
        }}
      />

      <div className="mt-2 w-full max-w-xl">
        {attendees.map((attendee, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
          >
            <input
              type="text"
              placeholder={`Attendee ${index + 1} Name`}
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
              value={attendee.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <input
              type="email"
              placeholder={`Attendee ${index + 1} Email`}
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
              value={attendee.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
            />
          </div>
        ))}
      </div>

      <label className="mt-4 text-lg">Phone Number:</label>
      <input
        type="text"
        className="p-3 mt-2 mb-6 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400 w-full max-w-md"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
        onClick={handlePayment}
      >
        Proceed to Payment (₹{totalPrice})
      </button>
    </div>
  );
};

export default SelectSeats;
