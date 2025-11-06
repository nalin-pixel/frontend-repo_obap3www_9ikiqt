import React from 'react';
import { motion } from 'framer-motion';

const examples = [
  {
    title: 'Instagram Carousel',
    desc: 'Swipe-ready sequences with auto-sized captions and brand colors.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'YouTube Thumbnail',
    desc: 'High-contrast layouts optimized for CTR across niches.',
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'LinkedIn Single Image',
    desc: 'Professional tone, copy variants, and preview for desktop + mobile.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="demo" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Ready-made outputs for every channel
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={ex.img} alt={ex.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{ex.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{ex.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
