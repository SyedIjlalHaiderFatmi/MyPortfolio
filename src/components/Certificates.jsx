import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    className="hud-corners relative bg-[#0C0C1D]/90 backdrop-blur-md rounded-2xl p-5 border border-[#00FF41]/25 hover:border-[#00FF41]/70 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between"
  >
    {/* Background Glow */}
    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#00FF41]/5 rounded-full blur-2xl group-hover:bg-[#00FF41]/15 transition-all duration-500 pointer-events-none" />

    <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-3">
        <span className="text-3xl p-2.5 bg-[#00FF41]/10 rounded-xl border border-[#00FF41]/20 group-hover:scale-110 group-hover:bg-[#00FF41]/20 transition-all duration-300">
          {cert.icon}
        </span>
        <div>
          <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#00FF41] transition-colors font-sans">
            {cert.name}
          </h3>
          <p className="text-[#00D4FF] text-xs font-semibold uppercase tracking-wider font-jetbrains mt-1">
            {cert.issuer}
          </p>
        </div>
      </div>

      {/* Verified Shield Badge */}
      <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold font-jetbrains text-[#00FF41] bg-[#00FF41]/10 px-2 py-0.5 rounded-full border border-[#00FF41]/30">
        <svg className="w-3 h-3 text-[#00FF41]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        VERIFIED
      </span>
    </div>

    {/* Bottom Status line */}
    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-jetbrains text-slate-400">
      <span className="text-[#00FF41]/70">STATUS: AUTHENTICATED</span>
      <span className="text-[#00D4FF]/60 font-bold">2026 // SECURITY</span>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="bg-gradient-to-br from-[#12102A] via-[#0C0C1D] to-[#050510] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/15">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#050510]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center"
        >
          <div className="inline-block terminal-badge mb-4">
            [ CERTIFICATIONS & CREDENTIALS ]
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#00FF41] mb-4 tracking-tight uppercase neon-green">
            Industry Certifications
          </h2>
          <p className="text-purple-200/80 text-base md:text-lg font-semibold max-w-xl mx-auto leading-relaxed">
            Recognized cybersecurity, networking, and technical credentials validating penetration testing and security defense expertise.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              index={index}
            />
          ))}
        </div>

        {/* Status bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-6"
        >
          <div className="px-6 py-2 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 backdrop-blur-md">
            <p className="font-jetbrains text-xs text-[#00FF41] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
              [ {certificates.featured.length} VERIFIED CREDENTIALS ACTIVE ]
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-[#00FF41] opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-[#00FF41] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
