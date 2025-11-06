import React from 'react';
import { Rocket, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 grid place-items-center shadow-md shadow-fuchsia-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">AdVision</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#features" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Features</a>
          <a href="#pricing" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Pricing</a>
          <a href="#login" className="hidden sm:inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
            <LogIn className="h-4 w-4" />
            Login
          </a>
          <a href="#get-started" className="ml-1 inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-sm md:text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition-opacity">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
