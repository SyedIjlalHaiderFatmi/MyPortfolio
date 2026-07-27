import React, { useEffect, useRef } from 'react';
import { technicalSkills } from '../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillProgress = ({ name, level }) => {
  const barRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: barRef.current,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(barRef.current, {
            width: `${level}%`,
            duration: 1.2,
            ease: 'power2.out'
          });
          gsap.to({ val: 0 }, {
            val: level,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: function() {
              if (percentRef.current) {
                percentRef.current.textContent = `${Math.round(this.targets()[0].val)}%`;
              }
            }
          });
        },
        once: true
      });
    }, barRef);

    return () => ctx.revert();
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white text-sm font-semibold tracking-wide font-jetbrains">{name}</span>
        <span ref={percentRef} className="text-white/70 text-xs font-jetbrains">0%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <div 
          ref={barRef}
          className="h-full bg-gradient-to-r from-[#00FF41] via-[#00D4FF] to-[#a855f7] rounded-full shadow-[0_0_12px_rgba(0,255,65,0.5)]"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category }) => (
  <div className="skill-card-reveal bg-[#0C0C1D] backdrop-blur-md border border-[#00FF41]/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-[#00FF41]/50 hover:shadow-[0_20px_50px_rgba(0,255,65,0.15)] transition-all duration-500">
    <h3 className="text-white text-lg font-black tracking-tight mb-6 pb-2 border-b border-purple-500/20 uppercase flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#00FF41] shadow-[0_0_8px_#00FF41]"></span>
      {category.title}
    </h3>
    <div>
      {category.skills.map((skill) => (
        <SkillProgress key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.header-reveal', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Cards stagger reveal
      gsap.from('.skill-card-reveal', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill-card-reveal',
          start: 'top 85%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="bg-[#050510] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background visual glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00FF41]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center header-reveal">
          <div className="terminal-badge mb-6 inline-block">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase font-orbitron">
            My Skillset
          </h2>
          <p className="text-purple-200/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            A comprehensive overview of my cyber security expertise, programming languages, networking protocols, and engineering concepts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
