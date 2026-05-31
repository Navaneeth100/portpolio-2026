'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function ExperienceSection() {
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
    <section ref={ref} className="py-12 md:py-24 px-6 bg-gradient-to-b from-background to-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-12">
            Experience
          </motion.h2>

          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-indigo-500/30 last:pb-0 last:border-l-transparent"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-1 w-6 h-6 bg-background border-2 border-indigo-500 rounded-full" />

                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-indigo-950/40 text-indigo-300 rounded-full border border-indigo-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
