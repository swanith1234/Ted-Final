import React from "react";
import { motion } from "framer-motion";
import CPR from "../assets/images/CPR.png";
import Teddie from "../assets/images/Teddie.PNG";
import United from "../assets/images/UnitedTirupati.jpg";
import mcdonald from "../assets/images/mcDonald.png";
import goldsponsor from "../assets/images/GoldSponsor.jpg";
import candor from "../assets/images/Candor.png";
import communityPartners from "../assets/images/CommunityPartner.PNG";
const sponsors = {
  titlePartner: [{ name: "Aarvi Digitals", img: CPR }],
  platinumPartners: [{ name: "Candor", img: candor }],
  goldPartners: [{ name: "Gold Sponsor 1", img: goldsponsor }],
  mediaPartners: [
    { name: "Teddie Foodie", img: Teddie },
    { name: "United Tirupati", img: United },
  ],
  communityPartners: [{ name: "IMC tirupati", img: communityPartners }],
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

const renderSponsors = (title, data, isTitle = false) => (
  <>
    <motion.h2
      className="text-3xl sm:text-4xl text-red-600 font-bold mb-6 mt-12"
      variants={cardVariants}
    >
      {title}
    </motion.h2>
    <div
      className={`flex flex-wrap justify-center ${isTitle ? "mb-12" : "gap-8"}`}
    >
      {data.map((partner, index) => (
        <motion.div
          key={index}
          className={`w-[200px] h-[200px] flex items-center justify-center rounded-full border-4 ${
            isTitle ? "border-red-600" : "border-red-500"
          } p-2`}
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
  </>
);

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
        {renderSponsors("Title Partners", sponsors.titlePartner, true)}
        {renderSponsors("Platinum Sponsors", sponsors.platinumPartners)}
        {renderSponsors("Gold Sponsors", sponsors.goldPartners)}
        {renderSponsors("Media Partners", sponsors.mediaPartners)}
        {renderSponsors("Community Partners", sponsors.communityPartners)}
      </div>
    </motion.section>
  );
};

export default Sponsors;
