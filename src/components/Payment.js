import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import QRCode from "../assets/images/Scanner.jpg";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzkQepSkyJDsLfZ1lBoJyr3rPS4_lEyC9UxbXoLkS0Ue3uFAr3PSN0pO1z0RHbffFtUKg/exec";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { attendees, phone, totalPrice } = location.state || {};
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const validateTransaction = async () => {
    const trimmedTransactionId = transactionId.trim();

    if (!trimmedTransactionId) {
      alert("⚠️ Please enter the transaction ID!");
      return;
    }

    if (!/^PAY[A-Z0-9]+$/.test(trimmedTransactionId)) {
      alert("❌ Invalid transaction ID. Please check again.");
      return;
    }

    setIsProcessing(true);

    try {
      const attendeeData = attendees.map((attendee) => ({
        transactionId: trimmedTransactionId,
        phone,
        totalPrice,
        name: attendee.name,
        email: attendee.email,
        seats: attendees.length,
      }));

      const response = await axios.post(GOOGLE_SHEET_URL, {
        data: attendeeData,
      });
      // axios
      //   .post(
      //     "https://script.google.com/macros/s/AKfycby0.../exec",
      //     {
      //       data: [
      //         {
      //           transactionId: "PAY12",
      //           phone: "sd",
      //           totalPrice: 350,
      //           name: "dc",
      //           email: "ds",
      //           seats: 1,
      //         },
      //       ],
      //     },
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.error("Axios Error:", err));

      if (
        typeof response.data === "string" &&
        response.data.includes("Success")
      ) {
        alert("✅ Payment Successful! Details saved.");
        navigate("/success", {
          state: {
            attendees,
            phone,
            totalPrice,
            transactionId: trimmedTransactionId,
          },
        });
      } else {
        alert("⚠️ Error saving data. Please try again.");
      }
    } catch (error) {
      console.error("Axios Error:", error);
      alert("❌ Error saving data. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-red-500">Complete Payment</h2>

      <div className="bg-gray-800 p-6 rounded-lg mb-8 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
        <p className="mb-2">Total Seats: {attendees?.length || 0}</p>
        <p className="mb-2">Total Amount: ₹{totalPrice || 0}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8 max-w-md w-full text-center">
        <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
        <img
          src={QRCode}
          alt="Scan to Pay"
          className="w-64 h-64 mb-4 mx-auto"
        />
        <p className="text-sm text-gray-300">
          Please complete payment and enter the transaction ID below
        </p>
      </div>

      <div className="w-full max-w-md">
        <label className="block mb-2">Transaction ID:</label>
        <input
          type="text"
          placeholder="PAY... (from payment receipt)"
          className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
      </div>

      <button
        className={`mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ${
          isProcessing ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={validateTransaction}
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Verify Payment"}
      </button>
    </div>
  );
};

export default PaymentPage;
