import { Github, Linkedin } from "lucide-react";
import { navItems } from "../data";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-t-0 border-r-0 border-l-0 border-border-color shadow-sm">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-color to-transparent"></div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-pixel tracking-tighter text-text-primary flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 bg-accent-primary rounded-sm group-hover:animate-pulse shadow-[0_0_8px_rgba(79,209,197,0.5)]"></span>
          <span className="text-[14px]">PORTFOLIO</span>
          <span className="w-2 h-4 bg-accent-primary inline-block animate-blink ml-0.5"></span>
        </a>
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-[8px] md:text-[10px] font-pixel text-text-secondary hover:text-accent-primary transition-colors hover:shadow-[0_0_10px_rgba(79,209,197,0.2)] uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 border-l border-border-color pl-6 ml-2">
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors">
              <Github size={16} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
