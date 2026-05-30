'use client';

import { motion } from 'framer-motion';
import { Avatar } from '../Avatar';
import { PORTFOLIO_DATA } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-background to-background opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.05) 25%, rgba(99, 102, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.05) 75%, rgba(99, 102, 241, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, 0.05) 25%, rgba(99, 102, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.05) 75%, rgba(99, 102, 241, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        
        <div className="space-y-8">

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {PORTFOLIO_DATA.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-indigo-400 font-semibold">
              {PORTFOLIO_DATA.title}
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed max-w-lg">
            {PORTFOLIO_DATA.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200">
              View My Work
            </button>
            <button className="px-8 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-950/30 font-semibold rounded-lg transition-colors duration-200">
              Get In Touch
            </button>
          </motion.div>

        </div>

        {/* Right Avatar */}
        <motion.div variants={itemVariants} className="hidden md:block">
          <Avatar />
        </motion.div>
      </motion.div>

    </section>
  );
}
