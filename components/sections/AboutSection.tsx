'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function AboutSection() {
  const ref = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-12 md:py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-12">
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate full-stack developer with over 2+ years of professional experience in designing, developing, and maintaining modern web applications. My expertise includes React.js, MERN Stack, Django, REST APIs, and real-time application development.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Throughout my career, I have worked on transportation management systems, real-time vehicle tracking platforms, hotel management solutions, and business dashboards. I have experience building responsive user interfaces, integrating APIs, implementing live tracking features using WebSockets, and supporting production deployments.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy solving complex problems, improving user experiences, and developing applications that help businesses streamline their operations. My goal is to continuously grow as a technology professional while contributing to impactful products and innovative solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-indigo-900/30">
            <h3 className="text-2xl font-bold text-white mb-8">Quick Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Completed', value: '10+' },
                { label: 'Happy Clients', value: '5+' },
                { label: 'Technologies', value: '15+' }
              ].map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-indigo-400 mb-2">{fact.value}</div>
                  <div className="text-gray-400 text-sm">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
