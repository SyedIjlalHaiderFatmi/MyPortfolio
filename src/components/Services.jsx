import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

const TagCard = ({ number, title, text, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full bg-[#0C0C1D] border border-[#00FF41]/20 hover:border-[#00FF41]/60 rounded-3xl p-6 md:p-8 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,255,65,0.2)] transition-all duration-500 hud-corners flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-jetbrains text-2xl font-black text-[#00FF41] bg-[#00FF41]/10 px-3 py-1 rounded-xl border border-[#00FF41]/30">
            {number}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-pulse" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-black mb-3 text-white tracking-tight font-orbitron">
          {title}
        </h3>
        
        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
          {text}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-jetbrains text-[#00D4FF]">
        <span>METHODOLOGY STAGE // 0{index + 1}</span>
        <span className="text-[#00FF41]">ACTIVE Audit</span>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section 
      id="process"
      className="bg-[#050510] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="terminal-badge mb-6 inline-block">
            [ {skillsContent.badge} ]
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight font-orbitron neon-green">
            {skillsContent.heading}
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {skillsContent.description}
          </p>
        </motion.div>

        {/* Cards Grid — Clean 2-column layout on medium/desktop screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillsContent.cards.map((card, index) => (
            <TagCard 
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Status text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30">
            <span className="font-jetbrains text-sm font-bold text-[#00FF41] tracking-widest uppercase">
              ✔ {skillsContent.endText}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
