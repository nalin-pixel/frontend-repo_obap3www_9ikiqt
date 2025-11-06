import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, BarChart3, Image } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Copy Alchemist',
    desc: 'Transform ideas into on-brand headlines, CTAs, and hooks tuned to your audience.'
  },
  {
    icon: Image,
    title: 'Visual Forge',
    desc: 'Generate high-conversion creatives and variants with one prompt.'
  },
  {
    icon: PenTool,
    title: 'Drag & Compose',
    desc: 'Arrange assets with magnetic guides and physics-like snap for delightful control.'
  },
  {
    icon: BarChart3,
    title: 'Live Insights',
    desc: 'Ship, learn, and iterate with real-time performance analytics.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Everything you need to out-create the competition
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative z-10">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white shadow-lg">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
