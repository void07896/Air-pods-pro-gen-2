import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

export const InteractiveAirPods: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative w-full max-w-2xl aspect-square flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* Ambient Glow that follows cursor */}
      <motion.div 
        className="absolute w-64 h-64 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none"
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100]),
          y: useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100]),
        }}
      />

      {/* Main AirPods Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Shadow */}
        <div className="absolute bottom-10 w-1/2 h-8 bg-black/40 blur-2xl rounded-full transform -rotate-x-90" />

        {/* AirPods Image - Using a high-quality placeholder that looks like AirPods */}
        {/* In a real app, this would be a high-res transparent PNG or 3D model */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-4/5 h-4/5 flex items-center justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1000&auto=format&fit=crop" 
            alt="AirPods Pro Gen 2"
            className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-3xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating UI Elements */}
          <motion.div 
            className="absolute -top-10 -right-10 glass-card p-4 border-neon-cyan/30"
            style={{ translateZ: 50 }}
          >
            <div className="text-[10px] uppercase tracking-widest text-neon-cyan mb-1">Active Status</div>
            <div className="text-sm font-bold">Noise Cancellation: ON</div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-5 -left-10 glass-card p-4 border-neon-cyan/30"
            style={{ translateZ: 80 }}
          >
            <div className="text-[10px] uppercase tracking-widest text-neon-cyan mb-1">Battery</div>
            <div className="text-sm font-bold">Case: 98% | Buds: 100%</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
