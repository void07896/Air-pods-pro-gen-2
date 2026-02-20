import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
      
      <div className="glass-card p-8 h-full flex flex-col items-start relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full -mr-16 -mt-16 blur-3xl" />
        
        <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-cyan/50 transition-colors duration-500">
          <Icon className="w-8 h-8 text-neon-cyan" />
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-4 tracking-tight group-hover:text-neon-cyan transition-colors duration-500">
          {title}
        </h3>
        
        <p className="text-white/60 leading-relaxed text-sm">
          {description}
        </p>
        
        {/* Decorative Line */}
        <div className="mt-auto pt-8 w-full">
          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};
