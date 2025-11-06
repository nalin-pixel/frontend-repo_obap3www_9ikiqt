import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Interactive3D() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) - 0.5; // -0.5 to 0.5
    const py = (y / rect.height) - 0.5;
    setTilt({
      x: -(py * 10), // rotateX
      y: px * 12,    // rotateY
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Try the interactive 3D globe
        </motion.h2>
        <p className="mt-3 text-center text-gray-300">Click and drag to spin. Hover to tilt the frame.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-300"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time 3D object powered by Spline.</li>
                <li>Drag to explore — perfect for product storytelling.</li>
                <li>Smooth, GPU-accelerated rendering in the browser.</li>
              </ul>
            </motion.div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Interactive
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Responsive
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                WebGL
              </span>
            </div>
          </div>

          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            ref={cardRef}
            className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
            style={{ perspective: 1000 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <div
              className="absolute inset-0 rounded-2xl will-change-transform"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>

              {/* Soft gradient glow, does not block interaction */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-fuchsia-500/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
