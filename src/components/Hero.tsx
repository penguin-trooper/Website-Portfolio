import { motion } from "motion/react";
import { Github, Linkedin, ArrowRight, FileText } from "lucide-react";
import { Section } from "./Section";
import heroImage from "../assets/images/hero_pixel_art_1782623806416.jpg";
import arcadeLeft from "../assets/images/arcade_left_1782627855227.jpg";
import arcadeStorefront from "../assets/images/arcade_storefront_1782626066739.jpg";

export function Hero() {
  return (
    <Section 
      id="home" 
      className="pt-24 pb-12 md:pt-32 md:pb-16 min-h-[90vh] flex items-center relative overflow-hidden"
      decorations={
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Full screen background city scene */}
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover object-center opacity-80 md:opacity-90 [image-rendering:auto] transform-gpu"
          />
          {/* Gradient mask for readable text layout */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-bg/95 via-primary-bg/75 to-primary-bg/40 md:from-primary-bg/90 md:via-primary-bg/60 md:to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-bg to-transparent"></div>
          {/* Subtle neon bottom glow */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent-primary/10 to-transparent"></div>
        </div>
      }
    >
      <div className="flex items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
            <span className="text-sm font-pixel text-accent-primary tracking-widest border border-accent-primary/30 rounded bg-accent-primary/5 px-2 py-1 shadow-[0_0_10px_rgba(79,209,197,0.1)]">
              SYS.INIT_
            </span>
          </div>
          
          <div className="mb-2">
            <span className="text-xl md:text-2xl font-pixel text-text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              HELLO, I AM
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-pixel text-neon-pink leading-none mb-6 relative inline-block drop-shadow-[0_0_12px_rgba(255,0,255,0.4)] uppercase max-w-none">
            <span className="block whitespace-nowrap tracking-tight md:tracking-[-0.03em]">Muhammad Akmal</span>
            <span className="block whitespace-nowrap mt-2 md:mt-3 tracking-tight md:tracking-[-0.04em] md:pl-1">Hakim Bin Mazli</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full opacity-50"></span>
          </h1>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-xl font-sans">
            Hi, I'm Muhammad Akmal Hakim bin Mazli, a software engineering student focused on full-stack development, mobile apps, software testing, machine learning, and database systems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-primary-bg font-medium rounded border border-transparent hover:bg-accent-primary/90 transition-all shadow-[0_0_15px_rgba(79,209,197,0.3)] hover:shadow-[0_0_25px_rgba(79,209,197,0.5)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative">View Projects</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
              <span className="absolute top-1 right-1 w-1 h-1 bg-primary-bg/50 rounded-sm"></span>
            </a>
            <a 
              href="/Resume%20Muhammad%20Akmal.pdf"
              download="Resume Muhammad Akmal.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-text-primary font-medium rounded border border-border-color hover:bg-card-bg hover:border-accent-secondary/50 transition-colors group relative"
            >
              <FileText size={18} className="group-hover:text-accent-secondary transition-colors" />
              <span>Resume</span>
              <span className="absolute bottom-1 left-1 w-1 h-1 bg-border-color rounded-sm group-hover:bg-accent-secondary/50 transition-colors"></span>
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a 
                href="https://github.com/penguin-trooper" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-muted hover:text-accent-primary hover:bg-card-bg rounded-md transition-all border border-transparent hover:border-border-color"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/akmalhakimm" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-muted hover:text-accent-primary hover:bg-card-bg rounded-md transition-all border border-transparent hover:border-border-color"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
