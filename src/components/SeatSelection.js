import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectSeats = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pricePerSeat = location.state?.price || 500; // Default price if not passed

  const [numSeats, setNumSeats] = useState(1);
  const [attendees, setAttendees] = useState([{ name: "", email: "" }]);
  const [phone, setPhone] = useState("");

  // Update the number of input fields dynamically when numSeats changes
  useEffect(() => {
    setAttendees(
      Array.from({ length: numSeats }, () => ({ name: "", email: "" }))
    );
  }, [numSeats]);

  const handleChange = (index, field, value) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index][field] = value;
    setAttendees(updatedAttendees);
  };

  const totalPrice = numSeats * pricePerSeat;

  const handlePayment = () => {
    if (!phone || attendees.some((a) => !a.name || !a.email)) {
      alert("⚠️ Please fill in all details before proceeding!");
      return;
    }

    console.log("✅ Payment simulated successfully!");
    console.log("Attendees:", attendees);
    console.log("Phone:", phone);
    console.log("Total Price:", totalPrice);

    // Simulating successful payment & navigating to success page
    navigate("/success", { state: { attendees, phone, totalPrice } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white py-12">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Select Your Seats
      </h2>

      <label className="mb-2">Number of Seats:</label>
      <input
        type="number"
        min="1"
        className="p-2 border rounded text-black"
        value={numSeats}
        onChange={(e) =>
          setNumSeats(Math.max(1, parseInt(e.target.value) || 1))
        }
      />

      {attendees.map((attendee, index) => (
        <div key={index} className="mt-4">
          <input
            type="text"
            placeholder={`Attendee ${index + 1} Name`}
            className="p-2 border rounded w-64 text-black"
            value={attendee.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="email"
            placeholder={`Attendee ${index + 1} Email`}
            className="p-2 border rounded w-64 text-black ml-2"
            value={attendee.email}
            onChange={(e) => handleChange(index, "email", e.target.value)}
          />
        </div>
      ))}

      <label className="mt-4">Phone Number:</label>
      <input
        type="text"
        className="p-2 border rounded text-black"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
        onClick={handlePayment}
      >
        Simulate Payment (₹{totalPrice})
      </button>
    </div>
  );
};

export default SelectSeats;