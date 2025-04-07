import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="bg-gray-900 border border-green-500 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-xl">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
          Payment Successful!
        </h2>
        <p className="text-lg md:text-xl text-yellow-400 font-semibold mb-2">
          Welcome to TEDxSVUCE!
        </p>
        <p className="text-sm md:text-base text-gray-300">
          You’ve successfully registered. You will receive a confirmation email
          within the next{" "}
          <span className="text-white font-medium">24 hours</span> with your
          pass details and further instructions.
        </p>
        <p className="mt-4 text-sm text-gray-400 italic">
          Sit back, relax, and get ready to experience ideas worth spreading!
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;