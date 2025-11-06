import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Integrations />
      <Showcase />
      <Footer />
    </div>
  );
}
