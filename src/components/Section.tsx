import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  decorations?: ReactNode;
}

export function Section({ id, title, children, className = "", decorations }: SectionProps) {
  return (
    <section id={id} className={`py-6 md:py-10 relative section-fade-edges ${className}`}>
      {decorations && <div className="absolute inset-0 z-0">{decorations}</div>}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 bg-primary-bg/85 backdrop-blur-md rounded-2xl md:rounded-none md:border-x border-border-color/30 shadow-[0_0_40px_10px_rgba(11,16,32,0.6)] py-8">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-pixel text-xl md:text-2xl text-neon-cyan tracking-wider mb-12 flex items-center gap-4 drop-shadow-[0_0_8px_rgba(109,202,253,0.5)] uppercase"
          >
            {title}
            <span className="h-px bg-border-color flex-1 ml-4 hidden md:block"></span>
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
