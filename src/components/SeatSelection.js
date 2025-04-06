import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectSeats = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pricePerSeat = location.state?.price || 500;

  const [numSeats, setNumSeats] = useState(1);
  const [attendees, setAttendees] = useState([{ name: "", email: "" }]);
  const [phone, setPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  useEffect(() => {
    setAttendees((prev) => {
      const updated = [...prev];
      while (updated.length < numSeats) {
        updated.push({ name: "", email: "" });
      }
      return updated.slice(0, numSeats);
    });
  }, [numSeats]);

  useEffect(() => {
    const allValid =
      phoneRegex.test(phone) &&
      attendees.every(
        (a) => nameRegex.test(a.name) && emailRegex.test(a.email)
      );

    setIsFormValid(allValid);
  }, [phone, attendees]);

  const handleChange = (index, field, value) => {
    setAttendees((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 10) setPhone(value);
  };

  const totalPrice = numSeats * pricePerSeat;

  const handlePayment = () => {
    if (!isFormValid) {
      alert("⚠️ Please fill in valid details before proceeding!");
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
        min={1}
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
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength="10"
        className="p-3 mt-2 mb-6 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400 w-full max-w-md"
        value={phone}
        onChange={handlePhoneChange}
      />

      <button
        className={`mt-4 font-semibold py-3 px-8 rounded-lg transition-all duration-300 ${
          isFormValid
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-gray-500 text-white cursor-not-allowed"
        }`}
        onClick={handlePayment}
        disabled={!isFormValid}
      >
        Proceed to Payment (₹{totalPrice})
      </button>
    </div>
  );
};

export default SelectSeats;
