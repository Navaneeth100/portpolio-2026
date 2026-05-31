'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { FormEvent, useState } from 'react';
import { Github, Linkedin, Instagram, MessageCircle, Mail, MailCheckIcon, Phone , MapIcon } from "lucide-react";

export function ContactSection() {
  const ref = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

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
    <section ref={ref} className="py-12 md:py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Let&apos;s Work Together
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-950/40 flex items-center justify-center group-hover:bg-indigo-950/60 transition-colors">
                    <span className="text-xl"><MailCheckIcon size={20} /></span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                      {PORTFOLIO_DATA.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.phone}`}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-950/40 flex items-center justify-center group-hover:bg-indigo-950/60 transition-colors">
                    <span className="text-xl"><Phone size={20} /></span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                      {PORTFOLIO_DATA.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-950/40 flex items-center justify-center">
                    <span className="text-xl"><MapIcon size={20} /></span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">{PORTFOLIO_DATA.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-gray-400 text-sm mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {PORTFOLIO_DATA.social.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-indigo-950/40 hover:bg-indigo-950/60 flex items-center justify-center text-lg transition-colors"
                      title={social.name}
                    >
                      {social.icon === "github" && <Github size={20} />}
                      {social.icon === "linkedin" && <Linkedin size={20} />}
                      {social.icon === "whatsapp" && <MessageCircle size={20} />}
                      {social.icon === "instagram" && <Instagram size={20} />}
                      {social.icon === "email" && <Mail size={20} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-indigo-950/20 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-indigo-950/20 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-indigo-950/20 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
