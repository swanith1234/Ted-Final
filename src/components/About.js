import React from "react";
import { motion } from "framer-motion";
import teamImage1 from "../assets/images/rahul.jpg";
import teamImage2 from "../assets/images/niki.jpg";
import teamImage3 from "../assets/images/guru.jpg";
import teamImage4 from "../assets/images/pragathi.jpg";
import teamImage5 from "../assets/images/shakeer.jpg";
import teamImage6 from "../assets/images/rampraveen.jpg";
import teamImage7 from "../assets/images/yuva.jpg";

const teamImages = [
  teamImage1,
  teamImage2,
  teamImage3,
  teamImage4,
  teamImage5,
  teamImage6,
  teamImage7,
];

const About = () => {
  return (
    <section className="bg-black text-white py-12 p-3 relative">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl text-red-600 md:text-5xl lg:text-6xl font-bold mb-8 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Who We Are
        </motion.h2>

        {/* Tagline or Brief Statement */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-light italic mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          "Navigating uncharted waters, one idea at a time."
        </motion.p>

        {/* About Text Content */}
        <motion.div
          className="max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <p className="mb-6">
            At <span className="font-semibold">TEDx SriVenkateswaraU</span>, we
            believe in the power of ideas to transform our world. Our platform
            is a hub for thought leaders, innovators, and changemakers to come
            together and challenge the status quo.
          </p>
          <p className="mb-6">
            What started as a small gathering has now grown into a movement,
            bringing forward cutting-edge discussions that inspire action. We're
            not just about sharing ideas — we're about creating an impact that
            ripples through every aspect of society.
          </p>
          <p className="mb-6">
            Our journey is driven by curiosity, collaboration, and a commitment
            to dive into uncharted waters. We embrace bold thinking and
            encourage exploration, turning challenges into opportunities.
          </p>
        </motion.div>

        {/* Key Values Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <h3 className="text-3xl text-red-600 font-semibold mb-4">
            Our Core Values
          </h3>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="bg-gray-900 border border-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-gray-400">
                We push the boundaries of what’s possible, exploring new ways to
                solve old problems.
              </p>
            </div>
            <div className="bg-gray-900 border border-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p className="text-gray-400">
                Ideas are better when shared. We foster a collaborative
                environment where voices unite.
              </p>
            </div>
            <div className="bg-gray-900 border border-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Impact</h4>
              <p className="text-gray-400">
                Ideas that matter. We believe in actionable outcomes that create
                real-world change.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section with Scrollable Images */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Meet Our Team</h3>

          {/* Scrollable Image Section */}
          <div className="overflow-hidden relative w-full">
            <div className="scroll-container flex items-center justify-start">
              {/* Repeat team images */}
              {[...teamImages, ...teamImages].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Team Member ${index + 1}`}
                  className="h-32 w-32 md:h-48 md:w-48 object-cover rounded-full mx-4 shadow-lg"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action (Optional) */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p className="text-lg font-light italic mb-6">
            Ready to explore the future with us?
          </p>
          // <a
          //   href="/join-us"
          //   className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg transform hover:scale-105"
          // >
          //   Join Our Movement
          // </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
