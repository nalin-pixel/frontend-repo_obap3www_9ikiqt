import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'Explore the platform',
    features: ['Unlimited drafts', 'Basic templates', 'Community support'],
    cta: 'Start free'
  },
  {
    name: 'Pro',
    price: '$29',
    tagline: 'For growing teams',
    features: ['Advanced AI models', 'Brand kits', 'A/B testing', 'Priority support'],
    cta: 'Upgrade'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Security and scale',
    features: ['SSO + roles', 'Private models', 'Dedicated success'],
    cta: 'Talk to sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Flexible plans for any stage
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border border-white/10 p-6 bg-white/5 ${i === 1 ? 'ring-2 ring-fuchsia-500/60' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.tagline}</p>
                </div>
                <div className="text-3xl font-extrabold text-white">{t.price}<span className="text-base font-medium text-gray-400">{t.price !== 'Custom' ? '/mo' : ''}</span></div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-semibold text-white shadow-lg ${i === 1 ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500' : 'bg-white/10 hover:bg-white/15'}`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
