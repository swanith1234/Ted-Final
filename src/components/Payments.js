import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "../assets/images/PaymentQR.png";
import { motion } from "framer-motion";
// just to recommit
const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { attendees, phone, totalPrice } = location.state || {};
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setScreenshot(null); // Clear existing screenshot
    setIsUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const rawLog = reader.result.split(",")[1];
      const dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };

      fetch(
        "https://script.google.com/macros/s/AKfycbw_uIDktFPEB_0hAo3iN98hT_ug81TSRJL7XIvm1863Lc9ZOGdfYeTdDuC7oP6qFLaN6w/exec",
        {
          method: "POST",
          body: JSON.stringify(dataSend),
        }
      )
        .then((res) => res.json())
        .then((a) => {
          setScreenshot(a.url);
          setIsUploading(false);
        })
        .catch((err) => {
          console.error("Upload failed:", err);
          setIsUploading(false);
          alert("❌ Failed to upload image. Please try again.");
        });
    };
  };

  const generateUniqueIds = (attendees, totalPrice) => {
    let prefix = "U";
    if (totalPrice % 900 === 0) prefix = "V";
    else if (totalPrice % 600 === 0) prefix = "G";

    const timestamp = Date.now();
    return attendees.map(
      (_, index) => `${prefix}${index + 1}-${attendees.length}-${timestamp}`
    );
  };

  const validateTransaction = async () => {
    const trimmedTransactionId = transactionId.trim();
    const utrPattern = /^[A-Za-z0-9]{12,22}$/;

    if (!utrPattern.test(trimmedTransactionId)) {
      alert("⚠️ Please enter a valid UTR number.");
      return;
    }

    if (!screenshot) {
      alert("⚠️ Please wait for the screenshot to upload.");
      return;
    }

    setIsProcessing(true);

    try {
      const uniqueIds = generateUniqueIds(attendees, totalPrice);

      const attendeeData = attendees.map((attendee, index) => ({
        uniqueId: uniqueIds[index],
        name: attendee.name,
        email: attendee.email,
        phone,
        seatsBooked: attendees.length,
        amountPaid: totalPrice,
        transactionId: trimmedTransactionId,
        screenshotUrl: screenshot,
        timestamp: new Date().toLocaleString(),
      }));

      for (const attendee of attendeeData) {
        await fetch(
          "https://script.google.com/macros/s/AKfycbwI90s532JBuJf1gqoEx8QEU8s7Uqbolb97ISC00-ero4SlzzPgAeu_j-l5lqj_r4pC/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(attendee),
          }
        );
      }

      alert("✅ Submitted successfully!");
      navigate("/success");
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("❌ Something went wrong! Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const isUtrValid = /^[A-Za-z0-9]{12,22}$/.test(transactionId.trim());
  const isButtonDisabled =
    !isUtrValid || !screenshot || isUploading || isProcessing;

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
          Please complete payment and upload the screenshot along with the
          transaction ID.
        </p>
      </div>

      <div className="w-full max-w-md mb-4">
        <label className="block mb-2">UTR Number:</label>
        <input
          type="text"
          placeholder="Enter the UTR"
          className="w-full p-3 rounded-lg border border-gray-300 text-black"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block mb-2">Upload Screenshot:</label>
        <label
          htmlFor="file-upload"
          className="custom-file-upload cursor-pointer bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path d="M10 1C9.73 1 9.48 1.11 9.29 1.29L3.29 7.29C3.11 7.48 3 7.73 3 8V20C3 21.66 4.34 23 6 23H7C7.55 23 8 22.55 8 22C8 21.45 7.55 21 7 21H6C5.45 21 5 20.55 5 20V9H10C10.55 9 11 8.55 11 8V3H18C18.55 3 19 3.45 19 4V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 2.34 19.66 1 18 1H10Z" />
          </svg>
          <span>Choose a screenshot</span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Upload status & preview */}
        {isUploading && (
          <p className="mt-3 text-yellow-400 text-sm">Uploading...</p>
        )}

        {/* {screenshot && typeof screenshot === "string" && (
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">
              Uploaded Screenshot Preview:
            </p>
            <img
              src={screenshot.url}
              alt="Uploaded Screenshot"
              className="rounded-lg w-full max-h-64 border border-gray-500"
            />
          </div>
        )} */}
      </div>
      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black border-l-8 border-red-600 text-white p-5 rounded-lg shadow-lg max-w-md w-full text-sm"
      >
        <h4 className="text-xl font-bold mb-2 text-red-500 uppercase">
          Important
        </h4>
        <p className="mb-2">
          Please make the{" "}
          <span className="font-semibold text-red-400">full payment</span> for
          the tickets as shown above. Only after full payment will your seat be
          blocked and a confirmation mail sent.
        </p>
        <p className="font-semibold text-yellow-400">
          Partial payments will not be accepted and the amount will not be
          refunded.
        </p>
      </motion.div>

      <button
        className={`mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={validateTransaction}
        disabled={isButtonDisabled}
      >
        {isProcessing ? "Processing..." : "Verify Payment"}
      </button>
    </div>
  );
};

export default PaymentPage;