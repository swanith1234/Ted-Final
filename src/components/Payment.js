import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QRCode from "../assets/images/Scanner.jpg"; // Replace with actual QR code path

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz0a2LYzcbhYUJTCHr4nekI4u-0JjCWrPVheboPgVkvsLGHktpU_14NBf-HuswgnlJ-uQ/exec"; // Replace with actual Google Apps Script URL

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { attendees, phone, totalPrice } = location.state || {};
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // ✅ Fix 1: Add missing state

  const validateTransaction = async () => {
    const trimmedTransactionId = transactionId.trim();

    if (!trimmedTransactionId) {
      alert("⚠️ Please enter the transaction ID!");
      return;
    }

    // ✅ Fix 2: Correct transaction ID validation
    if (!/^PAY[A-Z0-9]+$/.test(trimmedTransactionId)) {
      alert("❌ Invalid transaction ID. Please check again.");
      return;
    }

    setIsProcessing(true);

    // ✅ Fix 3: Send each attendee as a separate entry
    const requests = attendees.map((attendee) => {
      const requestData = {
        transactionId: trimmedTransactionId,
        phone,
        totalPrice,
        name: attendee.name,
        email: attendee.email,
      };

      return fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      }).then((response) => response.text()); // Google Apps Script returns a text response
    });

    try {
      const results = await Promise.all(requests);

      // ✅ Fix 4: Ensure all responses contain "Success"
      if (results.every((res) => res.includes("Success"))) {
        alert("✅ Payment Successful! Details saved.");
        navigate("/success", { state: { attendees, phone, totalPrice } });
      } else {
        alert("⚠️ Some entries failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error saving data. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white py-12">
      <h2 className="text-2xl font-bold mb-4 text-red-500">Complete Payment</h2>
      <img
        src={QRCode} // Replace with actual QR Code
        alt="Scan to Pay"
        className="w-64 h-64 mb-4"
      />
      <label className="mb-2">Enter Transaction ID:</label>
      <input
        type="text"
        className="p-2 border rounded text-black"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
      />
      <button
        className={`mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg ${
          isProcessing ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={validateTransaction}
        disabled={isProcessing} // Prevents multiple submissions
      >
        {isProcessing ? "Processing..." : "Verify Payment"}
      </button>
    </div>
  );
};

export default PaymentPage;
