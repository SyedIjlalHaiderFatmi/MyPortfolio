import React from 'react';
import { motion } from 'framer-motion';
import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="bg-[#0C0C1D] backdrop-blur-md border border-[#00FF41]/20 rounded-3xl p-8 hover:scale-[1.02] hover:border-[#00FF41]/60 hover:shadow-[0_20px_50px_rgba(0,255,65,0.15)] transition-all duration-500 flex flex-col justify-between hud-corners"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-slate-400 text-xs font-jetbrains font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-[#00FF41]/10 text-[#00FF41] text-[10px] font-jetbrains font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#00FF41]/30">
          INTERNSHIP
        </span>
      </div>
      <h3 className="text-white text-2xl font-black mb-1 tracking-tight font-orbitron">
        {intern.role}
      </h3>
      <p className="text-[#00D4FF] text-sm font-jetbrains font-bold tracking-wide mb-6 uppercase">
        {intern.organization}
      </p>

      {/* Skills gained */}
      <div className="mb-6">
        <h4 className="text-[#00D4FF]/70 text-xs font-jetbrains font-bold uppercase tracking-wider mb-2">SKILLS GAINED:</h4>
        <ul className="text-slate-200 text-sm font-medium space-y-1 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-white/10">
      <h4 className="text-[#00D4FF]/70 text-xs font-jetbrains font-bold uppercase tracking-wider mb-3">TECHNOLOGIES:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-jetbrains font-bold text-[#00FF41] bg-[#00FF41]/10 rounded-full border border-[#00FF41]/20 hover:bg-[#00FF41]/30 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Internships = () => {
  return (
    <section className="bg-gradient-to-br from-[#12102A] via-[#0C0C1D] to-[#050510] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/15">
      
      {/* Torn paper divider at top */}
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
            [ EXPERIENCE & LABS ]
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#00FF41] mb-4 tracking-tight uppercase neon-green">
            Work Experience
          </h2>
          <p className="text-purple-200/80 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Practical internships where I applied security engineering principles and threat audits.
          </p>
        </motion.div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-[#00FF41] opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
