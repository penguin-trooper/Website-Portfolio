import { Section } from "./Section";
import { skills } from "../data";
import { motion } from "motion/react";
import serverImage from "../assets/images/floating_server_1782625277167.jpg";
import workspaceRightImage from "../assets/images/workspace_right_1782628012437.jpg";

export function Skills() {
  return (
    <Section 
      id="skills" 
      title="Skills" 
      className="relative bg-transparent overflow-hidden"
      decorations={
        <>
          {/* Left panel: Floating server */}
          <div className="absolute inset-y-0 left-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={serverImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-left opacity-95 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to right, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, white 50%, transparent)'
              }}
            />
          </div>
          {/* Right panel: Workspace right */}
          <div className="absolute inset-y-0 right-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={workspaceRightImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-right opacity-80 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to left, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, white 50%, transparent)'
              }}
            />
          </div>
          {/* Environmental Storytelling: Developer Workspace */}
          <div className="absolute -bottom-10 right-10 w-2 h-2 bg-accent-primary opacity-20 animate-twinkle"></div>
          
          {/* Subtle grid floor */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[linear-gradient(rgba(42,53,85,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(42,53,85,0.2)_1px,transparent_1px)] bg-[size:40px_20px] opacity-30 pointer-events-none mask-image:linear-gradient(to_top,white,transparent)] transform perspective(500px) rotateX(60deg) origin-bottom"></div>
        </>
      }
    >

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {skills.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <h3 className="text-sm font-pixel text-text-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-secondary rounded-sm group-hover:animate-pulse shadow-[0_0_8px_rgba(124,92,255,0.3)] transition-all"></span>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-card-bg/50 backdrop-blur-sm border border-border-color text-text-secondary text-sm font-sans font-medium rounded hover:border-accent-primary/60 hover:text-accent-primary hover:shadow-[0_0_10px_rgba(79,209,197,0.15)] transition-all cursor-default relative overflow-hidden group/badge"
                >
                  {/* Subtle hover gleam */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700 ease-out"></span>
                  <span className="relative z-10 tracking-wide">{skill}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
