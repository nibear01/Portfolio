import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles, Terminal } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Status badge */}
            <div className="opacity-0 animate-fade-up flex items-center justify-center lg:justify-start gap-2 sm:gap-4 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Work
              </span>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary border border-border text-muted-foreground text-xs sm:text-sm font-medium">
                <Code2 size={14} />
                Full Stack Developer
              </span>
            </div>

            {/* Main heading */}
            <div className="opacity-0 animate-fade-up delay-100">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6">
                <span className="block">Naved Abrar</span>
                <span className="block gradient-text">Nibir</span>
              </h1>
            </div>

            {/* Description with accent */}
            <div className="opacity-0 animate-fade-up delay-200 relative px-4 lg:px-0">
              <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:pl-4">
                Crafting exceptional digital experiences through{" "}
                <span className="text-primary ">MERN Stack development</span> and{" "}
                <span className="text-primary ">Test Engineering</span>.
                Transforming ideas into scalable, high-performance web applications.
              </p>
            </div>

            {/* Stats row */}
            <div className="opacity-0 animate-fade-up delay-300 grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-border/50">
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">1+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
              </div>
              {/* <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </div> */}
            </div>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-border bg-secondary/50 backdrop-blur-sm text-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base"
              >
                <Mail size={18} />
                Let's Talk
              </a>
            </div>

            {/* Social links - Redesigned */}
            <div className="opacity-0 animate-fade-up delay-500 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/nibear01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 sm:p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naved-abrar-nibir-852121300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 sm:p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="mailto:navedabrar80@gmail.com"
                  className="group relative p-2.5 sm:p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Photo Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative opacity-0 animate-scale-in delay-200">
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl scale-90" />
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-slow" style={{ transform: 'scale(1.15)' }} />
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow delay-500" style={{ transform: 'scale(1.25)' }} />
              
              {/* Main image container with enhanced styling */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-[3px]">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-background">
                    <img
                      src={profilePhoto}
                      alt="Naved Abrar Nibir"
                      className="w-full h-full object-cover object-top scale-125 translate-y-8 hover:scale-[1.3] transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced floating badges - Mobile responsive */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 px-3 sm:px-5 py-2 sm:py-3 glass-card rounded-xl sm:rounded-2xl border border-primary/20 animate-float shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Terminal size={16} className="sm:w-[18px] sm:h-[18px] text-primary" />
                  <span className="text-xs sm:text-sm font-mono font-semibold text-foreground">Developer</span>
                </div>
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -left-4 sm:-left-8 px-3 sm:px-5 py-2 sm:py-3 glass-card rounded-xl sm:rounded-2xl border border-primary/20 animate-float delay-500 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Code2 size={16} className="sm:w-[18px] sm:h-[18px] text-primary" />
                  <span className="text-xs sm:text-sm font-mono font-semibold text-foreground">MERN Stack</span>
                </div>
              </div>
              <div className="hidden sm:block absolute top-1/2 -right-8 lg:-right-12 px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-xl border border-primary/20 animate-float delay-700 shadow-lg">
                <span className="text-xs font-mono text-primary font-semibold">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-1000">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current/30 flex items-start justify-center p-1 group-hover:border-current/50 transition-colors">
            <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
