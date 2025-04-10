import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="bg-black text-white py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 position-absolute bottom-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* Contact Information */}
          <motion.div className="text-center md:text-left" variants={fadeIn}>
            <h4 className="text-2xl font-semibold mb-4 text-red-500">
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="text-sm flex justify-center md:justify-start items-center">
                <FaPhoneAlt className="mr-2" />
                <span>Phone:</span>
                <a href="tel:+918374719689" className="hover:underline ml-2">
                  +91 8374719689
                </a>
                ,
                <a href="tel:+917093135378" className="hover:underline ml-2">
                  +91 7093135378
                </a>
              </p>
              <p className="text-sm flex justify-center md:justify-start items-center">
                <FaEnvelope className="mr-2" />
                <span>Email:</span>
                <a
                  href="mailto:tedxsvu10@gmail.com"
                  className="hover:underline ml-2"
                >
                  tedxsvu10@gmail.com
                </a>
              </p>
              <p className="text-sm flex justify-center md:justify-start items-center">
                <FaGlobe className="mr-2" />
                <span>Website:</span>
                <a
                  href="https://tedxsvu.in"
                  className="hover:underline ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tedxsrivenkateswarau.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div className="text-center" variants={fadeIn}>
            <h4 className="text-2xl font-semibold mb-4 text-red-500">
              Follow Us
            </h4>
            <a
              href="https://instagram.com/tedxsvu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition duration-300"
            >
              <FaInstagram size={40} className="inline-block mb-2" />
            </a>
            <p className="text-sm mt-2">Instagram: @tedxsvu</p>
          </motion.div>
        </div>

        {/* Footer Bottom Text */}
        <motion.div
          className="mt-10 text-center text-sm text-gray-500"
          variants={fadeIn}
        >
          <p>&copy; 2025 TEDxSriVenkateswaraU. All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
