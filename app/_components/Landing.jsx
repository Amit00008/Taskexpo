'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-20 text-white min-h-screen z-10">
      {/* Hook and CTA */}
      <div className="max-w-lg text-center md:text-left mb-12 md:mb-0 md:ml-auto md:mt-[-20px] mt-6">

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Stay Organized, Stay Ahead 🚀
        </motion.h1>
        <p className="text-lg text-gray-300 mb-6">
          Simplify your tasks with our <span className="text-cyan-300">next-gen</span> futuristic Todo App.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('/home', '_self')}
          className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 px-6 py-3 rounded-full text-lg shadow-xl transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>

      <motion.div
        className="relative w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="relative w-72 md:w-96 h-96 bg-gradient-to-b from-blue-500/20 to-blue-800/10 backdrop-blur-lg border border-blue-500/30 shadow-2xl rounded-3xl p-6 flex flex-col justify-center items-center"
          initial={{ rotateY: 15, scale: 0.9 }}
          animate={{ rotateY: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-6 left-6 w-48 h-12 bg-blue-400/30 rounded-lg shadow-md flex items-center px-4 backdrop-blur-sm"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            ✅ Design New UI
          </motion.div>
          <motion.div
            className="absolute top-16 right-6 w-52 h-12 bg-blue-500/30 rounded-lg shadow-md flex items-center px-4 backdrop-blur-sm"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ✅ Finish Backend
          </motion.div>
          <motion.div
            className="absolute top-36 left-6 w-56 h-12 bg-blue-600/30 rounded-lg shadow-md flex items-center px-4 backdrop-blur-sm"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            ✅ Test App Features
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-6 w-60 h-12 bg-blue-700/30 rounded-lg shadow-md flex items-center px-4 backdrop-blur-sm"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            ✅ Deploy & Launch 🚀
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
