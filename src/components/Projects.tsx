import { Section } from "./Section";
import { projects } from "../data";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import techBridgeImage from "../assets/images/a_high_definition_refined_portrait_version_of_this_pixel_art_cyberpunk.png";
import techLeftImage from "../assets/images/a_high_definition_refined_portrait_version_of_this_pixel_art_cyberpunk (1).png";

export function Projects() {
  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      className="bg-transparent relative overflow-hidden"
      decorations={
        <>
          {/* Left panel: Tech left */}
          <div className="absolute inset-y-0 left-0 w-[clamp(180px,14vw,260px)] pointer-events-none overflow-hidden hidden md:block">
            <img 
              src={techLeftImage} 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover object-[left_top] opacity-95 [image-rendering:auto] transform-gpu" 
              style={{ 
                maskImage: 'linear-gradient(to right, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, white 50%, transparent)'
              }}
            />
          </div>
          {/* Right panel: Tech bridge */}
          <div className="absolute inset-y-0 right-0 w-[clamp(180px,14vw,260px)] pointer-events-none overflow-hidden hidden md:block">
            <img 
              src={techBridgeImage} 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover object-[right_top] opacity-88 [image-rendering:auto] transform-gpu" 
              style={{ 
                maskImage: 'linear-gradient(to left, white 50%, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, white 50%, transparent)'
              }}
            />
          </div>
          <div className="absolute top-20 right-10 w-1.5 h-1.5 bg-accent-primary opacity-20 animate-twinkle"></div>
          <div className="absolute bottom-40 left-10 w-1 h-1 bg-accent-secondary opacity-30 animate-twinkle"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(42,53,85,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(42,53,85,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        </>
      }
    >

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-card-bg rounded-lg border border-border-color overflow-hidden hover:border-accent-primary/60 hover:shadow-[0_0_20px_rgba(79,209,197,0.15)] transition-all duration-300 relative"
          >
            {/* Window controls bar */}
            <div className="h-8 border-b border-border-color bg-primary-bg/80 flex items-center px-4 justify-between backdrop-blur-sm relative z-20">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-error/80 border border-error"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-highlight/80 border border-highlight"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-success/80 border border-success"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-pixel text-text-muted truncate max-w-[150px]">
                  {project.title.toLowerCase().replace(/\s+/g, '_')}.exe
                </span>
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.5)]"></span>
              </div>
            </div>

            <div className="aspect-[16/7] md:aspect-[16/6] bg-primary-bg flex items-center justify-center border-b border-border-color overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-bg to-card-bg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded border border-border-color flex items-center justify-center relative z-10 bg-card-bg group-hover:border-accent-primary/50 transition-colors shadow-lg">
                <span className="text-accent-primary font-sans font-bold text-lg group-hover:animate-pulse">{project.title.charAt(0)}</span>
              </div>
              {/* Subtle retro grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(42,53,85,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(42,53,85,0.3)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>
            </div>
            
            <div className="p-5 md:p-6 flex flex-col flex-grow relative bg-card-bg">
              <h3 className="text-xl font-sans font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">{project.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6 flex-grow font-sans text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 relative z-20">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] md:text-[11px] font-pixel text-text-muted bg-primary-bg border border-border-color px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto relative z-20 border-t border-border-color/50 pt-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary hover:shadow-[0_0_10px_rgba(248,250,252,0.2)] transition-all bg-primary-bg border border-border-color px-3 py-1.5 rounded"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-primary-bg hover:bg-accent-primary transition-all border border-accent-primary px-3 py-1.5 rounded shadow-[0_0_10px_rgba(79,209,197,0.1)] hover:shadow-[0_0_15px_rgba(79,209,197,0.4)]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
