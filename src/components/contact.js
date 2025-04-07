import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-32">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl text-red-600 font-bold mb-8"
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Us
                </motion.h2>
                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="mb-6 text-lg">
                        Have questions or need more info? Reach out to us!
                    </p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 bg-red-500 rounded-lg text-white font-semibold hover:bg-red-600 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
