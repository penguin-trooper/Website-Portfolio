import { Section } from "./Section";
import { experiences } from "../data";
import { motion } from "motion/react";
import elevatedMetroImage from "../assets/images/elevated_metro_1782626100240.jpg";
import metroRightImage from "../assets/images/metro_right_1782627915860.jpg";

export function Experience() {
  return (
    <Section 
      id="experience" 
      title="Experience & Achievements" 
      className="relative bg-transparent overflow-hidden"
      decorations={
        <>
          {/* Left panel: Metro station */}
          <div className="absolute inset-y-0 left-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={elevatedMetroImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-left opacity-90 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to right, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, white 50%, transparent)'
              }}
            />
          </div>
          {/* Right panel: Metro right scene */}
          <div className="absolute inset-y-0 right-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={metroRightImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-right opacity-78 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to left, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, white 50%, transparent)'
              }}
            />
          </div>
          {/* Train moving effect (subtle light beams) */}
          <div className="absolute top-[40%] right-0 w-[200px] h-[5px] bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-0 animate-train-pass pointer-events-none z-0 mix-blend-screen" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute top-[60%] left-0 w-[250px] h-[4px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 animate-train-pass pointer-events-none z-0 mix-blend-screen" style={{ animationDuration: '10s', animationDelay: '5s' }}></div>
        </>
      }
    >

      <div className="absolute top-0 right-0 w-[40vw] h-full bg-gradient-to-l from-secondary-bg/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-3xl relative z-10">
        <div className="relative border-l border-border-color ml-3 md:ml-0 pl-8 md:pl-10 space-y-12">
          {/* Subtle grid line overlay on the timeline */}
          <div className="absolute top-0 bottom-0 left-[-0.5px] w-[1px] bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent opacity-30"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline quest marker (pixel diamond) */}
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 flex items-center justify-center bg-primary-bg group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 bg-accent-secondary rotate-45 border border-primary-bg outline outline-1 outline-accent-secondary group-hover:bg-accent-primary group-hover:outline-accent-primary transition-colors shadow-[0_0_10px_rgba(124,92,255,0.4)]"></div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-1 md:gap-4">
                <h3 className="text-sm md:text-base font-pixel text-text-primary group-hover:text-accent-primary transition-colors tracking-wide">{exp.title}</h3>
                <span className="text-xs md:text-sm font-pixel text-accent-primary/80 whitespace-nowrap bg-accent-primary/10 px-2 py-1 rounded border border-accent-primary/20">{exp.year}</span>
              </div>
              <p className="text-sm font-sans font-medium text-text-secondary mb-3">{exp.organization}</p>
              <p className="text-sm font-sans text-text-muted leading-relaxed max-w-2xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
