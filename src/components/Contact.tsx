import { Section } from "./Section";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "motion/react";
import cafeSignImage from "../assets/images/cyber_cafe_sign_1782625248061.jpg";
import rainyStreetImage from "../assets/images/vending_machine_street_1782626083962.jpg";
import cafeLeftImage from "../assets/images/cafe_left_1782627936112.jpg";

export function Contact() {
  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      className="bg-transparent relative overflow-hidden"
      decorations={
        <>
          {/* Left panel: Cafe scene */}
          <div className="absolute inset-y-0 left-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={cafeLeftImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-left opacity-95 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to right, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, white 50%, transparent)'
              }}
            />
          </div>
          {/* Right panel: Vending machine / rainy street */}
          <div className="absolute inset-y-0 right-0 w-[30vw] pointer-events-none overflow-visible hidden md:block">
            <img 
              src={rainyStreetImage} 
              alt="" 
              className="absolute bottom-0 h-full w-full object-cover object-right opacity-80 pixelated" 
              style={{ 
                maskImage: 'linear-gradient(to left, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, white 50%, transparent)'
              }}
            />
          </div>
          {/* Rain Effect */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25 [mask-image:linear-gradient(to_bottom,transparent,white)]">
            <div className="absolute top-[-100%] left-[10%] w-[1px] h-[20%] bg-gradient-to-b from-transparent to-accent-primary animate-rain" style={{ animationDelay: '0.1s', animationDuration: '0.7s' }}></div>
            <div className="absolute top-[-100%] left-[20%] w-[1px] h-[18%] bg-gradient-to-b from-transparent to-white animate-rain" style={{ animationDelay: '0.3s', animationDuration: '0.85s' }}></div>
            <div className="absolute top-[-100%] left-[25%] w-[1px] h-[15%] bg-gradient-to-b from-transparent to-white animate-rain" style={{ animationDelay: '0.4s', animationDuration: '0.9s' }}></div>
            <div className="absolute top-[-100%] left-[38%] w-[1px] h-[22%] bg-gradient-to-b from-transparent to-accent-secondary animate-rain" style={{ animationDelay: '0.15s', animationDuration: '0.65s' }}></div>
            <div className="absolute top-[-100%] left-[45%] w-[1px] h-[25%] bg-gradient-to-b from-transparent to-accent-secondary animate-rain" style={{ animationDelay: '0.2s', animationDuration: '0.6s' }}></div>
            <div className="absolute top-[-100%] left-[55%] w-[1px] h-[16%] bg-gradient-to-b from-transparent to-accent-primary animate-rain" style={{ animationDelay: '0.6s', animationDuration: '0.7s' }}></div>
            <div className="absolute top-[-100%] left-[65%] w-[1px] h-[10%] bg-gradient-to-b from-transparent to-white animate-rain" style={{ animationDelay: '0.7s', animationDuration: '0.8s' }}></div>
            <div className="absolute top-[-100%] left-[78%] w-[1px] h-[24%] bg-gradient-to-b from-transparent to-accent-secondary animate-rain" style={{ animationDelay: '0.35s', animationDuration: '0.75s' }}></div>
            <div className="absolute top-[-100%] left-[85%] w-[1px] h-[20%] bg-gradient-to-b from-transparent to-accent-primary animate-rain" style={{ animationDelay: '0.5s', animationDuration: '0.75s' }}></div>
            <div className="absolute top-[-100%] left-[92%] w-[1px] h-[12%] bg-gradient-to-b from-transparent to-white animate-rain" style={{ animationDelay: '0.8s', animationDuration: '0.8s' }}></div>
          </div>

          <div className="absolute bottom-20 left-10 w-2 h-2 bg-accent-secondary opacity-30 animate-twinkle"></div>
          <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-accent-primary opacity-20 animate-twinkle" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 left-[12vw] w-2 h-2 bg-neon-pink opacity-70 animate-pixel-flicker hidden md:block"></div>
        </>
      }
    >
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary font-sans leading-relaxed mb-8 max-w-md">
            I am open to software engineering internship opportunities from August 2026 to February 2027. For inquiries, project discussions, or recruitment, reach out through the links below.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:akmalhakim0522@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-accent-primary transition-colors w-fit group">
              <div className="w-10 h-10 bg-card-bg border border-border-color rounded flex items-center justify-center group-hover:border-accent-primary/50 group-hover:shadow-[0_0_15px_rgba(79,209,197,0.2)] transition-all">
                <Mail size={16} />
              </div>
              <span className="font-sans font-medium text-sm">akmalhakim0522@gmail.com</span>
            </a>
            <a href="https://github.com/penguin-trooper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-muted hover:text-accent-primary transition-colors w-fit group">
              <div className="w-10 h-10 bg-card-bg border border-border-color rounded flex items-center justify-center group-hover:border-accent-primary/50 group-hover:shadow-[0_0_15px_rgba(79,209,197,0.2)] transition-all">
                <Github size={16} />
              </div>
              <span className="font-sans font-medium text-sm">github.com/penguin-trooper</span>
            </a>
            <a href="https://www.linkedin.com/in/akmalhakimm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-muted hover:text-accent-primary transition-colors w-fit group">
              <div className="w-10 h-10 bg-card-bg border border-border-color rounded flex items-center justify-center group-hover:border-accent-primary/50 group-hover:shadow-[0_0_15px_rgba(79,209,197,0.2)] transition-all">
                <Linkedin size={16} />
              </div>
              <span className="font-sans font-medium text-sm">linkedin.com/in/akmalhakimm</span>
            </a>
            <a href="/Resume%20Muhammad%20Akmal.pdf" download="Resume Muhammad Akmal.pdf" className="flex items-center gap-3 text-primary-bg hover:text-primary-bg transition-colors w-fit mt-4 group">
              <div className="px-5 py-2.5 bg-accent-primary text-primary-bg rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(79,209,197,0.3)] group-hover:shadow-[0_0_25px_rgba(79,209,197,0.5)] group-hover:bg-accent-primary/90 transition-all font-medium text-sm border border-transparent">
                <FileText size={16} />
                <span>Download Resume</span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-panel rounded-lg p-8 space-y-6 relative overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="absolute top-0 left-0 w-full h-8 bg-primary-bg/80 border-b border-border-color flex items-center px-4 justify-between backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-border-color"></div>
                <div className="w-2 h-2 rounded-sm bg-border-color"></div>
                <div className="w-2 h-2 rounded-sm bg-border-color"></div>
              </div>
              <span className="text-xs font-pixel text-text-muted opacity-80">contact.exe</span>
            </div>
            
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
            
            <form className="pt-6 space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs font-sans font-semibold text-text-muted mb-2 tracking-widest uppercase">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-sans text-sm shadow-inner"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-sans font-semibold text-text-muted mb-2 tracking-widest uppercase">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-sans text-sm shadow-inner"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-sans font-semibold text-text-muted mb-2 tracking-widest uppercase">MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-bg border border-border-color rounded text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none font-sans text-sm shadow-inner"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="button"
                className="w-full py-3 px-6 bg-transparent border border-accent-secondary text-accent-secondary font-pixel text-xs rounded hover:bg-accent-secondary hover:text-primary-bg transition-colors uppercase tracking-widest shadow-[0_0_15px_rgba(124,92,255,0.1)] hover:shadow-[0_0_20px_rgba(124,92,255,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
