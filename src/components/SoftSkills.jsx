import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { softSkillsList } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const SoftSkillCard = ({ skill }) => (
  <div className="soft-skill-card bg-[#0C0C1D] border border-[#00FF41]/10 rounded-3xl p-6 hover:scale-[1.03] hover:border-[#00FF41]/40 hover:shadow-[0_20px_45px_rgba(0,255,65,0.1)] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px]">
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-4 p-3 bg-purple-950/40 rounded-2xl group-hover:bg-[#00FF41]/20 group-hover:scale-110 transition-all duration-300">
        {skill.icon}
      </div>
      <h3 className="text-white text-lg font-black tracking-tight mb-2 uppercase">
        {skill.name}
      </h3>
      <p className="text-purple-200/60 text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.soft-skill-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#050510] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#050510]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="terminal-badge inline-block border border-purple-500/30 rounded-full px-5 py-1.5 text-sm text-purple-300 font-bold mb-6 shadow-sm bg-purple-500/10 backdrop-blur-sm">
            Core Competencies
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Professional Soft Skills
          </h2>
          <p className="text-purple-200/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill) => (
            <SoftSkillCard key={skill.name} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
