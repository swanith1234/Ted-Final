import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import afroze from "../assets/images/Afroze.jpg";
import swanith from "../assets/images/swanith.jpg";
import Azeez from "../assets/images/Azeez.jpg";
import Sathwika from "../assets/images/Sathwika.jpg";

const teamMembers = [
  {
    name: "Sadvika",
    position: "Digital Marketing",
    image: Sathwika,
  },
  {
    name: "Swanith",
    position: "Technical Head",
    image: swanith,
  },
  {
    name: "Afroze",
    position: "Curation Head",
    image: afroze,
  },
  {
    name: "Azeez",
    position: "Content Creation",
    image: Azeez,
  },
];

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
        Meet Our Team
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center shadow-2xl w-full aspect-[4/5] max-w-sm mx-auto flex flex-col justify-center"
            >
              {/* Profile Image with Glowing Ring */}
              <div className="flex justify-center mb-4">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border-4 border-red-600 animate-pulse-glow blur-sm"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-red-600 relative z-10 filter grayscale-[90%] brightness-110 contrast-105 shadow-[0_0_20px_rgba(239,68,68,0.5)"
                  />
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold font-sans tracking-wide">
                {member.name}
              </h3>
              <p className="text-sm text-red-500 uppercase font-medium font-sans">
                {member.position}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
