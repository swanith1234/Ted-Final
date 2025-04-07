import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BIRDS from "vanta/dist/vanta.birds.min";
const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          color2: 0xff000e,
          birdSize: 0.5,
          wingSpan: 40.0,
          speedLimit: 10.0,
          separation: 100.0,
          alignment: 100.0,
          cohesion: 100.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  const calculateTimeLeft = () => {
    const eventDate = new Date("April 13, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero bg-black text-white h-screen flex flex-col items-center justify-center px-4 sm:px-8"
      id="vanta"
      ref={myRef}
    >
      <motion.div
        className="hero-content text-center w-full max-w-4xl"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-4">
          TEDx SriVenkateswaraU
        </h1>

        {/* Theme Name & Description */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold italic text-gray-300 mb-2">
          "Uncharted Waters"
        </p>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
          Exploring the unknown—where curiosity meets courage, and challenges
          lead to discovery.
        </p>

        {/* Event Date & Venue */}
        <p className="text-md sm:text-lg md:text-xl text-white font-medium mb-6">
          📅 April 13, 2025 | 📍{" "}
          <a
            href="https://www.google.com/maps?q=Srinivasa+Auditorium+Tirupati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline"
          >
            Srinivasa Auditorium
          </a>
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-lg font-bold text-red-500 mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="p-2 bg-white text-black rounded-lg shadow-md min-w-[70px] text-center"
            >
              {value}{" "}
              <span className="text-sm block">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </span>
            </div>
          ))}
        </div>

        {/* Register Now Button */}
        <div className="flex justify-center w-full mt-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/passes"
              className="bg-red-500 text-white text-center py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg block w-full sm:w-auto"
              aria-label="Register Now"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
