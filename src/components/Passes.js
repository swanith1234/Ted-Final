import React from "react";
import { useNavigate } from "react-router-dom";

const Passes = () => {
  const navigate = useNavigate();

  const handleRegister = (price) => {
    navigate("/select-seats", { state: { price } });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 min-h-screen bg-black text-white px-4">
      {/* Student Access Pass */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center border border-red-500 flex flex-col justify-between h-[420px] hover:shadow-red-500/30 hover:scale-105 transition-transform duration-300">
        <div>
          <h3 className="text-2xl font-bold text-red-500 tracking-widest uppercase">
            Student Access Pass
          </h3>
          <p className="text-xl font-semibold mt-3 text-yellow-400">
            <span className="line-through text-gray-500">₹700</span> ₹600
          </p>
          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            🔥 Experience TEDx like never before!
            <br />
            🎁 Grab your exclusive Swag Bag, Pen, Notes, Badge & Food Pass.
            <br />
            🏅 A professionally recognized Participation Certificate will also
            be provided.
            <br />
            🎤 Full access to mind-blowing talks & electrifying energy.
          </p>
          <p className="mt-4 text-sm text-gray-400 italic">
            🎫 General seating – Be part of the movement!
          </p>
        </div>
        <button
          onClick={() => handleRegister(600)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Book Student Pass
        </button>
      </div>

      {/* Executive Pass */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center border border-red-500 flex flex-col justify-between h-[440px] hover:shadow-red-500/30 hover:scale-105 transition-transform duration-300">
        <div>
          <h3 className="text-2xl font-bold text-red-500 tracking-widest uppercase">
<<<<<<< HEAD
            Executive Pass
=======
            Professional Pass
>>>>>>> 3bab2da1f100be400df58dc43ee296c38af5cf48
          </h3>
          <p className="text-xl font-semibold mt-3 text-yellow-400">
            <span className="line-through text-gray-500">₹1000</span> ₹900
          </p>
<<<<<<< HEAD
          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            🌟 Want the VIP experience? This is it.
            <br />
            🎁 Premium Swag Bag, Pen, Notes, Badge & Food Pass included.
=======
  <p className="text-sm text-yellow-400 font-medium mt-1">
  🎓 Exclusively for Working Professionals across any domain
</p>
          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            🌟 Want the VIP experience? This is it.
            <br />
            🎁  Swag Bag, Pen, Notes, Badge & Food Pass included.
>>>>>>> 3bab2da1f100be400df58dc43ee296c38af5cf48
            <br />
            🏅 A professionally recognized Participation Certificate will also
            be provided.
            <br />
            🔊 Feel the power from the front row — TEDx like you've never seen
            before!
          </p>
          <p className="mt-4 text-sm text-yellow-400 font-medium">
            💺 Priority Front-Row Seating – Own the spotlight.
          </p>
        </div>
        <button
          onClick={() => handleRegister(900)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
<<<<<<< HEAD
          Get Executive Access
=======
          Get Professional Access
>>>>>>> 3bab2da1f100be400df58dc43ee296c38af5cf48
        </button>
      </div>
    </div>
  );
};

export default Passes;
