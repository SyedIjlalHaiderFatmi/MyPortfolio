import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/portfolioData';

const SkillProgress = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white text-sm font-semibold tracking-wide font-jetbrains">{name}</span>
        <span className="text-[#00D4FF] text-xs font-jetbrains font-bold">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/10">
        <motion.div 
          initial={{ width: "0%" }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#00FF41] via-[#00D4FF] to-[#a855f7] rounded-full shadow-[0_0_12px_rgba(0,255,65,0.5)]"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="bg-[#0C0C1D] backdrop-blur-md border border-[#00FF41]/15 rounded-2xl p-6 hover:scale-[1.02] hover:border-[#00FF41]/50 hover:shadow-[0_20px_50px_rgba(0,255,65,0.15)] transition-all duration-500 hud-corners"
  >
    <h3 className="text-white text-lg font-black tracking-tight mb-6 pb-2 border-b border-[#00FF41]/20 uppercase flex items-center gap-2 font-orbitron">
      <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41] shadow-[0_0_8px_#00FF41] animate-pulse"></span>
      {category.title}
    </h3>
    <div>
      {category.skills.map((skill) => (
        <SkillProgress key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </motion.div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#050510] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/10">
      {/* Background visual glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00FF41]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <div className="terminal-badge mb-6 inline-block">
            [ TECHNICAL STACK ]
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase font-orbitron neon-green">
            My Skillset
          </h2>
          <p className="text-purple-200/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            A comprehensive overview of my cybersecurity expertise, programming languages, networking protocols, and security engineering concepts.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
