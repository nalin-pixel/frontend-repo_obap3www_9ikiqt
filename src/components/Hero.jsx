import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] overflow-hidden">      
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Design, Launch, and Learn from Ads in Minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-xl"
          >
            A cyberpunk-grade creative studio that generates copy, renders visuals, and analyzes performance – all in one motion-first workspace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#get-started" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20">
              Start for free
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:text-white hover:bg-white/10">
              Watch demo
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="text-left">
              <div className="text-2xl font-bold text-white">10x</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">Faster creation</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">Time saved</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">AI</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">Co-pilot</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
