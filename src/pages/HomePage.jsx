import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Interactive3D from '../components/Interactive3D';
import Integrations from '../components/Integrations';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Interactive3D />
      <Integrations />
      <Showcase />
      <Footer />
    </div>
  );
}
