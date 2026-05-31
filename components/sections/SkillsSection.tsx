'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function SkillsSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-indigo-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-950/40 to-purple-950/40 text-indigo-300 rounded-lg border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-200 text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress */}
          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-indigo-900/30">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {[
                { name: 'Frontend Development', percentage: 95 },
                { name: 'Backend Development', percentage: 85 },
                { name: 'Database Design', percentage: 80 },
                { name: 'UI/UX Design', percentage: 80 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-indigo-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-950/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
