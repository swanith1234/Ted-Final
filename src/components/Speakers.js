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

const speakers = [
  {
    name: "Abdus Samad",
    bio: "Professor at IIT Madras, expert in marine energy.",
    img: abdus,
  },
  {
    name: "Koushik",
    bio: "The Art and Science of Culinary Innovation.",
    img: koushik,
  },
  {
    name: "Jahnavi Dangeti",
    bio: "Aspiring astronaut & aerospace engineer.",
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Speakers = () => {
  return (
    <motion.section
      className="bg-black text-white py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl text-red-600 font-bold mb-12"
          variants={cardVariants}
        >
          Meet Our Speakers
        </motion.h2>

        {/* Responsive Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group hover:shadow-lg hover:shadow-red-600 transition-transform duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Speaker Image */}
              <motion.img
                src={speaker.img || defaultImage}
                alt={speaker.name}
                className="w-full h-80 object-cover object-center rounded-lg"
              />

              {/* Speaker Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <motion.div className="p-4 w-full text-center bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold">{speaker.name}</h3>
                  <p className="text-sm text-gray-300">{speaker.bio}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Speakers;
