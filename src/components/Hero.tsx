import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      <Hero3D />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-blue-300 text-lg md:text-xl mb-4"
          >
            Welcome to AsianTrade Connect
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Bridging Global Markets,
            <br />
            <span className="text-gradient">One Connection at a Time</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Connecting businesses across Asia with innovative trade solutions
            and unparalleled market expertise.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#services"
              className="btn btn-primary"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="btn bg-white/10 text-white hover:bg-white/20 border border-white/20"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-8 mt-12"
        >
          {['Milan', 'Paris', 'Bangkok'].map((city) => (
            <div key={city} className="text-blue-200 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mb-2" />
              {city}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;