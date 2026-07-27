import React from 'react';
import { motion } from 'framer-motion';
import { softSkillsList } from '../data/portfolioData';

const SoftSkillCard = ({ skill, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-[#0C0C1D] border border-[#00FF41]/20 rounded-3xl p-6 hover:scale-[1.03] hover:border-[#00FF41]/50 hover:shadow-[0_20px_45px_rgba(0,255,65,0.15)] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px] hud-corners"
  >
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-4 p-3 bg-[#00FF41]/10 rounded-2xl group-hover:bg-[#00FF41]/20 group-hover:scale-110 transition-all duration-300">
        {skill.icon}
      </div>
      <h3 className="text-white text-lg font-black tracking-tight mb-2 uppercase font-orbitron group-hover:text-[#00FF41] transition-colors">
        {skill.name}
      </h3>
      <p className="text-slate-300 text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </motion.div>
);

const SoftSkills = () => {
  return (
    <section className="bg-[#050510] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/10 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#050510]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="terminal-badge mb-6 inline-block">
            [ CORE COMPETENCIES ]
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Professional Soft Skills
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </motion.div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
