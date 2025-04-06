import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-100 text-gray-900 px-6 dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-red-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/2 w-16 h-16 bg-yellow-300 rounded-full opacity-50 animate-spin"></div>
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      {/* Enlarged Profile Image */}
      <motion.img
        src="/Ganishwar.png"
        alt="Ganishwar Arun"
        className="w-64 h-64 object-cover rounded-full shadow-2xl border-8 border-blue-500 mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onClick={() => setIsOpen(true)}
      />

      {/* Modal (Popup) */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl relative max-w-lg w-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            
            <img
              src="/Ganishwar.png"
              alt="Ganishwar Arun"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      )}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl mb-6"
      >
        Full Stack Developer | MERN Stack | Passionate Coder
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex space-x-6"
      >
        <a
          href="/Ganishwar ppt resume - ATS (3).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105 shadow-lg"
        >
          View Resume
        </a>
        <Link
          to="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105 shadow-lg"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
