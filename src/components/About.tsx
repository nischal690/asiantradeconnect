import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Global Partners' },
  { icon: Globe, value: '30+', label: 'Countries' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '$2B+', label: 'Trade Volume' },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-bg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <span className="text-blue-400 text-lg font-medium mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                About <span className="text-gradient">AsianTrade Connect</span>
              </h2>
              
              <div className="space-y-6 text-blue-100/90">
                <p className="text-xl leading-relaxed">
                  Since 2009, AsianTrade Connect has been at the forefront of revolutionizing 
                  international trade connections between Asia and Europe.
                </p>
                
                <p className="text-xl leading-relaxed">
                  Our mission is to simplify global trade by providing innovative solutions
                  that connect businesses across continents, cultures, and markets.
                </p>

                <div className="flex gap-6 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  >
                    Our Team
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                              flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-gradient">{stat.value}</div>
                <div className="text-lg text-blue-200/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;