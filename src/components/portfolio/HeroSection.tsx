import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Profile Image */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
            <img
              src={profileImage}
              alt="Student profile"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-elevated"
            />
          </div>
          {/* Status indicator */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <Badge variant="status" className="gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for Opportunities
            </Badge>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
              <span className="text-gradient">Sohail Shirazi</span>
            </h1>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl md:text-2xl text-foreground/80 font-heading">
              Computer Science Student
            </p>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Passionate about building innovative solutions and learning new technologies. 
            Currently pursuing my degree with a focus on full-stack development and machine learning.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Machine Learning</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;