'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t border-indigo-500/10 bg-background py-8 px-6"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {currentYear} Navaneeth KP. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-gray-400 hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            Back to Top
          </a>
          
          <a
            href="#contact"
            className="text-gray-400 hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-gray-500 text-xs">
          Designed & Built with <span className="text-indigo-400">Next.js</span> & <span className="text-purple-400">React Three Fiber</span>
        </p>
      </div>
    </motion.footer>
  );
}
