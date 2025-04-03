import React from "react";
import { useNavigate } from "react-router-dom";

const Passes = () => {
  const navigate = useNavigate();

  const handleRegister = (price) => {
    navigate("/select-seats", { state: { price } });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 min-h-screen bg-black text-white">
      {/* Elite Pass */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center border border-red-500 flex flex-col justify-between h-[350px]">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-red-500">
            Elite Pass
          </h3>
          <p className="text-lg md:text-xl font-semibold mt-2 text-yellow-400">
            <span className="line-through text-gray-500">₹400</span> ₹350
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Unlock the world of TEDx with the Elite pass, your access to all
            <a href="#" className="text-red-400 hover:underline ml-1">
              Non-Tech Events
            </a>
            .
          </p>
        </div>
        <button
          onClick={() => handleRegister(350)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Register Now
        </button>
      </div>

      {/* Supreme Pass */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center border border-red-500 flex flex-col justify-between h-[350px]">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-red-500">
            Supreme Pass
          </h3>
          <p className="text-lg md:text-xl font-semibold mt-2 text-yellow-400">
            <span className="line-through text-gray-500">₹450</span> ₹400
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Step into the spotlight with the Supreme Pass. Access to
            <a href="#" className="text-red-400 hover:underline ml-1">
              One Event
            </a>
            from the paid trio, a
            <a href="#" className="text-red-400 hover:underline ml-1">
              Free Tech Trio Bundle
            </a>
            , and all Non-Tech Events.
          </p>
        </div>
        <button
          onClick={() => handleRegister(400)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Passes;
