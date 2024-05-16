"use client";

import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-screen py-2">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Website
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hi! I'm Avijit Biswas, an aspiring Data Scientist and Full-stack
          Developer.
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
