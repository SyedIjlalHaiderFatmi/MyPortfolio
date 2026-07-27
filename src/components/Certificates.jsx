import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certificates } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const CertificateCard = ({ cert }) => (
  <div className="cert-card bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/25 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,255,65,0.1)] transition-all duration-500 cursor-default group">
    <div className="flex items-start gap-4">
      <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
      <div>
        <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-white transition-colors">
          {cert.name}
        </h3>
        <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
          {cert.issuer}
        </p>
      </div>
    </div>
  </div>
);

const Certificates = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-card', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.04,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%',
          toggleActions: 'play none none none',
        }
      });
      
      gsap.from('.view-all-btn', {
        opacity: 0,
        y: 12,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%',
          toggleActions: 'play none none none',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#12102A] via-[#0C0C1D] to-[#050510] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-purple-500/20">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#050510]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#00FF41] mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-purple-200/70 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {certificates.featured.map((cert) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
            />
          ))}
        </div>

        {/* View All Certificates CTA */}
        <div className="view-all-btn flex justify-center">
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#00FF41] text-black font-bold text-base hover:bg-[#00D4FF] hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View All Certificates
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
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
