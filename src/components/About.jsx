import React, { useEffect, useRef } from 'react';
import stackImage from '../assets/about/syed-avatar.png';
import { aboutContent } from '../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tech stack SVG icons rendered inline for crisp rendering
const SecurityIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" fill="#000000" fillOpacity="0.2" stroke="#FFFFFF" />
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider font-jetbrains">Cyber Security</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M62.613 2c-31.527 0-29.566 13.674-29.566 13.674l.055 14.164h29.988v4.254H20.732C7.031 34.092 2 42.49 2 64.086c0 21.593 11.953 28.512 22.84 28.512h13.645V78.434s-.422-16.895 16.645-16.895h28.664c.004 0 16.082.262 16.082-15.539V17.652S101.992 2 62.613 2zm-15.68 9.387c2.977 0 5.398 2.422 5.398 5.4 0 2.976-2.421 5.398-5.398 5.398-2.981 0-5.403-2.422-5.403-5.398 0-2.978 2.422-5.4 5.403-5.4z" />
      <path fill="#FFD43B" d="M65.387 126c31.527 0 29.566-13.674 29.566-13.674l-.055-14.164H64.91v-4.254h42.359C120.969 93.908 126 85.51 126 63.914c0-21.593-11.953-28.512-22.84-28.512H89.515v14.164s.422 16.895-16.645 16.895H44.207c-.004 0-16.082-.262-16.082 15.539v27.348S26.008 126 65.387 126zm15.68-9.387c-2.977 0-5.398-2.422-5.398-5.4 0-2.976 2.421-5.398 5.398-5.398 2.981 0 5.403 2.422 5.403 5.398 0 2.978-2.422 5.4-5.403 5.4z" />
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider font-jetbrains">Python</span>
  </div>
);

const NetworksIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" fill="#000000" fillOpacity="0.2" stroke="#FFFFFF" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14.25 14.25 0 00-3.5 9 14.25 14.25 0 003.5 9 14.25 14.25 0 003.5-9A14.25 14.25 0 0012 3z" stroke="#FFFFFF" />
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider font-jetbrains">Networking</span>
  </div>
);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge reveal
      gsap.from('.badge-reveal', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Text content reveal
      gsap.from('.content-reveal', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Skills stagger reveal
      gsap.from('.skill-reveal', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.content-reveal',
          start: 'top 60%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-gradient-to-br from-[#12102A] via-[#0C0C1D] to-[#050510] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#00FF41]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0 badge-reveal">
          
          <div className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#00D4FF]/40 transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border-2 border-[#00D4FF] transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-[#0C0C1D]/90 border border-purple-500/30 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(147,51,234,0.3)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 hud-corners neon-border-glow">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/50 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-purple-500/20">
                <img 
                  src={stackImage} 
                  alt="Syed Ijlal Haider Fatmi — Cybersecurity Enthusiast & Ethical Hacker" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div className="flex-1 text-white mt-8 md:mt-0 relative z-20 content-reveal">
          
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-orbitron gradient-text-cyber">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-purple-100/90"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl skill-reveal">
              <SecurityIcon />
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl skill-reveal">
              <PythonIcon />
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl skill-reveal">
              <NetworksIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#050510]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 opacity-10 animate-pulse text-[var(--accent-green)]">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 opacity-10 animate-pulse text-[var(--accent-green)]" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
