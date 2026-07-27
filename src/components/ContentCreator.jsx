import React from 'react';
import { motion } from 'framer-motion';
import { contentCreation, socialLinks } from '../data/portfolioData';

const CreatorCard = ({ category, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="bg-[#0C0C1D] backdrop-blur-md border border-[#00FF41]/20 rounded-3xl p-8 hover:scale-[1.02] hover:border-[#00FF41]/60 hover:shadow-[0_20px_50px_rgba(0,255,65,0.2)] transition-all duration-500 group flex flex-col justify-between hud-corners"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl p-3 bg-[#00FF41]/10 rounded-2xl group-hover:bg-[#00FF41]/20 group-hover:scale-110 transition-all duration-300">
          {category.icon}
        </span>
        <span className="text-[#00D4FF] text-xs font-jetbrains font-bold tracking-widest uppercase py-1 px-3 border border-[#00D4FF]/30 rounded-full bg-[#00D4FF]/10">
          {category.stats}
        </span>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight font-orbitron group-hover:text-[#00FF41] transition-colors">
        {category.title}
      </h3>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
        {category.description}
      </p>
    </div>

    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-jetbrains tracking-wider font-bold text-[#00FF41]/70 group-hover:text-[#00FF41] transition-colors">
      <span>VIEW DEMO / DETAILS</span>
      <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </motion.div>
);

const ContentCreator = () => {
  return (
    <section id="creator" className="bg-[#050510] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00FF41]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <div className="terminal-badge mb-6 inline-block">
            [ {contentCreation.badge} ]
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {contentCreation.heading}
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {contentCreation.description}
          </p>
        </motion.div>

        {/* Content Creation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <a 
              key={category.title}
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <CreatorCard category={category} index={index} />
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00FF41] to-[#00D4FF] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-500 group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow my Edits on Instagram
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContentCreator;
