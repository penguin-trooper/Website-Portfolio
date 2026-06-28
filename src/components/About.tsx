import { Section } from "./Section";
import { quickInfo } from "../data";
import { motion } from "motion/react";
import rooftopImage from "../assets/images/rooftop_plants_1782625261603.jpg";
import apartmentRightImage from "../assets/images/apartment_right_1782627877961.jpg";

export function About() {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-transparent relative overflow-hidden"
      decorations={
        <>
          {/* Left panel: Rooftop plants */}
          <div className="absolute inset-y-0 left-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={rooftopImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-left opacity-95 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to right, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, white 50%, transparent)'
              }}
            />
          </div>
          {/* Right panel: Apartment scene */}
          <div className="absolute inset-y-0 right-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={apartmentRightImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-right opacity-80 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to left, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, white 50%, transparent)'
              }}
            />
          </div>
          {/* Environmental Storytelling: Quiet Apartment Rooftop */}
          <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-accent-secondary opacity-30 animate-twinkle"></div>
          <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white opacity-20 animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-[12vw] w-1.5 h-1.5 bg-accent-primary opacity-60 animate-pixel-flicker hidden md:block"></div>
        </>
      }
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="prose prose-invert">
            <p className="text-text-secondary leading-relaxed mb-6 font-sans">
              I am a Software Engineering student at Universiti Malaya with hands-on experience in full-stack development, mobile app development, software testing, machine learning, and database systems.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6 font-sans">
              My work spans academic and university projects where I have contributed to product development, testing automation, and technical event leadership. I enjoy solving practical problems and turning requirements into reliable systems.
            </p>
            <p className="text-text-secondary leading-relaxed font-sans">
              I am seeking a 6-month software engineering internship from August 2026 to February 2027 where I can contribute, learn, and continue building production-minded software.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-panel rounded-lg p-6 md:p-8 relative overflow-hidden group">
            {/* Decorative Top Border */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-accent-secondary/50 group-hover:w-full transition-all duration-700 ease-in-out"></div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 relative z-10">
              {quickInfo.map((info) => (
                <div key={info.label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 bg-accent-primary/50 rounded-sm"></span>
                    <p className="text-xs md:text-sm font-pixel text-accent-primary/80 uppercase tracking-widest">{info.label}</p>
                  </div>
                  <p className="text-text-primary font-medium text-sm font-sans">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
