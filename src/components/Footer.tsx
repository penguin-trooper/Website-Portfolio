import footerImage from "../assets/images/footer_skyline_1782623821602.jpg";
import distantSkyline from "../assets/images/distant_skyline_1782626048639.jpg";
import flyingCar from "../assets/images/flying_car_1782627951693.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-border-color/10 bg-primary-bg/40 backdrop-blur-[2px] pt-32 pb-8 overflow-hidden mt-0">
      {/* Environmental Storytelling: City Skyline with Stars */}
      <div className="absolute top-5 right-[10%] w-1 h-1 bg-white opacity-40 animate-twinkle"></div>
      <div className="absolute top-16 left-[20%] w-1 h-1 bg-white opacity-20 animate-twinkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-20 right-[40%] w-1.5 h-1.5 bg-accent-secondary opacity-30 animate-twinkle" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle Shooting star */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[30%] w-[100px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ transform: 'rotate(-45deg)', animationDelay: '5s' }}></div>
      </div>

      {/* Flying Car drifting in background */}
      <div className="absolute top-[15%] left-0 w-full h-12 pointer-events-none overflow-hidden z-0 hidden md:block">
        <img 
          src={flyingCar} 
          alt="" 
          className="w-12 h-auto opacity-40 animate-fly-car pixelated" 
        />
      </div>

      {/* Smooth top-fade gradient: blends the section above into the footer skyline */}
      <div 
        className="absolute top-0 left-0 w-full h-52 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #0b1020 0%, #0b102080 50%, transparent 100%)'
        }}
      />

      {/* Background image skyline (Distant Layer) */}

      <div 
        className="absolute bottom-0 left-0 w-full h-[420px] opacity-70 pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url(${distantSkyline})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'bottom center', 
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, white 60%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, white 60%)'
        }}
      >
      </div>

      {/* Background image skyline (Foreground Layer) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[340px] opacity-90 pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url(${footerImage})`, 
          backgroundSize: 'contain', 
          backgroundPosition: 'bottom center', 
          backgroundRepeat: 'repeat-x',
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 25%, white 55%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 25%, white 55%)'
        }}
      >
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 bg-primary-bg/80 border border-border-color/50 rounded-lg p-6 backdrop-blur-sm">
        <p className="text-sm font-sans text-text-muted font-medium text-center md:text-left flex items-center gap-2">
          Designed & Developed by Muhammad Akmal Hakim bin Mazli.
          <span className="w-1.5 h-1.5 bg-accent-primary rounded-sm animate-pulse ml-2 inline-block"></span>
        </p>
        
        <p className="text-xs font-sans font-medium text-border-color opacity-70">
          &copy; {currentYear} ALL RIGHTS RESERVED.
        </p>
        
        <a 
          href="#home" 
          className="text-sm font-medium text-text-muted hover:text-accent-secondary transition-colors flex items-center gap-1 group"
        >
          <span className="font-sans font-semibold text-xs uppercase tracking-widest">Back to Top</span>
          <span className="group-hover:-translate-y-1 transition-transform">&uarr;</span>
        </a>
      </div>
    </footer>
  );
}
