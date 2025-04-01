import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  {
    tier: "Title Sponsor",
    investment: "₹75,000 and Above",
    benefits: [
      "Exclusive logo placement on stage and all marketing materials",
      "Dedicated slide during event presentations",
      "Largest logo size on official website, social media & banners",
      "On-stage recognition during opening and closing",
      "10 VIP tickets",
      "Inclusion in swag bags and lanyard branding"
    ],
  },
  {
    tier: "Platinum Sponsor",
    investment: "Up to ₹45,000",
    benefits: [
      "Logo displayed on stage banners, event brochures, and website",
      "Mention during opening/closing remarks",
      "5 VIP tickets",
      "Inclusion in swag bags",
      "Booth space to showcase your brand"
    ],
  },
  {
    tier: "Gold Sponsor",
    investment: "Up to ₹25,000",
    benefits: [
      "Logo on event brochures and website",
      "Small logo size on social media posts and banners",
      "3 VIP tickets",
      "Permission to include one promotional item in swag bags",
      "Booth space to showcase your brand"
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
};

const Sponsors = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-32">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl text-red-600 font-bold mb-12"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Sponsor Opportunities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="border border-red-500 rounded-lg p-6 bg-gradient-to-br from-gray-900 to-black shadow-lg transition-transform duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-2">{sponsor.tier}</h3>
              <p className="text-lg font-semibold mb-4">{sponsor.investment}</p>
              <ul className="text-left space-y-2">
                {sponsor.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-gray-300">
                    • {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
