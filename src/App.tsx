import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Volume2, 
  ShieldCheck, 
  BatteryCharging, 
  ArrowRight, 
  Cpu, 
  Waves, 
  Zap,
  Github,
  Twitter,
  Instagram
} from 'lucide-react';
import { SciFiBackground } from './components/SciFiBackground';
import { InteractiveAirPods } from './components/InteractiveAirPods';
import { FeatureCard } from './components/FeatureCard';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const features = [
    {
      title: "Immersive Sound",
      description: "Custom-built driver and amplifier work with the H2 chip to provide lower distortion during playback, so you'll hear deeper bass and crisper highs.",
      icon: Volume2
    },
    {
      title: "Noise Cancellation",
      description: "Up to 2x more Active Noise Cancellation than the previous generation, so you'll hear dramatically less noise during your commute.",
      icon: ShieldCheck
    },
    {
      title: "All-Day Battery",
      description: "Up to 6 hours of listening time with a single charge, and up to 30 hours of total listening time with the MagSafe Charging Case.",
      icon: BatteryCharging
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-neon-cyan selection:text-black">
      <SciFiBackground />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-black rounded-full" />
          </div>
          <span className="font-display font-bold tracking-tighter text-xl">AIRPODS PRO</span>
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60"
        >
          <a href="#" className="hover:text-neon-cyan transition-colors">Overview</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Tech Specs</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Compare</a>
          <button className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-neon-cyan transition-all hover:scale-105 active:scale-95">
            Buy Now
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="z-10 text-center mb-12"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-[10px] uppercase tracking-[0.3em] font-bold mb-6"
          >
            Generation 2 • Rebuilt from the sound up
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6 leading-[0.9]"
          >
            AIRPODS <span className="text-gradient">PRO</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto text-white/50 text-lg md:text-xl font-light leading-relaxed"
          >
            Magic, remastered. Experience sound like never before with the all-new H2 chip and enhanced Active Noise Cancellation.
          </motion.p>
        </motion.div>

        <InteractiveAirPods />

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              index={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Tech Specs Teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass-card p-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-cyan/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl font-display font-bold mb-6">The H2 Chip. <br/><span className="text-neon-cyan">Intelligence in every note.</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              The new Apple-designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom-built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Cpu className="w-4 h-4 text-neon-cyan" />
                <span className="text-xs font-bold">H2 Silicon</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Waves className="w-4 h-4 text-neon-cyan" />
                <span className="text-xs font-bold">Spatial Audio</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Zap className="w-4 h-4 text-neon-cyan" />
                <span className="text-xs font-bold">Low Latency</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all hover:bg-neon-cyan"
            >
              Explore the Tech
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-black rounded-full" />
              </div>
              <span className="font-display font-bold tracking-tighter text-lg">AIRPODS PRO</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs text-center md:text-left">
              Designed by Apple in California. Reimagined for the future of sound.
            </p>
          </div>

          <div className="flex gap-8 text-white/40">
            <a href="#" className="hover:text-neon-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-neon-cyan transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-neon-cyan transition-colors"><Github className="w-5 h-5" /></a>
          </div>

          <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
            © 2026 Apple Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
