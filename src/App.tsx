import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import distantSkyline from "./assets/images/distant_skyline_1782626048639.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-primary-bg overflow-x-hidden relative text-text-secondary selection:bg-accent-primary selection:text-primary-bg">
      {/* Global Ambient Environment */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,53,85,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(42,53,85,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        {/* Distant stars */}
        <div className="absolute top-[10%] left-[20%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] left-[80%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-accent-secondary rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[80%] left-[70%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[15%] left-[50%] w-1.5 h-1.5 bg-accent-primary rounded-full animate-twinkle opacity-30" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[5%] left-[90%] w-1 h-1 bg-neon-pink rounded-full animate-twinkle opacity-60" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-[40%] left-[40%] w-0.5 h-0.5 bg-neon-cyan rounded-full animate-twinkle opacity-40" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[30%] left-[30%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-60" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[50%] left-[85%] w-0.5 h-0.5 bg-accent-primary rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-[70%] left-[60%] w-1.5 h-1.5 bg-accent-secondary rounded-full animate-twinkle opacity-30" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[85%] left-[25%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1.1s' }}></div>
        
        {/* Shooting Stars */}
        <div className="absolute top-[5%] right-[5%] w-[100px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ transform: 'rotate(-45deg)' }}></div>
        <div className="absolute top-[30%] left-[10%] w-[150px] h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 animate-shooting-star" style={{ transform: 'rotate(-30deg)', animationDelay: '12s' }}></div>

        {/* Global Moon */}
        <div className="absolute top-[5%] right-[15%] w-24 h-24 bg-[#f9d65c] rounded-full shadow-[0_0_80px_rgba(249,214,92,0.3)] opacity-40 blur-[1px]">
          {/* Craters */}
          <div className="absolute top-[20%] left-[30%] w-4 h-4 bg-[#e5b93d] rounded-full opacity-30"></div>
          <div className="absolute top-[50%] left-[20%] w-6 h-6 bg-[#e5b93d] rounded-full opacity-30"></div>
          <div className="absolute top-[60%] left-[60%] w-5 h-5 bg-[#e5b93d] rounded-full opacity-30"></div>
        </div>

        {/* Global Clouds */}
        <div className="absolute top-[10%] -left-[20%] w-[30vw] h-12 bg-secondary-bg/50 rounded-full blur-3xl animate-drift pointer-events-none"></div>
        <div className="absolute top-[20%] -left-[40%] w-[50vw] h-16 bg-accent-secondary/20 rounded-full blur-3xl animate-drift-slow pointer-events-none"></div>
        <div className="absolute top-[35%] -left-[10%] w-[25vw] h-10 bg-primary-bg/60 rounded-full blur-2xl animate-drift pointer-events-none" style={{ animationDuration: '75s' }}></div>

        {/* Hovering Drones */}
        <div className="absolute top-[15%] left-[60%] w-2 h-1 bg-gray-600 rounded-sm animate-float opacity-70">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-error animate-blink"></div>
        </div>
        <div className="absolute top-[45%] right-[20%] w-3 h-1.5 bg-gray-700 rounded-sm animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '4s' }}>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-primary animate-pulse shadow-[0_0_5px_rgba(79,209,197,0.8)]"></div>
        </div>
      </div>

      {/* Central Dark Overlay for Content Readability */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-primary-bg/80 backdrop-blur-md z-0 shadow-[0_0_60px_30px_rgba(11,16,32,0.7)] pointer-events-none hidden md:block"></div>
      <div className="fixed inset-0 bg-primary-bg/95 z-0 pointer-events-none md:hidden"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
