import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Building2, FileCheck, BarChart3, Users2, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: 'Global Market Access',
    description: 'Connect with verified partners across Asia and Europe through our extensive network.',
  },
  {
    icon: Building2,
    title: 'Trade Solutions',
    description: 'Comprehensive import-export solutions tailored to your business needs.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Support',
    description: 'Navigate international trade regulations with our expert compliance team.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Data-driven insights to help you make informed business decisions.',
  },
  {
    icon: Users2,
    title: 'Partner Matching',
    description: 'Find the perfect business partners with our advanced matching system.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Protect your investments with our comprehensive risk assessment tools.',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glow-effect glass-card p-8 rounded-xl group cursor-pointer bg-slate-900/50"
    >
      <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 
                    flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-7 h-7 text-blue-300 group-hover:text-blue-200" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gradient">{service.title}</h3>
      <p className="text-blue-200 leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-container bg-slate-900/80">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-900/50 to-slate-900/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-300 text-lg font-medium mb-4 block"
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Comprehensive solutions to power your international trade success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;