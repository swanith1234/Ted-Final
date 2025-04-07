import React from "react";
import { motion } from "framer-motion";
// import aarvi from "../assets/images/aarvi.png";
import mcdonald from "../assets/images/mcDonald.png";
// import dopamineStore from "../assets/images/dopamine_store.png";
// import defaultImage from "../assets/images/random.jpg"; // Fallback image
import CPR from "../assets/images/CPR.png";
import Teddie from "../assets/images/Teddie.PNG";
import United from "../assets/images/UnitedTirupati.jpg";
const sponsors = {
  titlePartner: { name: "Aarvi Digitals", img: CPR },
  otherPartners: [
    { name: "Teddie Foodie", img: Teddie },
    { name: "United Tirupati", img: United },
    // { name: "Partner 3", img: mcdonald },
    // { name: "Partner 4", img: mcdonald },
  ],
};

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

const Sponsors = () => {
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
          className="text-3xl sm:text-4xl text-red-600 font-bold mb-6"
          variants={cardVariants}
        >
          Title Partners
        </motion.h2>
        <div className="flex justify-center mb-12">
          <motion.div
            className="w-[200px] h-[200px] flex items-center justify-center rounded-full border-4 border-red-600 p-2"
            variants={cardVariants}
          >
            <img
              src={sponsors.titlePartner.img}
              alt={sponsors.titlePartner.name}
              className="w-full h-full object-contain rounded-full"
            />
          </motion.div>
        </div>

        <motion.h2
          className="text-3xl sm:text-4xl text-red-600 font-bold mb-6"
          variants={cardVariants}
        >
          Media Partners
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.otherPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="w-[200px] h-[200px] flex items-center justify-center rounded-full border-2 border-red-600 p-2"
              variants={cardVariants}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
