import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold">AdVision</p>
            <p className="text-sm text-gray-400">Create smarter ads, faster — free forever.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AdVision. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
