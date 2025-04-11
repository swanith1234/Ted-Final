import React from "react";
import { motion } from "framer-motion";
import defaultImage from "../assets/images/random.jpg"; // Fallback image
import priyanka from "../assets/images/priyanka.jpeg";
import vvlakshmi from "../assets/images/vvlaksmi.jpg";
import jahnavi from "../assets/images/Jahnavi-Dangeti.jpg";
import vidhya from "../assets/images/vidya.jpeg";
import abdus from "../assets/images/abdus.jpeg";
import punit from "../assets/images/punit.jpeg";
import koushik from "../assets/images/koushik.jpg";
import siddarth from "../assets/images/Siddarth.jpg";
import pavani from "../assets/images/pavanikaranam.jpeg";
import NVChakradhar from "../assets/images/NVChakradhar.jpg";

const speakers = [
  {
    name: "Abdus Samad",
    bio: "Professor at IIT Madras, expert in marine eonergy.",
    img: abdus,
  },
  {
    name: "Chef Koushik",
    bio: "The Art and Science of Culinary Innovation.",
    img: koushik,
  },
  {
    name: "Jahnavi Dangeti",
    bio: "Analog Astronaut ",
    img: jahnavi,
  },
  {
    name: "Punit Chawla",
    bio: "UX Designer & Digital Experience Innovator.",
    img: punit,
  },
  {
    name: "Siddhartha Vadlamudi",
    bio: "Co-founder, Trajecto & GT Consulting",
    img: siddarth,
  },
  {
    name: "Vidhya Sagar",
    bio: "Product Manager & Innovation Leader.",
    img: vidhya,
  },
  {
    name: "NV Chakradhar",
    bio: "Senior Engineer incharge of Pambhan Bridge",
    img: NVChakradhar,
  },
  {
    name: "Pavani Karanam",
    bio: "Actress",
    img: pavani,
  },
];

const containerVariants = {
  hidden: { opacity: 0, translateY: 50 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Speakers = () => {
  return (
    <motion.section
      className="bg-black text-white py-12 px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl text-red-600 font-bold mb-10"
          variants={cardVariants}
        >
          Meet Our Speakers
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600 transition duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image wrapper */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.img || defaultImage}
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-400">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Speakers;
