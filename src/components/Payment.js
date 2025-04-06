import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "../assets/images/Scanner.jpg";

// Replace with your deployed Apps Script URLs
const FILE_UPLOAD_URL =
  "https://script.google.com/macros/s/AKfycbzqkqguSk1uD5oWYBoplaTqwbFU1_osLjq5XDyFfzpIy3cKjqyDSct2tNzOCsWwtbNknA/exec";
const SHEET_SUBMIT_URL =
  "https://script.google.com/macros/s/AKfycbzadwyp7SxrF8j-9v33QXiLSMpL3HpHz3ReMPl5VwsaGCE2VESIV2_ukGE_iSZ1Nxgb/exec";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { attendees, phone, totalPrice } = location.state || {};
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (e) => {
    setScreenshot(e.target.files[0]);
    var file = e.target.files[0]; //the file
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbw_uIDktFPEB_0hAo3iN98hT_ug81TSRJL7XIvm1863Lc9ZOGdfYeTdDuC7oP6qFLaN6w/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          console.log(a);
          setScreenshot(a.url); //See response
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
  };

  // const uploadImage = async () => {
  //   if (!screenshot) return null;

  //   const reader = new FileReader();

  //   return new Promise((resolve, reject) => {
  //     reader.onloadend = async () => {
  //       const base64 = reader.result.split(",")[1];
  //       const formData = new FormData();
  //       formData.append("filedata", base64);
  //       formData.append("filename", screenshot.name);
  //       formData.append("mimeType", screenshot.type);

  //       try {
  //         const response = await fetch(FILE_UPLOAD_URL, {
  //           method: "POST",
  //           mode: "no-cors",
  //           body: JSON.stringify({
  //             filedata: base64,
  //             filename: screenshot.name,
  //             mimeType: screenshot.type,
  //           }),
  //         });
  //         const result = await response.json();
  //         console.log(result);
  //         resolve(result.imageUrl);
  //       } catch (err) {
  //         reject(err);
  //       }
  //     };
  //     reader.readAsDataURL(screenshot);
  //   });
  // };
  const generateUniqueIds = (attendees, totalPrice) => {
    let prefix = "U"; // Default Unknown

    if (totalPrice % 400 === 0) {
      prefix = "V"; // VIP
    } else if (totalPrice % 350 === 0) {
      prefix = "G"; // General
    }

    const timestamp = Date.now();
    const totalSeats = attendees.length;

    return attendees.map((_, index) => {
      const seatNumber = index + 1;
      return `${prefix}${seatNumber}-${totalSeats}-${timestamp}`;
    });
  };

  const validateTransaction = async () => {
    const trimmedTransactionId = transactionId.trim();
    const utrPattern = /^[A-Za-z0-9]{12,22}$/;

    if (!utrPattern.test(trimmedTransactionId)) {
      alert(
        "⚠️ Please enter a valid UTR number (12–22 alphanumeric characters)!"
      );
      return;
    }

    if (!screenshot) {
      alert(
        "⚠️ Please upload the payment screenshot and wait for it to finish uploading."
      );
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
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(attendee),
          }
        );
      }

      alert("✅ Submitted successfully!");
      navigate("/success");
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Something went wrong! Try again.");
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
        <label htmlFor="file-upload" className="custom-file-upload">
          <div className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 1C9.73 1 9.48 1.11 9.29 1.29L3.29 7.29C3.11 7.48 3 7.73 3 8V20C3 21.66 4.34 23 6 23H7C7.55 23 8 22.55 8 22C8 21.45 7.55 21 7 21H6C5.45 21 5 20.55 5 20V9H10C10.55 9 11 8.55 11 8V3H18C18.55 3 19 3.45 19 4V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 2.34 19.66 1 18 1H10Z" />
            </svg>
          </div>
          <div className="text">Choose a screenshot</div>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <button
        className={`mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ${
          isProcessing ||
          !transactionId.trim().match(/^[A-Za-z0-9]{12,22}$/) ||
          !screenshot
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={validateTransaction}
        disabled={
          isProcessing ||
          !transactionId.trim().match(/^[A-Za-z0-9]{12,22}$/) ||
          !screenshot
        }
      >
        {isProcessing ? "Processing..." : "Verify Payment"}
      </button>
    </div>
  );
};

export default PaymentPage;
